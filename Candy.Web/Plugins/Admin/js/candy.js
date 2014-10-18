/*
 jQuery resizeEnd
*/
(function ($, window, document) {
    var ResizeEnd, defaults, plugin;
    plugin = 'resizeEnd';
    defaults = {
        delay: 250
    };
    ResizeEnd = function (element, options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        callback = callback || null;
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = plugin;
        this._timeout = false;
        this._callback = callback;
        return this.init();
    };
    ResizeEnd.prototype = {
        init: function () {
            var $el, _this;
            _this = this;
            $el = $(this.element);
            return $el.on('resize', function () {
                return _this.initResize();
            });
        },
        getUTCDate: function (d) {
            var curdate;
            d = d || new Date();
            curdate = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
            return curdate;
        },
        initResize: function () {
            var _this;
            _this = this;
            _this.controlTime = _this.getUTCDate();
            if (_this._timeout === false) {
                _this._timeout = true;
                return setTimeout(function () {
                    return _this.runCallback(_this);
                }, _this.settings.delay);
            }
        },
        runCallback: function (_this) {
            var nowTime;
            nowTime = _this.getUTCDate();
            if (nowTime - _this.controlTime < _this.settings.delay) {
                return setTimeout(function () {
                    return _this.runCallback(_this);
                }, _this.settings.delay);
            } else {
                _this._timeout = false;
                return _this._callback();
            }
        }
    };
    return $.fn[plugin] = function (options, callback) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + plugin)) {
                return $.data(this, 'plugin_' + plugin, new ResizeEnd(this, options, callback));
            }
        });
    };
})(jQuery, window, document);


/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ('onwheel' in document || document.documentMode >= 9) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ($.event.fixHooks) {
        for (var i = toFix.length; i;) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.9',

        setup: function () {
            if (this.addEventListener) {
                for (var i = toBind.length; i;) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function () {
            if (this.removeEventListener) {
                for (var i = toBind.length; i;) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        },

        getLineHeight: function (elem) {
            return parseInt($(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']().css('fontSize'), 10);
        },

        getPageHeight: function (elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true
        }
    };

    $.fn.extend({
        mousewheel: function (fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function (fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent = event || window.event,
            args = slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ('detail' in orgEvent) { deltaY = orgEvent.detail * -1; }
        if ('wheelDelta' in orgEvent) { deltaY = orgEvent.wheelDelta; }
        if ('wheelDeltaY' in orgEvent) { deltaY = orgEvent.wheelDeltaY; }
        if ('wheelDeltaX' in orgEvent) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ('deltaY' in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if ('deltaX' in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (deltaY === 0) { delta = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if (deltaY === 0 && deltaX === 0) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if (orgEvent.deltaMode === 1) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if (orgEvent.deltaMode === 2) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
            // Divide all the things by 40!
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
        deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
        deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

/* Copyright (c) 2012, 2014 Hyeonje Alex Jun and other contributors
 * Licensed under the MIT License
 */
(function (factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    'use strict';

    // The default settings for the plugin
    var defaultSettings = {
        wheelSpeed: 10,
        wheelPropagation: false,
        minScrollbarLength: null,
        useBothWheelAxes: false,
        useKeyboard: true,
        suppressScrollX: false,
        suppressScrollY: false,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        includePadding: false
    };

    var getEventClassName = (function () {
        var incrementingId = 0;
        return function () {
            var id = incrementingId;
            incrementingId += 1;
            return '.perfect-scrollbar-' + id;
        };
    }());

    $.fn.perfectScrollbar = function (suppliedSettings, option) {

        return this.each(function () {
            // Use the default settings
            var settings = $.extend(true, {}, defaultSettings),
                $this = $(this);

            if (typeof suppliedSettings === "object") {
                // But over-ride any supplied
                $.extend(true, settings, suppliedSettings);
            } else {
                // If no settings were supplied, then the first param must be the option
                option = suppliedSettings;
            }

            // Catch options

            if (option === 'update') {
                if ($this.data('perfect-scrollbar-update')) {
                    $this.data('perfect-scrollbar-update')();
                }
                return $this;
            }
            else if (option === 'destroy') {
                if ($this.data('perfect-scrollbar-destroy')) {
                    $this.data('perfect-scrollbar-destroy')();
                }
                return $this;
            }

            if ($this.data('perfect-scrollbar')) {
                // if there's already perfect-scrollbar
                return $this.data('perfect-scrollbar');
            }


            // Or generate new perfectScrollbar

            // Set class to the container
            $this.addClass('ps-container');

            var $scrollbarXRail = $("<div class='ps-scrollbar-x-rail'></div>").appendTo($this),
                $scrollbarYRail = $("<div class='ps-scrollbar-y-rail'></div>").appendTo($this),
                $scrollbarX = $("<div class='ps-scrollbar-x'></div>").appendTo($scrollbarXRail),
                $scrollbarY = $("<div class='ps-scrollbar-y'></div>").appendTo($scrollbarYRail),
                scrollbarXActive,
                scrollbarYActive,
                containerWidth,
                containerHeight,
                contentWidth,
                contentHeight,
                scrollbarXWidth,
                scrollbarXLeft,
                scrollbarXBottom = parseInt($scrollbarXRail.css('bottom'), 10),
                isScrollbarXUsingBottom = scrollbarXBottom === scrollbarXBottom, // !isNaN
                scrollbarXTop = isScrollbarXUsingBottom ? null : parseInt($scrollbarXRail.css('top'), 10),
                scrollbarYHeight,
                scrollbarYTop,
                scrollbarYRight = parseInt($scrollbarYRail.css('right'), 10),
                isScrollbarYUsingRight = scrollbarYRight === scrollbarYRight, // !isNaN
                scrollbarYLeft = isScrollbarYUsingRight ? null : parseInt($scrollbarYRail.css('left'), 10),
                isRtl = $this.css('direction') === "rtl",
                eventClassName = getEventClassName();

            var updateContentScrollTop = function (currentTop, deltaY) {
                var newTop = currentTop + deltaY,
                    maxTop = containerHeight - scrollbarYHeight;

                if (newTop < 0) {
                    scrollbarYTop = 0;
                }
                else if (newTop > maxTop) {
                    scrollbarYTop = maxTop;
                }
                else {
                    scrollbarYTop = newTop;
                }

                var scrollTop = parseInt(scrollbarYTop * (contentHeight - containerHeight) / (containerHeight - scrollbarYHeight), 10);
                $this.scrollTop(scrollTop);

                if (isScrollbarXUsingBottom) {
                    $scrollbarXRail.css({ bottom: scrollbarXBottom - scrollTop });
                } else {
                    $scrollbarXRail.css({ top: scrollbarXTop + scrollTop });
                }
            };

            var updateContentScrollLeft = function (currentLeft, deltaX) {
                var newLeft = currentLeft + deltaX,
                    maxLeft = containerWidth - scrollbarXWidth;

                if (newLeft < 0) {
                    scrollbarXLeft = 0;
                }
                else if (newLeft > maxLeft) {
                    scrollbarXLeft = maxLeft;
                }
                else {
                    scrollbarXLeft = newLeft;
                }

                var scrollLeft = parseInt(scrollbarXLeft * (contentWidth - containerWidth) / (containerWidth - scrollbarXWidth), 10);
                $this.scrollLeft(scrollLeft);

                if (isScrollbarYUsingRight) {
                    $scrollbarYRail.css({ right: scrollbarYRight - scrollLeft });
                } else {
                    $scrollbarYRail.css({ left: scrollbarYLeft + scrollLeft });
                }
            };

            var getSettingsAdjustedThumbSize = function (thumbSize) {
                if (settings.minScrollbarLength) {
                    thumbSize = Math.max(thumbSize, settings.minScrollbarLength);
                }
                return thumbSize;
            };

            var updateScrollbarCss = function () {
                var scrollbarXStyles = { width: containerWidth, display: scrollbarXActive ? "inherit" : "none" };
                if (isRtl) {
                    scrollbarXStyles.left = $this.scrollLeft() + containerWidth - contentWidth;
                } else {
                    scrollbarXStyles.left = $this.scrollLeft();
                }
                if (isScrollbarXUsingBottom) {
                    scrollbarXStyles.bottom = scrollbarXBottom - $this.scrollTop();
                } else {
                    scrollbarXStyles.top = scrollbarXTop + $this.scrollTop();
                }
                $scrollbarXRail.css(scrollbarXStyles);

                var scrollbarYStyles = { top: $this.scrollTop(), height: containerHeight, display: scrollbarYActive ? "inherit" : "none" };

                if (isScrollbarYUsingRight) {
                    if (isRtl) {
                        scrollbarYStyles.right = contentWidth - $this.scrollLeft() - scrollbarYRight - $scrollbarY.outerWidth();
                    } else {
                        scrollbarYStyles.right = scrollbarYRight - $this.scrollLeft();
                    }
                } else {
                    if (isRtl) {
                        scrollbarYStyles.left = $this.scrollLeft() + containerWidth * 2 - contentWidth - scrollbarYLeft - $scrollbarY.outerWidth();
                    } else {
                        scrollbarYStyles.left = scrollbarYLeft + $this.scrollLeft();
                    }
                }
                $scrollbarYRail.css(scrollbarYStyles);

                $scrollbarX.css({ left: scrollbarXLeft, width: scrollbarXWidth });
                $scrollbarY.css({ top: scrollbarYTop, height: scrollbarYHeight });
            };

            var updateBarSizeAndPosition = function () {
                containerWidth = settings.includePadding ? $this.innerWidth() : $this.width();
                containerHeight = settings.includePadding ? $this.innerHeight() : $this.height();
                contentWidth = $this.prop('scrollWidth');
                contentHeight = $this.prop('scrollHeight');

                if (!settings.suppressScrollX && containerWidth + settings.scrollXMarginOffset < contentWidth) {
                    scrollbarXActive = true;
                    scrollbarXWidth = getSettingsAdjustedThumbSize(parseInt(containerWidth * containerWidth / contentWidth, 10));
                    scrollbarXLeft = parseInt($this.scrollLeft() * (containerWidth - scrollbarXWidth) / (contentWidth - containerWidth), 10);
                }
                else {
                    scrollbarXActive = false;
                    scrollbarXWidth = 0;
                    scrollbarXLeft = 0;
                    $this.scrollLeft(0);
                }

                if (!settings.suppressScrollY && containerHeight + settings.scrollYMarginOffset < contentHeight) {
                    scrollbarYActive = true;
                    scrollbarYHeight = getSettingsAdjustedThumbSize(parseInt(containerHeight * containerHeight / contentHeight, 10));
                    scrollbarYTop = parseInt($this.scrollTop() * (containerHeight - scrollbarYHeight) / (contentHeight - containerHeight), 10);
                }
                else {
                    scrollbarYActive = false;
                    scrollbarYHeight = 0;
                    scrollbarYTop = 0;
                    $this.scrollTop(0);
                }

                if (scrollbarYTop >= containerHeight - scrollbarYHeight) {
                    scrollbarYTop = containerHeight - scrollbarYHeight;
                }
                if (scrollbarXLeft >= containerWidth - scrollbarXWidth) {
                    scrollbarXLeft = containerWidth - scrollbarXWidth;
                }

                updateScrollbarCss();
            };

            var bindMouseScrollXHandler = function () {
                var currentLeft,
                    currentPageX;

                $scrollbarX.bind('mousedown' + eventClassName, function (e) {
                    currentPageX = e.pageX;
                    currentLeft = $scrollbarX.position().left;
                    $scrollbarXRail.addClass('in-scrolling');
                    e.stopPropagation();
                    e.preventDefault();
                });

                $(document).bind('mousemove' + eventClassName, function (e) {
                    if ($scrollbarXRail.hasClass('in-scrolling')) {
                        updateContentScrollLeft(currentLeft, e.pageX - currentPageX);
                        e.stopPropagation();
                        e.preventDefault();
                    }
                });

                $(document).bind('mouseup' + eventClassName, function (e) {
                    if ($scrollbarXRail.hasClass('in-scrolling')) {
                        $scrollbarXRail.removeClass('in-scrolling');
                    }
                });

                currentLeft =
                currentPageX = null;
            };

            var bindMouseScrollYHandler = function () {
                var currentTop,
                    currentPageY;

                $scrollbarY.bind('mousedown' + eventClassName, function (e) {
                    currentPageY = e.pageY;
                    currentTop = $scrollbarY.position().top;
                    $scrollbarYRail.addClass('in-scrolling');
                    e.stopPropagation();
                    e.preventDefault();
                });

                $(document).bind('mousemove' + eventClassName, function (e) {
                    if ($scrollbarYRail.hasClass('in-scrolling')) {
                        updateContentScrollTop(currentTop, e.pageY - currentPageY);
                        e.stopPropagation();
                        e.preventDefault();
                    }
                });

                $(document).bind('mouseup' + eventClassName, function (e) {
                    if ($scrollbarYRail.hasClass('in-scrolling')) {
                        $scrollbarYRail.removeClass('in-scrolling');
                    }
                });

                currentTop =
                currentPageY = null;
            };

            // check if the default scrolling should be prevented.
            var shouldPreventDefault = function (deltaX, deltaY) {
                var scrollTop = $this.scrollTop();
                if (deltaX === 0) {
                    if (!scrollbarYActive) {
                        return false;
                    }
                    if ((scrollTop === 0 && deltaY > 0) || (scrollTop >= contentHeight - containerHeight && deltaY < 0)) {
                        return !settings.wheelPropagation;
                    }
                }

                var scrollLeft = $this.scrollLeft();
                if (deltaY === 0) {
                    if (!scrollbarXActive) {
                        return false;
                    }
                    if ((scrollLeft === 0 && deltaX < 0) || (scrollLeft >= contentWidth - containerWidth && deltaX > 0)) {
                        return !settings.wheelPropagation;
                    }
                }
                return true;
            };

            // bind handlers
            var bindMouseWheelHandler = function () {
                // FIXME: Backward compatibility.
                // After e.deltaFactor applied, wheelSpeed should have smaller value.
                // Currently, there's no way to change the settings after the scrollbar initialized.
                // But if the way is implemented in the future, wheelSpeed should be reset.
                settings.wheelSpeed /= 10;

                var shouldPrevent = false;
                $this.bind('mousewheel' + eventClassName, function (e, deprecatedDelta, deprecatedDeltaX, deprecatedDeltaY) {
                    var deltaX = e.deltaX * e.deltaFactor || deprecatedDeltaX,
                        deltaY = e.deltaY * e.deltaFactor || deprecatedDeltaY;

                    shouldPrevent = false;
                    if (!settings.useBothWheelAxes) {
                        // deltaX will only be used for horizontal scrolling and deltaY will
                        // only be used for vertical scrolling - this is the default
                        $this.scrollTop($this.scrollTop() - (deltaY * settings.wheelSpeed));
                        $this.scrollLeft($this.scrollLeft() + (deltaX * settings.wheelSpeed));
                    } else if (scrollbarYActive && !scrollbarXActive) {
                        // only vertical scrollbar is active and useBothWheelAxes option is
                        // active, so let's scroll vertical bar using both mouse wheel axes
                        if (deltaY) {
                            $this.scrollTop($this.scrollTop() - (deltaY * settings.wheelSpeed));
                        } else {
                            $this.scrollTop($this.scrollTop() + (deltaX * settings.wheelSpeed));
                        }
                        shouldPrevent = true;
                    } else if (scrollbarXActive && !scrollbarYActive) {
                        // useBothWheelAxes and only horizontal bar is active, so use both
                        // wheel axes for horizontal bar
                        if (deltaX) {
                            $this.scrollLeft($this.scrollLeft() + (deltaX * settings.wheelSpeed));
                        } else {
                            $this.scrollLeft($this.scrollLeft() - (deltaY * settings.wheelSpeed));
                        }
                        shouldPrevent = true;
                    }

                    // update bar position
                    updateBarSizeAndPosition();

                    shouldPrevent = (shouldPrevent || shouldPreventDefault(deltaX, deltaY));
                    if (shouldPrevent) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                });

                // fix Firefox scroll problem
                $this.bind('MozMousePixelScroll' + eventClassName, function (e) {
                    if (shouldPrevent) {
                        e.preventDefault();
                    }
                });
            };

            var bindKeyboardHandler = function () {
                var hovered = false;
                $this.bind('mouseenter' + eventClassName, function (e) {
                    hovered = true;
                });
                $this.bind('mouseleave' + eventClassName, function (e) {
                    hovered = false;
                });

                var shouldPrevent = false;
                $(document).bind('keydown' + eventClassName, function (e) {
                    if (!hovered || $(document.activeElement).is(":input,[contenteditable]")) {
                        return;
                    }

                    var deltaX = 0,
                        deltaY = 0;

                    switch (e.which) {
                        case 37: // left
                            deltaX = -30;
                            break;
                        case 38: // up
                            deltaY = 30;
                            break;
                        case 39: // right
                            deltaX = 30;
                            break;
                        case 40: // down
                            deltaY = -30;
                            break;
                        case 33: // page up
                            deltaY = 90;
                            break;
                        case 32: // space bar
                        case 34: // page down
                            deltaY = -90;
                            break;
                        case 35: // end
                            deltaY = -containerHeight;
                            break;
                        case 36: // home
                            deltaY = containerHeight;
                            break;
                        default:
                            return;
                    }

                    $this.scrollTop($this.scrollTop() - deltaY);
                    $this.scrollLeft($this.scrollLeft() + deltaX);

                    shouldPrevent = shouldPreventDefault(deltaX, deltaY);
                    if (shouldPrevent) {
                        e.preventDefault();
                    }
                });
            };

            var bindRailClickHandler = function () {
                var stopPropagation = function (e) { e.stopPropagation(); };

                $scrollbarY.bind('click' + eventClassName, stopPropagation);
                $scrollbarYRail.bind('click' + eventClassName, function (e) {
                    var halfOfScrollbarLength = parseInt(scrollbarYHeight / 2, 10),
                        positionTop = e.pageY - $scrollbarYRail.offset().top - halfOfScrollbarLength,
                        maxPositionTop = containerHeight - scrollbarYHeight,
                        positionRatio = positionTop / maxPositionTop;

                    if (positionRatio < 0) {
                        positionRatio = 0;
                    } else if (positionRatio > 1) {
                        positionRatio = 1;
                    }

                    $this.scrollTop((contentHeight - containerHeight) * positionRatio);
                });

                $scrollbarX.bind('click' + eventClassName, stopPropagation);
                $scrollbarXRail.bind('click' + eventClassName, function (e) {
                    var halfOfScrollbarLength = parseInt(scrollbarXWidth / 2, 10),
                        positionLeft = e.pageX - $scrollbarXRail.offset().left - halfOfScrollbarLength,
                        maxPositionLeft = containerWidth - scrollbarXWidth,
                        positionRatio = positionLeft / maxPositionLeft;

                    if (positionRatio < 0) {
                        positionRatio = 0;
                    } else if (positionRatio > 1) {
                        positionRatio = 1;
                    }

                    $this.scrollLeft((contentWidth - containerWidth) * positionRatio);
                });
            };

            // bind mobile touch handler
            var bindMobileTouchHandler = function () {
                var applyTouchMove = function (differenceX, differenceY) {
                    $this.scrollTop($this.scrollTop() - differenceY);
                    $this.scrollLeft($this.scrollLeft() - differenceX);

                    // update bar position
                    updateBarSizeAndPosition();
                };

                var startCoords = {},
                    startTime = 0,
                    speed = {},
                    breakingProcess = null,
                    inGlobalTouch = false;

                $(window).bind("touchstart" + eventClassName, function (e) {
                    inGlobalTouch = true;
                });
                $(window).bind("touchend" + eventClassName, function (e) {
                    inGlobalTouch = false;
                });

                $this.bind("touchstart" + eventClassName, function (e) {
                    var touch = e.originalEvent.targetTouches[0];

                    startCoords.pageX = touch.pageX;
                    startCoords.pageY = touch.pageY;

                    startTime = (new Date()).getTime();

                    if (breakingProcess !== null) {
                        clearInterval(breakingProcess);
                    }

                    e.stopPropagation();
                });
                $this.bind("touchmove" + eventClassName, function (e) {
                    if (!inGlobalTouch && e.originalEvent.targetTouches.length === 1) {
                        var touch = e.originalEvent.targetTouches[0];

                        var currentCoords = {};
                        currentCoords.pageX = touch.pageX;
                        currentCoords.pageY = touch.pageY;

                        var differenceX = currentCoords.pageX - startCoords.pageX,
                          differenceY = currentCoords.pageY - startCoords.pageY;

                        applyTouchMove(differenceX, differenceY);
                        startCoords = currentCoords;

                        var currentTime = (new Date()).getTime();

                        var timeGap = currentTime - startTime;
                        if (timeGap > 0) {
                            speed.x = differenceX / timeGap;
                            speed.y = differenceY / timeGap;
                            startTime = currentTime;
                        }

                        e.preventDefault();
                    }
                });
                $this.bind("touchend" + eventClassName, function (e) {
                    clearInterval(breakingProcess);
                    breakingProcess = setInterval(function () {
                        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
                            clearInterval(breakingProcess);
                            return;
                        }

                        applyTouchMove(speed.x * 30, speed.y * 30);

                        speed.x *= 0.8;
                        speed.y *= 0.8;
                    }, 10);
                });
            };

            var bindScrollHandler = function () {
                $this.bind('scroll' + eventClassName, function (e) {
                    updateBarSizeAndPosition();
                });
            };

            var destroy = function () {
                $this.unbind(eventClassName);
                $(window).unbind(eventClassName);
                $(document).unbind(eventClassName);
                $this.data('perfect-scrollbar', null);
                $this.data('perfect-scrollbar-update', null);
                $this.data('perfect-scrollbar-destroy', null);
                $scrollbarX.remove();
                $scrollbarY.remove();
                $scrollbarXRail.remove();
                $scrollbarYRail.remove();

                // clean all variables
                $scrollbarXRail =
                $scrollbarYRail =
                $scrollbarX =
                $scrollbarY =
                scrollbarXActive =
                scrollbarYActive =
                containerWidth =
                containerHeight =
                contentWidth =
                contentHeight =
                scrollbarXWidth =
                scrollbarXLeft =
                scrollbarXBottom =
                isScrollbarXUsingBottom =
                scrollbarXTop =
                scrollbarYHeight =
                scrollbarYTop =
                scrollbarYRight =
                isScrollbarYUsingRight =
                scrollbarYLeft =
                isRtl =
                eventClassName = null;
            };

            var ieSupport = function (version) {
                $this.addClass('ie').addClass('ie' + version);

                var bindHoverHandlers = function () {
                    var mouseenter = function () {
                        $(this).addClass('hover');
                    };
                    var mouseleave = function () {
                        $(this).removeClass('hover');
                    };
                    $this.bind('mouseenter' + eventClassName, mouseenter).bind('mouseleave' + eventClassName, mouseleave);
                    $scrollbarXRail.bind('mouseenter' + eventClassName, mouseenter).bind('mouseleave' + eventClassName, mouseleave);
                    $scrollbarYRail.bind('mouseenter' + eventClassName, mouseenter).bind('mouseleave' + eventClassName, mouseleave);
                    $scrollbarX.bind('mouseenter' + eventClassName, mouseenter).bind('mouseleave' + eventClassName, mouseleave);
                    $scrollbarY.bind('mouseenter' + eventClassName, mouseenter).bind('mouseleave' + eventClassName, mouseleave);
                };

                var fixIe6ScrollbarPosition = function () {
                    updateScrollbarCss = function () {
                        var scrollbarXStyles = { left: scrollbarXLeft + $this.scrollLeft(), width: scrollbarXWidth };
                        if (isScrollbarXUsingBottom) {
                            scrollbarXStyles.bottom = scrollbarXBottom;
                        } else {
                            scrollbarXStyles.top = scrollbarXTop;
                        }
                        $scrollbarX.css(scrollbarXStyles);

                        var scrollbarYStyles = { top: scrollbarYTop + $this.scrollTop(), height: scrollbarYHeight };
                        if (isScrollbarYUsingRight) {
                            scrollbarYStyles.right = scrollbarYRight;
                        } else {
                            scrollbarYStyles.left = scrollbarYLeft;
                        }

                        $scrollbarY.css(scrollbarYStyles);
                        $scrollbarX.hide().show();
                        $scrollbarY.hide().show();
                    };
                };

                if (version === 6) {
                    bindHoverHandlers();
                    fixIe6ScrollbarPosition();
                }
            };

            var supportsTouch = (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch);

            var initialize = function () {
                var ieMatch = navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);
                if (ieMatch && ieMatch[1] === 'msie') {
                    // must be executed at first, because 'ieSupport' may addClass to the container
                    ieSupport(parseInt(ieMatch[2], 10));
                }

                updateBarSizeAndPosition();
                bindScrollHandler();
                bindMouseScrollXHandler();
                bindMouseScrollYHandler();
                bindRailClickHandler();
                if (supportsTouch) {
                    bindMobileTouchHandler();
                }
                if ($this.mousewheel) {
                    bindMouseWheelHandler();
                }
                if (settings.useKeyboard) {
                    bindKeyboardHandler();
                }
                $this.data('perfect-scrollbar', $this);
                $this.data('perfect-scrollbar-update', updateBarSizeAndPosition);
                $this.data('perfect-scrollbar-destroy', destroy);
            };

            // initialize
            initialize();

            return $this;
        });
    };
}));


; (function ($, window) {
    "use strict";

    var guid = 0,
		userAgent = (window.navigator.userAgent || window.navigator.vendor || window.opera),
		isFirefox = /Firefox/i.test(userAgent),
		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(userAgent),
		isFirefoxMobile = (isFirefox && isMobile),
		$body = null;

    /**
	 * @options
	 * @param callback [function] <$.noop> "Select item callback"
	 * @param cover [boolean] <false> "Cover handle with option set"
	 * @param customClass [string] <''> "Class applied to instance"
	 * @param label [string] <''> "Label displayed before selection"
	 * @param external [boolean] <false> "Open options as links in new window"
	 * @param links [boolean] <false> "Open options as links in same window"
	 * @param trim [int] <0> "Trim options to specified length; 0 to disable”
	 */
    var options = {
        callback: $.noop,
        cover: false,
        customClass: "",
        label: "",
        external: false,
        links: false,
        trim: 0
    };

    var pub = {

        /**
		 * @method
		 * @name defaults
		 * @description Sets default plugin options
		 * @param opts [object] <{}> "Options object"
		 * @example $.selecter("defaults", opts);
		 */
        defaults: function (opts) {
            options = $.extend(options, opts || {});
            return $(this);
        },

        /**
		 * @method
		 * @name disable
		 * @description Disables target instance or option
		 * @param option [string] <null> "Target option value"
		 * @example $(".target").selecter("disable", "1");
		 */
        disable: function (option) {
            return $(this).each(function (i, input) {
                var data = $(input).parent(".selecter").data("selecter");

                if (data) {
                    if (typeof option !== "undefined") {
                        var index = data.$items.index(data.$items.filter("[data-value=" + option + "]"));

                        data.$items.eq(index).addClass("disabled");
                        data.$options.eq(index).prop("disabled", true);
                    } else {
                        if (data.$selecter.hasClass("open")) {
                            data.$selecter.find(".selecter-selected").trigger("click.selecter");
                        }

                        data.$selecter.addClass("disabled");
                        data.$select.prop("disabled", true);
                    }
                }
            });
        },

        /**
		 * @method
		 * @name enable
		 * @description Enables target instance or option
		 * @param option [string] <null> "Target option value"
		 * @example $(".target").selecter("enable", "1");
		 */
        enable: function (option) {
            return $(this).each(function (i, input) {
                var data = $(input).parent(".selecter").data("selecter");

                if (data) {
                    if (typeof option !== "undefined") {
                        var index = data.$items.index(data.$items.filter("[data-value=" + option + "]"));
                        data.$items.eq(index).removeClass("disabled");
                        data.$options.eq(index).prop("disabled", false);
                    } else {
                        data.$selecter.removeClass("disabled");
                        data.$select.prop("disabled", false);
                    }
                }
            });
        },

        /**
		 * @method
		 * @name destroy
		 * @description Removes instance of plugin
		 * @example $(".target").selecter("destroy");
		 */
        destroy: function () {
            return $(this).each(function (i, input) {
                var data = $(input).parent(".selecter").data("selecter");

                if (data) {
                    if (data.$selecter.hasClass("open")) {
                        data.$selecter.find(".selecter-selected").trigger("click.selecter");
                    }

                    // Scroller support
                    if ($.fn.scroller !== undefined) {
                        data.$selecter.find(".selecter-options").scroller("destroy");
                    }

                    data.$select[0].tabIndex = data.tabIndex;

                    data.$select.off(".selecter")
								.removeClass("selecter-element")
								.show();

                    data.$selecter.off(".selecter")
								  .remove();
                }
            });
        },

        /**
		* @method
		* @name refresh
		* @description Updates instance base on target options
		* @example $(".target").selecter("refresh");
		*/
        refresh: function () {
            return $(this).each(function (i, input) {
                var data = $(input).parent(".selecter").data("selecter");

                if (data) {
                    var index = data.index;

                    data.$allOptions = data.$select.find("option, optgroup");
                    data.$options = data.$allOptions.filter("option");
                    data.index = -1;

                    index = data.$options.index(data.$options.filter(":selected"));

                    _buildOptions(data);

                    if (!data.multiple) {
                        _update(index, data);
                    }
                }
            });
        }
    };

    /**
	 * @method private
	 * @name _init
	 * @description Initializes plugin
	 * @param opts [object] "Initialization options"
	 */
    function _init(opts) {
        // Local options
        opts = $.extend({}, options, opts || {});

        // Check for Body
        if ($body === null) {
            $body = $("body");
        }

        // Apply to each element
        var $items = $(this);
        for (var i = 0, count = $items.length; i < count; i++) {
            _build($items.eq(i), opts);
        }
        return $items;
    }

    /**
	 * @method private
	 * @name _build
	 * @description Builds each instance
	 * @param $select [jQuery object] "Target jQuery object"
	 * @param opts [object] <{}> "Options object"
	 */
    function _build($select, opts) {
        if (!$select.hasClass("selecter-element")) {
            // EXTEND OPTIONS
            opts = $.extend({}, opts, $select.data("selecter-options"));

            if (opts.external) {
                opts.links = true;
            }

            // Build options array
            var $allOptions = $select.find("option, optgroup"),
				$options = $allOptions.filter("option"),
				$originalOption = $options.filter(":selected"),
				originalIndex = ($originalOption.length > 0) ? $options.index($originalOption) : 1,
				wrapperTag = "div";
            //wrapperTag = (opts.links) ? "nav" : "div"; // nav's usage still up for debate...

            // Swap tab index, no more interacting with the actual select!
            opts.tabIndex = $select[0].tabIndex;
            $select[0].tabIndex = -1;

            opts.multiple = $select.prop("multiple");
            opts.disabled = $select.is(":disabled");

            // Build HTML
            var inner = "",
				wrapper = "";

            // Build wrapper
            wrapper += '<' + wrapperTag + ' class="selecter ' + opts.customClass;
            // Special case classes
            if (isMobile) {
                wrapper += ' mobile';
            } else if (opts.cover) {
                wrapper += ' cover';
            }
            if (opts.multiple) {
                wrapper += ' multiple';
            } else {
                wrapper += ' closed';
            }
            if (opts.disabled) {
                wrapper += ' disabled';
            }
            wrapper += '" tabindex="' + opts.tabIndex + '">';
            wrapper += '</' + wrapperTag + '>';

            // Build inner
            if (!opts.multiple) {
                inner += '<span class="selecter-selected' + ((opts.label !== "") ? ' placeholder' : '') + '">';
                inner += $('<span></span>').text(_trim((($originalOption.text() !== "") ? $originalOption.text() : opts.label), opts.trim)).html();
                inner += '</span>';
            }
            inner += '<div class="selecter-options">';
            inner += '</div>';

            // Modify DOM
            $select.addClass("selecter-element")
				   .wrap(wrapper)
				   .after(inner);

            // Store plugin data
            var $selecter = $select.parent(".selecter"),
				data = $.extend({
				    $select: $select,
				    $allOptions: $allOptions,
				    $options: $options,
				    $selecter: $selecter,
				    $selected: $selecter.find(".selecter-selected"),
				    $itemsWrapper: $selecter.find(".selecter-options"),
				    index: -1,
				    guid: guid++
				}, opts);

            _buildOptions(data);

            if (!data.multiple) {
                _update(originalIndex, data);
            }

            // Scroller support
            if ($.fn.scroller !== undefined) {
                data.$itemsWrapper.scroller();
            }

            // Bind click events
            data.$selecter.on("touchstart.selecter", ".selecter-selected", data, _onTouchStart)
						  .on("click.selecter", ".selecter-selected", data, _onClick)
						  .on("click.selecter", ".selecter-item", data, _onSelect)
						  .on("close.selecter", data, _onClose)
						  .data("selecter", data);

            // Bind Blur/focus events
            //if ((!data.links && !isMobile) || isMobile) {
            data.$select.on("change.selecter", data, _onChange);

            if (!isMobile) {
                data.$selecter.on("focus.selecter", data, _onFocus)
                              .on("blur.selecter", data, _onBlur);

                // handle clicks to associated labels - not on mobile
                data.$select.on("focus.selecter", data, function (e) {
                    e.data.$selecter.trigger("focus");
                });
            }

            //} else {
            // Disable browser focus/blur for jump links
            //data.$select.hide();
            //}
        }
    }

    /**
	 * @method private
	 * @name _buildOptions
	 * @description Builds instance's option set
	 * @param data [object] "Instance data"
	 */
    function _buildOptions(data) {
        var html = '',
			itemTag = (data.links) ? "a" : "span",
			j = 0;

        for (var i = 0, count = data.$allOptions.length; i < count; i++) {
            var $op = data.$allOptions.eq(i);

            // Option group
            if ($op[0].tagName === "OPTGROUP") {
                html += '<span class="selecter-group';
                // Disabled groups
                if ($op.is(":disabled")) {
                    html += ' disabled';
                }
                html += '">' + $op.attr("label") + '</span>';
            } else {
                var opVal = $op.val();

                if (!$op.attr("value")) {
                    $op.attr("value", opVal);
                }

                html += '<' + itemTag + ' class="selecter-item';
                // Default selected value - now handles multi's thanks to @kuilkoff
                if ($op.is(':selected')) {
                    html += ' selected';
                }
                // Disabled options
                if ($op.is(":disabled")) {
                    html += ' disabled';
                }
                html += '" ';
                if (data.links) {
                    html += 'href="' + opVal + '"';
                } else {
                    html += 'data-value="' + opVal + '"';
                }
                html += '>' + $("<span></span>").text(_trim($op.text(), data.trim)).html() + '</' + itemTag + '>';
                j++;
            }
        }

        data.$itemsWrapper.html(html);
        data.$items = data.$selecter.find(".selecter-item");
    }

    /**
	 * @method private
	 * @name _onTouchStart
	 * @description Handles touchstart to selected item
	 * @param e [object] "Event data"
	 */
    function _onTouchStart(e) {
        e.stopPropagation();

        var data = e.data,
			oe = e.originalEvent;

        _clearTimer(data.timer);

        data.touchStartX = oe.touches[0].clientX;
        data.touchStartY = oe.touches[0].clientY;

        data.$selecter.on("touchmove.selecter", ".selecter-selected", data, _onTouchMove)
					  .on("touchend.selecter", ".selecter-selected", data, _onTouchEnd);
    }

    /**
	 * @method private
	 * @name _onTouchMove
	 * @description Handles touchmove to selected item
	 * @param e [object] "Event data"
	 */
    function _onTouchMove(e) {
        var data = e.data,
			oe = e.originalEvent;

        if (Math.abs(oe.touches[0].clientX - data.touchStartX) > 10 || Math.abs(oe.touches[0].clientY - data.touchStartY) > 10) {
            data.$selecter.off("touchmove.selecter touchend.selecter");
        }
    }

    /**
	 * @method private
	 * @name _onTouchEnd
	 * @description Handles touchend to selected item
	 * @param e [object] "Event data"
	 */
    function _onTouchEnd(e) {
        var data = e.data;

        data.$selecter.off("touchmove.selecter touchend.selecter click.selecter");

        // prevent ghosty clicks
        data.timer = _startTimer(data.timer, 1000, function () {
            data.$selecter.on("click.selecter", ".selecter-selected", data, _onClick);
        });

        _onClick(e);
    }

    /**
	 * @method private
	 * @name _onClick
	 * @description Handles click to selected item
	 * @param e [object] "Event data"
	 */
    function _onClick(e) {
        e.preventDefault();
        e.stopPropagation();

        var data = e.data;

        if (!data.$select.is(":disabled")) {
            $(".selecter").not(data.$selecter).trigger("close.selecter", [data]);

            // Handle mobile, but not Firefox
            if (isMobile && !isFirefoxMobile) {
                var el = data.$select[0];
                if (window.document.createEvent) { // All
                    var evt = window.document.createEvent("MouseEvents");
                    evt.initMouseEvent("mousedown", false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    el.dispatchEvent(evt);
                } else if (el.fireEvent) { // IE
                    el.fireEvent("onmousedown");
                }
            } else {
                // Delegate intent
                if (data.$selecter.hasClass("closed")) {
                    _onOpen(e);
                } else if (data.$selecter.hasClass("open")) {
                    _onClose(e);
                }
            }
        }
    }

    /**
	 * @method private
	 * @name _onOpen
	 * @description Opens option set
	 * @param e [object] "Event data"
	 */
    function _onOpen(e) {
        e.preventDefault();
        e.stopPropagation();

        var data = e.data;

        // Make sure it's not alerady open
        if (!data.$selecter.hasClass("open")) {
            var offset = data.$selecter.offset(),
				bodyHeight = $body.outerHeight(),
				optionsHeight = data.$itemsWrapper.outerHeight(true),
				selectedOffset = (data.index >= 0) ? data.$items.eq(data.index).position() : { left: 0, top: 0 };

            // Calculate bottom of document
            if (offset.top + optionsHeight > bodyHeight) {
                data.$selecter.addClass("bottom");
            }

            data.$itemsWrapper.show();

            // Bind Events
            data.$selecter.removeClass("closed")
						  .addClass("open");
            $body.on("click.selecter-" + data.guid, ":not(.selecter-options)", data, _onCloseHelper);

            _scrollOptions(data);
        }
    }

    /**
	 * @method private
	 * @name _onCloseHelper
	 * @description Determines if event target is outside instance before closing
	 * @param e [object] "Event data"
	 */
    function _onCloseHelper(e) {
        e.preventDefault();
        e.stopPropagation();

        if ($(e.currentTarget).parents(".selecter").length === 0) {
            _onClose(e);
        }
    }

    /**
	 * @method private
	 * @name _onClose
	 * @description Closes option set
	 * @param e [object] "Event data"
	 */
    function _onClose(e) {
        e.preventDefault();
        e.stopPropagation();

        var data = e.data;

        // Make sure it's actually open
        if (data.$selecter.hasClass("open")) {
            data.$itemsWrapper.hide();
            data.$selecter.removeClass("open bottom")
						  .addClass("closed");

            $body.off(".selecter-" + data.guid);
        }
    }

    /**
	 * @method private
	 * @name _onSelect
	 * @description Handles option select
	 * @param e [object] "Event data"
	 */
    function _onSelect(e) {
        e.preventDefault();
        e.stopPropagation();

        var $target = $(this),
			data = e.data;

        if (!data.$select.is(":disabled")) {
            if (data.$itemsWrapper.is(":visible")) {
                // Update
                var index = data.$items.index($target);

                if (index !== data.index) {
                    _update(index, data);
                    _handleChange(data);
                }
            }

            if (!data.multiple) {
                // Clean up
                _onClose(e);
            }
        }
    }

    /**
	 * @method private
	 * @name _onChange
	 * @description Handles external changes
	 * @param e [object] "Event data"
	 */
    function _onChange(e, internal) {
        var $target = $(this),
			data = e.data;

        if (!internal && !data.multiple) {
            var index = data.$options.index(data.$options.filter("[value='" + _escape($target.val()) + "']"));

            _update(index, data);
            _handleChange(data);
        }
    }

    /**
	 * @method private
	 * @name _onFocus
	 * @description Handles instance focus
	 * @param e [object] "Event data"
	 */
    function _onFocus(e) {
        e.preventDefault();
        e.stopPropagation();

        var data = e.data;

        if (!data.$select.is(":disabled") && !data.multiple) {
            data.$selecter.addClass("focus")
						  .on("keydown.selecter-" + data.guid, data, _onKeypress);

            $(".selecter").not(data.$selecter)
						  .trigger("close.selecter", [data]);
        }
    }

    /**
	 * @method private
	 * @name _onBlur
	 * @description Handles instance focus
	 * @param e [object] "Event data"
	 */
    function _onBlur(e, internal, two) {
        e.preventDefault();
        e.stopPropagation();

        var data = e.data;

        data.$selecter.removeClass("focus")
					  .off("keydown.selecter-" + data.guid);

        $(".selecter").not(data.$selecter)
					  .trigger("close.selecter", [data]);
    }

    /**
	 * @method private
	 * @name _onKeypress
	 * @description Handles instance keypress, once focused
	 * @param e [object] "Event data"
	 */
    function _onKeypress(e) {
        var data = e.data;

        if (e.keyCode === 13) {
            if (data.$selecter.hasClass("open")) {
                _onClose(e);
                _update(data.index, data);
            }
            _handleChange(data);
        } else if (e.keyCode !== 9 && (!e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey)) {
            // Ignore modifiers & tabs
            e.preventDefault();
            e.stopPropagation();

            var total = data.$items.length - 1,
				index = (data.index < 0) ? 0 : data.index;

            // Firefox left/right support thanks to Kylemade
            if ($.inArray(e.keyCode, (isFirefox) ? [38, 40, 37, 39] : [38, 40]) > -1) {
                // Increment / decrement using the arrow keys
                index = index + ((e.keyCode === 38 || (isFirefox && e.keyCode === 37)) ? -1 : 1);

                if (index < 0) {
                    index = 0;
                }
                if (index > total) {
                    index = total;
                }
            } else {
                var input = String.fromCharCode(e.keyCode).toUpperCase(),
					letter,
					i;

                // Search for input from original index
                for (i = data.index + 1; i <= total; i++) {
                    letter = data.$options.eq(i).text().charAt(0).toUpperCase();
                    if (letter === input) {
                        index = i;
                        break;
                    }
                }

                // If not, start from the beginning
                if (index < 0 || index === data.index) {
                    for (i = 0; i <= total; i++) {
                        letter = data.$options.eq(i).text().charAt(0).toUpperCase();
                        if (letter === input) {
                            index = i;
                            break;
                        }
                    }
                }
            }

            // Update
            if (index >= 0) {
                _update(index, data);
                _scrollOptions(data);
            }
        }
    }

    /**
	 * @method private
	 * @name _update
	 * @description Updates instance based on new target index
	 * @param index [int] "Selected option index"
	 * @param data [object] "instance data"
	 */
    function _update(index, data) {
        var $item = data.$items.eq(index),
			isSelected = $item.hasClass("selected"),
			isDisabled = $item.hasClass("disabled");

        // Check for disabled options
        if (!isDisabled) {
            if (index === -1 && data.label !== "") {
                data.$selected.html(data.label);
            } else if (!isSelected) {
                var newLabel = $item.html(),
					newValue = $item.data("value");

                // Modify DOM
                if (data.multiple) {
                    data.$options.eq(index).prop("selected", true);
                } else {
                    data.$selected.html(newLabel)
								  .removeClass('placeholder');
                    data.$items.filter(".selected")
							   .removeClass("selected");

                    data.$select[0].selectedIndex = index;
                }

                $item.addClass("selected");
            } else if (data.multiple) {
                data.$options.eq(index).prop("selected", null);
                $item.removeClass("selected");
            }

            if (!data.multiple) {
                // Update index
                data.index = index;
                // Modify By Hubert
                data.$selected.html($item.html());
            }
        }
    }

    /**
	 * @method private
	 * @name _scrollOptions
	 * @description Scrolls options wrapper to specific option
	 * @param data [object] "Instance data"
	 */
    function _scrollOptions(data) {
        var selectedOffset = (data.index >= 0) ? data.$items.eq(data.index).position() : { left: 0, top: 0 };

        if ($.fn.scroller !== undefined) {
            data.$itemsWrapper.scroller("scroll", (data.$itemsWrapper.find(".scroller-content").scrollTop() + selectedOffset.top), 0)
							  .scroller("reset");
        } else {
            data.$itemsWrapper.scrollTop(data.$itemsWrapper.scrollTop() + selectedOffset.top);
        }
    }

    /**
	 * @method private
	 * @name _handleChange
	 * @description Handles change events
	 * @param data [object] "Instance data"
	 */
    function _handleChange(data) {
        if (data.links) {
            _launch(data);
        } else {
            data.callback.call(data.$selecter, data.$select.val(), data.index);
            data.$select.trigger("change", [true]);
        }
    }

    /**
	 * @method private
	 * @name _launch
	 * @description Launches link
	 * @param data [object] "Instance data"
	 */
    function _launch(data) {
        //var url = (isMobile) ? data.$select.val() : data.$options.filter(":selected").attr("href");
        var url = data.$select.val();

        if (data.external) {
            // Open link in a new tab/window
            window.open(url);
        } else {
            // Open link in same tab/window
            window.location.href = url;
        }
    }

    /**
	 * @method private
	 * @name _trim
	 * @description Trims text, if specified length is greater then 0
	 * @param length [int] "Length to trim at"
	 * @param text [string] "Text to trim"
	 * @return [string] "Trimmed string"
	 */
    function _trim(text, length) {
        if (length === 0) {
            return text;
        } else {
            if (text.length > length) {
                return text.substring(0, length) + "...";
            } else {
                return text;
            }
        }
    }

    /**
	 * @method private
	 * @name _escape
	 * @description Escapes text
	 * @param text [string] "Text to escape"
	 */
    function _escape(text) {
        return (typeof text === "string") ? text.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1') : text;
    }

    /**
	 * @method private
	 * @name _startTimer
	 * @description Starts an internal timer
	 * @param timer [int] "Timer ID"
	 * @param time [int] "Time until execution"
	 * @param callback [int] "Function to execute"
	 * @param interval [boolean] "Flag for recurring interval"
	 */
    function _startTimer(timer, time, func, interval) {
        _clearTimer(timer, interval);
        if (interval === true) {
            return setInterval(func, time);
        } else {
            return setTimeout(func, time);
        }
    }

    /**
	 * @method private
	 * @name _clearTimer
	 * @description Clears an internal timer
	 * @param timer [int] "Timer ID"
	 */
    function _clearTimer(timer) {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
    }

    $.fn.selecter = function (method) {
        if (pub[method]) {
            return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return _init.apply(this, arguments);
        }
        return this;
    };

    $.selecter = function (method) {
        if (method === "defaults") {
            pub.defaults.apply(this, Array.prototype.slice.call(arguments, 1));
        }
    };
})(jQuery, window);


var height = 0,
    headerHeight = 58,
    modNavBarHeight= 60,
    wrap = undefined,
    mainContent = undefined,
    mainMenu = undefined;

var Candy = {
    init: function () {
        wrap = $("#wrap-all");
        mainContent = $(".main-content");
        mainMenu = $(".main-menu");
        Candy.windowResize();
        Candy.menu();
        Candy.notifications();
        Candy.selecter();
        $(window).resizeEnd(function () {
            Candy.windowResize();
        });
    },
    windowResize: function ()
    {
        height = $(window).height();
        mainContent.css("height", height - headerHeight - modNavBarHeight).perfectScrollbar();
        mainMenu.css("height", height - headerHeight).perfectScrollbar();
    },
    menu: function () {
        $(".main-menu > ul > li > a").on("click", function (e) {
            e.preventDefault();
            $(".main-menu > ul > li").removeClass("open");
            $(this).parent().addClass("open");
        });
    },
    notifications: function () {
        // 定时 5000ms 自动隐藏
        var hideNotifications = setInterval(function () {
            $(".notifications").fadeOut(600);
        }, 5000);

        $(".notifications .close").on("click", function () {
            $(this).parent().parent().fadeOut(600);
            return false;
        }).hover(function () {
            clearInterval(hideNotifications);
            return false;
        }, function () {
            hideNotifications = setInterval(function () {
                $(".notifications").fadeOut(600);
            }, 5000);
        });
    },
    selecter: function () {
        $(".selecter").selecter();
    }
};

$(document).ready(function () {
    
    Candy.init();

});