/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function (e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function (e, t) { return new x.fn.init(e, t, r) }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function (e, t) { return t.toUpperCase() }, q = function (e) { (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready()) }, _ = function () { a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q)) }; x.fn = x.prototype = { jquery: f, constructor: x, init: function (e, n, r) { var i, o; if (!e) return this; if ("string" == typeof e) { if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e); if (i[1]) { if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]); return this } if (o = a.getElementById(i[2]), o && o.parentNode) { if (o.id !== i[2]) return r.find(e); this.length = 1, this[0] = o } return this.context = a, this.selector = e, this } return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this)) }, selector: "", length: 0, toArray: function () { return g.call(this) }, get: function (e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] }, pushStack: function (e) { var t = x.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t }, each: function (e, t) { return x.each(this, e, t) }, ready: function (e) { return x.ready.promise().done(e), this }, slice: function () { return this.pushStack(g.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (0 > e ? t : 0); return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, map: function (e) { return this.pushStack(x.map(this, function (t, n) { return e.call(t, n, t) })) }, end: function () { return this.prevObject || this.constructor(null) }, push: h, sort: [].sort, splice: [].splice }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () { var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1; for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l) ; u > l; l++) if (null != (o = arguments[l])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r)); return s }, x.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function (t) { return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x }, isReady: !1, readyWait: 1, holdReady: function (e) { e ? x.readyWait++ : x.ready(!0) }, ready: function (e) { if (e === !0 ? !--x.readyWait : !x.isReady) { if (!a.body) return setTimeout(x.ready); x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready")) } }, isFunction: function (e) { return "function" === x.type(e) }, isArray: Array.isArray || function (e) { return "array" === x.type(e) }, isWindow: function (e) { return null != e && e == e.window }, isNumeric: function (e) { return !isNaN(parseFloat(e)) && isFinite(e) }, type: function (e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e }, isPlainObject: function (e) { var n; if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1; try { if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (r) { return !1 } if (x.support.ownLast) for (n in e) return v.call(e, n); for (n in e); return n === t || v.call(e, n) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, error: function (e) { throw Error(e) }, parseHTML: function (e, t, n) { if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || a; var r = k.exec(e), i = !n && []; return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes)) }, parseJSON: function (n) { return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t) }, parseXML: function (n) { var r, i; if (!n || "string" != typeof n) return null; try { e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n)) } catch (o) { r = t } return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r }, noop: function () { }, globalEval: function (t) { t && x.trim(t) && (e.execScript || function (t) { e.eval.call(e, t) })(t) }, camelCase: function (e) { return e.replace(D, "ms-").replace(L, H) }, nodeName: function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function (e, t, n) { var r, i = 0, o = e.length, a = M(e); if (n) { if (a) { for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break } else for (i in e) if (r = t.apply(e[i], n), r === !1) break } else if (a) { for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break; return e }, trim: b && !b.call("\ufeff\u00a0") ? function (e) { return null == e ? "" : b.call(e) } : function (e) { return null == e ? "" : (e + "").replace(C, "") }, makeArray: function (e, t) { var n = t || []; return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n }, inArray: function (e, t, n) { var r; if (t) { if (m) return m.call(t, e, n); for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n } return -1 }, merge: function (e, n) { var r = n.length, i = e.length, o = 0; if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o]; else while (n[o] !== t) e[i++] = n[o++]; return e.length = i, e }, grep: function (e, t, n) { var r, i = [], o = 0, a = e.length; for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]); return i }, map: function (e, t, n) { var r, i = 0, o = e.length, a = M(e), s = []; if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r); return d.apply([], s) }, guid: 1, proxy: function (e, n) { var r, i, o; return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () { return e.apply(n || this, r.concat(g.call(arguments))) }, i.guid = e.guid = e.guid || x.guid++, i) : t }, access: function (e, n, r, i, o, a, s) { var l = 0, u = e.length, c = null == r; if ("object" === x.type(r)) { o = !0; for (l in r) x.access(e, n, l, r[l], !0, a, s) } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) { return c.call(x(e), n) })), n)) for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r))); return o ? e : c ? n.call(e) : u ? n(e[0], r) : a }, now: function () { return (new Date).getTime() }, swap: function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; i = n.apply(e, r || []); for (o in t) e.style[o] = a[o]; return i } }), x.ready.promise = function (t) { if (!n) if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready); else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1); else { a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q); var r = !1; try { r = null == e.frameElement && a.documentElement } catch (i) { } r && r.doScroll && function o() { if (!x.isReady) { try { r.doScroll("left") } catch (e) { return setTimeout(o, 50) } _(), x.ready() } }() } return n.promise(t) }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) { c["[object " + t + "]"] = t.toLowerCase() }); function M(e) { var t = e.length, n = x.type(e); return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e) } r = x(a), function (e, t) { var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function (e, t) { return e === t ? (S = !0, 0) : 0 }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function (e) { var t = 0, n = this.length; for (; n > t; t++) if (this[t] === e) return t; return -1 }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = { ID: RegExp("^#(" + R + ")"), CLASS: RegExp("^\\.(" + R + ")"), TAG: RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: RegExp("^" + $), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: RegExp("^(?:" + B + ")$", "i"), needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function (e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r) }; try { M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType } catch (ot) { M = { apply: H.length ? function (e, t) { _.apply(e, O.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function at(e, t, n, i) { var o, a, s, l, u, c, d, m, y, x; if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n; if (1 !== (l = t.nodeType) && 9 !== l) return []; if (h && !i) { if (o = Z.exec(e)) if (s = o[1]) { if (9 === l) { if (a = t.getElementById(s), !a || !a.parentNode) return n; if (a.id === s) return n.push(a), n } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n } else { if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n; if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n } if (r.qsa && (!g || !g.test(e))) { if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) { c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length; while (u--) c[u] = m + yt(c[u]); y = V.test(e) && t.parentNode || t, x = c.join(",") } if (x) try { return M.apply(n, y.querySelectorAll(x)), n } catch (T) { } finally { d || t.removeAttribute("id") } } } return kt(e.replace(z, "$1"), t, n, i) } function st() { var e = []; function t(n, r) { return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r } return t } function lt(e) { return e[b] = !0, e } function ut(e) { var t = f.createElement("div"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function ct(e, t) { var n = e.split("|"), r = e.length; while (r--) o.attrHandle[n[r]] = t } function pt(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D); if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function ft(e) { return function (t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } } function dt(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } } function ht(e) { return lt(function (t) { return t = +t, lt(function (n, r) { var i, o = e([], n.length, t), a = o.length; while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) } s = at.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, r = at.support = {}, p = at.setDocument = function (e) { var n = e ? e.ownerDocument || e : w, i = n.defaultView; return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () { p() }), r.attributes = ut(function (e) { return e.className = "i", !e.getAttribute("className") }), r.getElementsByTagName = ut(function (e) { return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length }), r.getElementsByClassName = ut(function (e) { return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length }), r.getById = ut(function (e) { return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length }), r.getById ? (o.find.ID = function (e, t) { if (typeof t.getElementById !== j && h) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, o.filter.ID = function (e) { var t = e.replace(rt, it); return function (e) { return e.getAttribute("id") === t } }) : (delete o.find.ID, o.filter.ID = function (e) { var t = e.replace(rt, it); return function (e) { var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id"); return n && n.value === t } }), o.find.TAG = r.getElementsByTagName ? function (e, n) { return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, o.find.CLASS = r.getElementsByClassName && function (e, n) { return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked") }), ut(function (e) { var t = n.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:") })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) { r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I) }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, A = d.compareDocumentPosition ? function (e, t) { if (e === t) return S = !0, 0; var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t); return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function (e, t) { var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t]; if (e === t) return S = !0, 0; if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0; if (o === a) return pt(e, t); r = e; while (r = r.parentNode) s.unshift(r); r = t; while (r = r.parentNode) l.unshift(r); while (s[i] === l[i]) i++; return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0 }, n) : f }, at.matches = function (e, t) { return at(e, null, null, t) }, at.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try { var n = y.call(e, t); if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (i) { } return at(t, f, null, [e]).length > 0 }, at.contains = function (e, t) { return (e.ownerDocument || e) !== f && p(e), v(e, t) }, at.attr = function (e, n) { (e.ownerDocument || e) !== f && p(e); var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t; return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a }, at.error = function (e) { throw Error("Syntax error, unrecognized expression: " + e) }, at.uniqueSort = function (e) { var t, n = [], i = 0, o = 0; if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) { while (t = e[o++]) t === e[o] && (i = n.push(o)); while (i--) e.splice(n[i], 1) } return e }, a = at.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += a(e) } else if (3 === i || 4 === i) return e.nodeValue } else for (; t = e[r]; r++) n += a(t); return n }, o = at.selectors = { cacheLength: 50, createPseudo: lt, match: Q, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e }, PSEUDO: function (e) { var n, r = !e[5] && e[2]; return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(rt, it).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = N[e + " "]; return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) { return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "") }) }, ATTR: function (e, t, n) { return function (r) { var i = at.attr(r, e); return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0 } }, CHILD: function (e, t, n, r, i) { var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t; return 1 === r && 0 === i ? function (e) { return !!e.parentNode } : function (t, n, l) { var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s; if (m) { if (o) { while (g) { p = t; while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1; h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? m.firstChild : m.lastChild], a && v) { c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d]; while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) { c[e] = [T, d, f]; break } } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0 } } }, PSEUDO: function (e, t) { var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e); return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) { var i, o = r(e, t), a = o.length; while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a]) }) : function (e) { return r(e, 0, n) }) : r } }, pseudos: { not: lt(function (e) { var t = [], n = [], r = l(e.replace(z, "$1")); return r[b] ? lt(function (e, t, n, i) { var o, a = r(e, null, i, []), s = e.length; while (s--) (o = a[s]) && (e[s] = !(t[s] = o)) }) : function (e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() } }), has: lt(function (e) { return function (t) { return at(e, t).length > 0 } }), contains: lt(function (e) { return function (t) { return (t.textContent || t.innerText || a(t)).indexOf(e) > -1 } }), lang: lt(function (e) { return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) { var n; do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function (e) { return e === d }, focus: function (e) { return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function (e) { return e.disabled === !1 }, disabled: function (e) { return e.disabled === !0 }, checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1; return !0 }, parent: function (e) { return !o.pseudos.empty(e) }, header: function (e) { return tt.test(e.nodeName) }, input: function (e) { return et.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) }, first: ht(function () { return [0] }), last: ht(function (e, t) { return [t - 1] }), eq: ht(function (e, t, n) { return [0 > n ? n + t : n] }), even: ht(function (e, t) { var n = 0; for (; t > n; n += 2) e.push(n); return e }), odd: ht(function (e, t) { var n = 1; for (; t > n; n += 2) e.push(n); return e }), lt: ht(function (e, t, n) { var r = 0 > n ? n + t : n; for (; --r >= 0;) e.push(r); return e }), gt: ht(function (e, t, n) { var r = 0 > n ? n + t : n; for (; t > ++r;) e.push(r); return e }) } }, o.pseudos.nth = o.pseudos.eq; for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) o.pseudos[n] = ft(n); for (n in { submit: !0, reset: !0 }) o.pseudos[n] = dt(n); function gt() { } gt.prototype = o.filters = o.pseudos, o.setFilters = new gt; function mt(e, t) { var n, r, i, a, s, l, u, c = k[e + " "]; if (c) return t ? 0 : c.slice(0); s = e, l = [], u = o.preFilter; while (s) { (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(z, " ") }), s = s.slice(n.length)); for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({ value: n, type: a, matches: r }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? at.error(e) : k(e, l).slice(0) } function yt(e) { var t = 0, n = e.length, r = ""; for (; n > t; t++) r += e[t].value; return r } function vt(e, t, n) { var r = t.dir, o = n && "parentNode" === r, a = C++; return t.first ? function (t, n, i) { while (t = t[r]) if (1 === t.nodeType || o) return e(t, n, i) } : function (t, n, s) { var l, u, c, p = T + " " + a; if (s) { while (t = t[r]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0 } else while (t = t[r]) if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) { if ((l = u[1]) === !0 || l === i) return l === !0 } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0 } } function bt(e) { return e.length > 1 ? function (t, n, r) { var i = e.length; while (i--) if (!e[i](t, n, r)) return !1; return !0 } : e[0] } function xt(e, t, n, r, i) { var o, a = [], s = 0, l = e.length, u = null != t; for (; l > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s)); return a } function wt(e, t, n, r, i, o) { return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) { var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m; if (n && n(m, y, s, l), r) { u = xt(y, d), r(u, [], s, l), c = u.length; while (c--) (p = u[c]) && (y[d[c]] = !(m[d[c]] = p)) } if (o) { if (i || e) { if (i) { u = [], c = y.length; while (c--) (p = y[c]) && u.push(m[c] = p); i(null, y = [], u, l) } c = y.length; while (c--) (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p)) } } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y) }) } function Tt(e) { var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function (e) { return e === t }, s, !0), p = vt(function (e) { return F.call(t, e) > -1 }, s, !0), f = [function (e, n, r) { return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r)) }]; for (; i > l; l++) if (n = o.relative[e[l].type]) f = [vt(bt(f), n)]; else { if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) { for (r = ++l; i > r; r++) if (o.relative[e[r].type]) break; return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e)) } f.push(n) } return bt(f) } function Ct(e, t) { var n = 0, r = t.length > 0, a = e.length > 0, s = function (s, l, c, p, d) { var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1; for (w && (u = l !== f && l, i = n) ; null != (h = N[b]) ; b++) { if (a && h) { g = 0; while (m = e[g++]) if (m(h, l, c)) { p.push(h); break } w && (T = k, i = ++n) } r && ((h = !m && h) && v--, s && x.push(h)) } if (v += b, r && b !== v) { g = 0; while (m = t[g++]) m(x, y, l, c); if (s) { if (v > 0) while (b--) x[b] || y[b] || (y[b] = q.call(p)); y = xt(y) } M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p) } return w && (T = k, u = C), x }; return r ? lt(s) : s } l = at.compile = function (e, t) { var n, r = [], i = [], o = E[e + " "]; if (!o) { t || (t = mt(e)), n = t.length; while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o); o = E(e, Ct(i, r)) } return o }; function Nt(e, t, n) { var r = 0, i = t.length; for (; i > r; r++) at(e, t[r], n); return n } function kt(e, t, n, i) { var a, s, u, c, p, f = mt(e); if (!i && 1 === f.length) { if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) { if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n; e = e.slice(s.shift().value.length) } a = Q.needsContext.test(e) ? 0 : s.length; while (a--) { if (u = s[a], o.relative[c = u.type]) break; if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) { if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n; break } } } return l(e, f)(i, t, !h, n, V.test(e)), n } r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) { return 1 & e.compareDocumentPosition(f.createElement("div")) }), ut(function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || ct("type|href|height|width", function (e, n, r) { return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2) }), r.attributes && ut(function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || ct("value", function (e, n, r) { return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue }), ut(function (e) { return null == e.getAttribute("disabled") }) || ct(B, function (e, n, r) { var i; return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains }(e); var O = {}; function F(e) { var t = O[e] = {}; return x.each(e.match(T) || [], function (e, n) { t[n] = !0 }), t } x.Callbacks = function (e) { e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e); var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) { for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) { r = !1; break } n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable()) }, p = { add: function () { if (l) { var t = l.length; (function i(t) { x.each(t, function (t, n) { var r = x.type(n); "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n) }) })(arguments), n ? o = l.length : r && (s = t, c(r)) } return this }, remove: function () { return l && x.each(arguments, function (e, t) { var r; while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--) }), this }, has: function (e) { return e ? x.inArray(e, l) > -1 : !(!l || !l.length) }, empty: function () { return l = [], o = 0, this }, disable: function () { return l = u = r = t, this }, disabled: function () { return !l }, lock: function () { return u = t, r || p.disable(), this }, locked: function () { return !u }, fireWith: function (e, t) { return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this }, fire: function () { return p.fireWith(this, arguments), this }, fired: function () { return !!i } }; return p }, x.extend({ Deferred: function (e) { var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]], n = "pending", r = { state: function () { return n }, always: function () { return i.done(arguments).fail(arguments), this }, then: function () { var e = arguments; return x.Deferred(function (n) { x.each(t, function (t, o) { var a = o[0], s = x.isFunction(e[t]) && e[t]; i[o[1]](function () { var e = s && s.apply(this, arguments); e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments) }) }), e = null }).promise() }, promise: function (e) { return null != e ? x.extend(e, r) : r } }, i = {}; return r.pipe = r.then, x.each(t, function (e, o) { var a = o[2], s = o[3]; r[o[1]] = a.add, s && a.add(function () { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith }), r.promise(i), e && e.call(i, i), i }, when: function (e) { var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function (e, t, n) { return function (r) { t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n) } }, s, l, u; if (r > 1) for (s = Array(r), l = Array(r), u = Array(r) ; r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i; return i || o.resolveWith(u, n), o.promise() } }), x.support = function (t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div"); if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t; s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled; try { delete d.test } catch (h) { t.deleteExpando = !1 } o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () { t.noCloneEvent = !1 }), d.cloneNode(!0).click()); for (f in { submit: !0, change: !0, focusin: !0 }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1; d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip; for (f in x(t)) break; return t.ownLast = "0" !== f, x(function () { var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0]; l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? { zoom: 1 } : {}, function () { t.boxSizing = 4 === d.offsetWidth }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null) }), n = s = l = u = r = o = null, t
    }({}); var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g; function R(e, n, r, i) { if (x.acceptData(e)) { var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s; if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : { toJSON: x.noop }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o } } function W(e, t, n) { if (x.acceptData(e)) { var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando; if (a[s]) { if (t && (r = n ? a[s] : a[s].data)) { x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length; while (i--) delete r[t[i]]; if (n ? !I(r) : !x.isEmptyObject(r)) return } (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null) } } } x.extend({ cache: {}, noData: { applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (e) { return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e) }, data: function (e, t, n) { return R(e, t, n) }, removeData: function (e, t) { return W(e, t) }, _data: function (e, t, n) { return R(e, t, n, !0) }, _removeData: function (e, t) { return W(e, t, !0) }, acceptData: function (e) { if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1; var t = e.nodeName && x.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t } }), x.fn.extend({ data: function (e, n) { var r, i, o = null, a = 0, s = this[0]; if (e === t) { if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) { for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i])); x._data(s, "parsedAttrs", !0) } return o } return "object" == typeof e ? this.each(function () { x.data(this, e) }) : arguments.length > 1 ? this.each(function () { x.data(this, e, n) }) : s ? $(s, e, x.data(s, e)) : null }, removeData: function (e) { return this.each(function () { x.removeData(this, e) }) } }); function $(e, n, r) { if (r === t && 1 === e.nodeType) { var i = "data-" + n.replace(P, "-$1").toLowerCase(); if (r = e.getAttribute(i), "string" == typeof r) { try { r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r } catch (o) { } x.data(e, n, r) } else r = t } return r } function I(e) { var t; for (t in e) if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1; return !0 } x.extend({ queue: function (e, n, r) { var i; return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t }, dequeue: function (e, t) { t = t || "fx"; var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function () { x.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return x._data(e, n) || x._data(e, n, { empty: x.Callbacks("once memory").add(function () { x._removeData(e, t + "queue"), x._removeData(e, n) }) }) } }), x.fn.extend({ queue: function (e, n) { var r = 2; return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () { var t = x.queue(this, e, n); x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e) }) }, dequeue: function (e) { return this.each(function () { x.dequeue(this, e) }) }, delay: function (e, t) { return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) { var r = setTimeout(t, e); n.stop = function () { clearTimeout(r) } }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, n) { var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function () { --i || o.resolveWith(a, [a]) }; "string" != typeof e && (n = e, e = t), e = e || "fx"; while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l)); return l(), o.promise(n) } }); var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input; x.fn.extend({ attr: function (e, t) { return x.access(this, x.attr, e, t, arguments.length > 1) }, removeAttr: function (e) { return this.each(function () { x.removeAttr(this, e) }) }, prop: function (e, t) { return x.access(this, x.prop, e, t, arguments.length > 1) }, removeProp: function (e) { return e = x.propFix[e] || e, this.each(function () { try { this[e] = t, delete this[e] } catch (n) { } }) }, addClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e; if (x.isFunction(e)) return this.each(function (t) { x(this).addClass(e.call(this, t, this.className)) }); if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) { o = 0; while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " "); n.className = x.trim(r) } return this }, removeClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e; if (x.isFunction(e)) return this.each(function (t) { x(this).removeClass(e.call(this, t, this.className)) }); if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) { o = 0; while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " "); n.className = e ? x.trim(r) : "" } return this }, toggleClass: function (e, t) { var n = typeof e; return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) { x(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function () { if ("string" === n) { var t, r = 0, o = x(this), a = e.match(T) || []; while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t) } else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "") }) }, hasClass: function (e) { var t = " " + e + " ", n = 0, r = this.length; for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0; return !1 }, val: function (e) { var n, r, i, o = this[0]; { if (arguments.length) return i = x.isFunction(e), this.each(function (n) { var o; 1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) { return null == e ? "" : e + "" })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o)) }); if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n) } } }), x.extend({ valHooks: { option: { get: function (e) { var t = x.find.attr(e, "value"); return null != t ? t : e.text } }, select: { get: function (e) { var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; for (; s > l; l++) if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) { if (t = x(n).val(), o) return t; a.push(t) } return a }, set: function (e, t) { var n, r, i = e.options, o = x.makeArray(t), a = i.length; while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0); return n || (e.selectedIndex = -1), o } } }, attr: function (e, n, r) { var o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t)) }, removeAttr: function (e, t) { var n, r, i = 0, o = t && t.match(T); if (o && 1 === e.nodeType) while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r) }, attrHooks: { type: { set: function (e, t) { if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, propFix: { "for": "htmlFor", "class": "className" }, prop: function (e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] }, propHooks: { tabIndex: { get: function (e) { var t = x.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1 } } } }), X = { set: function (e, t, n) { return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n } }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) { var r = x.expr.attrHandle[n] || x.find.attr; x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) { var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null; return x.expr.attrHandle[n] = o, a } : function (e, n, r) { return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null } }), K && Q || (x.attrHooks.value = { set: function (e, n, r) { return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r) } }), Q || (z = { set: function (e, n, r) { var i = e.getAttributeNode(r); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t } }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) { var i; return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null }, x.valHooks.button = { get: function (e, n) { var r = e.getAttributeNode(n); return r && r.specified ? r.value : t }, set: z.set }, x.attrHooks.contenteditable = { set: function (e, t, n) { z.set(e, "" === t ? !1 : t, n) } }, x.each(["width", "height"], function (e, n) { x.attrHooks[n] = { set: function (e, r) { return "" === r ? (e.setAttribute(n, "auto"), r) : t } } })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) { x.propHooks[t] = { get: function (e) { return e.getAttribute(t, 4) } } }), x.support.style || (x.attrHooks.style = { get: function (e) { return e.style.cssText || t }, set: function (e, t) { return e.style.cssText = t + "" } }), x.support.optSelected || (x.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { x.propFix[this.toLowerCase()] = this }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () { x.valHooks[this] = { set: function (e, n) { return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t } }, x.support.checkOn || (x.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }); var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/; function it() { return !0 } function ot() { return !1 } function at() { try { return a.activeElement } catch (e) { } } x.event = { global: {}, add: function (e, n, r, o, a) { var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e); if (v) { r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) { return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments) }, f.elem = e), n = (n || "").match(T) || [""], u = n.length; while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join(".") }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0); e = null } }, remove: function (e, t, n, r, i) { var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e); if (m && (c = m.events)) { t = (t || "").match(T) || [""], u = t.length; while (u--) if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) { p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a)); l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d]) } else for (d in c) x.event.remove(e, d + t[u], n, r, !0); x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events")) } }, trigger: function (n, r, i, o) { var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : []; if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) { if (!o && !p.noBubble && !x.isWindow(i)) { for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode) ; u; u = u.parentNode) h.push(u), f = u; f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e) } d = 0; while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault(); if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) { f = i[l], f && (i[l] = null), x.event.triggered = g; try { i[g]() } catch (y) { } x.event.triggered = t, f && (i[l] = f) } return n.result } }, dispatch: function (e) { e = x.event.fix(e); var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {}; if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) { s = x.event.handlers.call(this, e, u), n = 0; while ((o = s[n++]) && !e.isPropagationStopped()) { e.currentTarget = o.elem, a = 0; while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, e), e.result } }, handlers: function (e, n) { var r, i, o, a, s = [], l = n.delegateCount, u = e.target; if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) { for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i); o.length && s.push({ elem: u, handlers: o }) } return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s }, fix: function (e) { if (e[x.expando]) return e; var t, n, r, i = e.type, o = e, s = this.fixHooks[i]; s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length; while (t--) n = r[t], e[n] = o[n]; return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) { var r, i, o, s = n.button, l = n.fromElement; return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== at() && this.focus) try { return this.focus(), !1 } catch (e) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === at() && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, click: { trigger: function () { return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t }, _default: function (e) { return x.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function (e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } }, simulate: function (e, t, n, r) { var i = x.extend(new x.Event, n, { type: e, isSimulated: !0, originalEvent: {} }); r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault() } }, x.removeEvent = a.removeEventListener ? function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function (e, t, n) { var r = "on" + t; e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n)) }, x.Event = function (e, n) { return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n) }, x.Event.prototype = { isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = it, this.stopPropagation() } }, x.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) { x.event.special[e] = { delegateType: t, bindType: t, handle: function (e) { var n, r = this, i = e.relatedTarget, o = e.handleObj; return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), x.support.submitBubbles || (x.event.special.submit = { setup: function () { return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) { var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t; r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) { e._submit_bubble = !0 }), x._data(r, "submitBubbles", !0)) }), t) }, postDispatch: function (e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function () { return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t) } }), x.support.changeBubbles || (x.event.special.change = { setup: function () { return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), x.event.add(this, "click._change", function (e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0) })), !1) : (x.event.add(this, "beforeactivate._change", function (e) { var t = e.target; Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) { !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0) }), x._data(t, "changeBubbles", !0)) }), t) }, handle: function (e) { var n = e.target; return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t }, teardown: function () { return x.event.remove(this, "._change"), !Z.test(this.nodeName) } }), x.support.focusinBubbles || x.each({ focus: "focusin", blur: "focusout" }, function (e, t) { var n = 0, r = function (e) { x.event.simulate(t, e.target, x.event.fix(e), !0) }; x.event.special[t] = { setup: function () { 0 === n++ && a.addEventListener(e, r, !0) }, teardown: function () { 0 === --n && a.removeEventListener(e, r, !0) } } }), x.fn.extend({ on: function (e, n, r, i, o) { var a, s; if ("object" == typeof e) { "string" != typeof n && (r = r || n, n = t); for (a in e) this.on(a, n, r, e[a], o); return this } if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot; else if (!i) return this; return 1 === o && (s = i, i = function (e) { return x().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () { x.event.add(this, e, i, r, n) }) }, one: function (e, t, n, r) { return this.on(e, t, n, r, 1) }, off: function (e, n, r) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, n, e[o]); return this } return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () { x.event.remove(this, e, r, n) }) }, trigger: function (e, t) { return this.each(function () { x.event.trigger(e, t, this) }) }, triggerHandler: function (e, n) { var r = this[0]; return r ? x.event.trigger(e, n, r, !0) : t } }); var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = { children: !0, contents: !0, next: !0, prev: !0 }; x.fn.extend({ find: function (e) { var t, n = [], r = this, i = r.length; if ("string" != typeof e) return this.pushStack(x(e).filter(function () { for (t = 0; i > t; t++) if (x.contains(r[t], this)) return !0 })); for (t = 0; i > t; t++) x.find(e, r[t], n); return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n }, has: function (e) { var t, n = x(e, this), r = n.length; return this.filter(function () { for (t = 0; r > t; t++) if (x.contains(this, n[t])) return !0 }) }, not: function (e) { return this.pushStack(ft(this, e || [], !0)) }, filter: function (e) { return this.pushStack(ft(this, e || [], !1)) }, is: function (e) { return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0; for (; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) { n = o.push(n); break } return this.pushStack(o.length > 1 ? x.unique(o) : o) }, index: function (e) { return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n); return this.pushStack(x.unique(r)) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }); function pt(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e } x.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return x.dir(e, "parentNode") }, parentsUntil: function (e, t, n) { return x.dir(e, "parentNode", n) }, next: function (e) { return pt(e, "nextSibling") }, prev: function (e) { return pt(e, "previousSibling") }, nextAll: function (e) { return x.dir(e, "nextSibling") }, prevAll: function (e) { return x.dir(e, "previousSibling") }, nextUntil: function (e, t, n) { return x.dir(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return x.dir(e, "previousSibling", n) }, siblings: function (e) { return x.sibling((e.parentNode || {}).firstChild, e) }, children: function (e) { return x.sibling(e.firstChild) }, contents: function (e) { return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes) } }, function (e, t) { x.fn[e] = function (n, r) { var i = x.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i) } }), x.extend({ filter: function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) { return 1 === e.nodeType })) }, dir: function (e, n, r) { var i = [], o = e[n]; while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n]; return i }, sibling: function (e, t) { var n = []; for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } }); function ft(e, t, n) { if (x.isFunction(t)) return x.grep(e, function (e, r) { return !!t.call(e, r, e) !== n }); if (t.nodeType) return x.grep(e, function (e) { return e === t !== n }); if ("string" == typeof t) { if (st.test(t)) return x.filter(t, e, n); t = x.filter(t, e) } return x.grep(e, function (e) { return x.inArray(e, t) >= 0 !== n }) } function dt(e) { var t = ht.split("|"), n = e.createDocumentFragment(); if (n.createElement) while (t.length) n.createElement(t.pop()); return n } var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, jt = dt(a), Dt = jt.appendChild(a.createElement("div")); At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({ text: function (e) { return x.access(this, function (e) { return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e)) }, null, e, arguments.length) }, append: function () { return this.domManip(arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Lt(this, e); t.appendChild(e) } }) }, prepend: function () { return this.domManip(arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Lt(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return this.domManip(arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return this.domManip(arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function (e, t) { var n, r = e ? x.filter(e, this) : this, i = 0; for (; null != (n = r[i]) ; i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n)); return this }, empty: function () { var e, t = 0; for (; null != (e = this[t]) ; t++) { 1 === e.nodeType && x.cleanData(Ft(e, !1)); while (e.firstChild) e.removeChild(e.firstChild); e.options && x.nodeName(e, "select") && (e.options.length = 0) } return this }, clone: function (e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () { return x.clone(this, e, t) }) }, html: function (e) { return x.access(this, function (e) { var n = this[0] || {}, r = 0, i = this.length; if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t; if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) { e = e.replace(vt, "<$1></$2>"); try { for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e); n = 0 } catch (o) { } } n && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var e = x.map(this, function (e) { return [e.nextSibling, e.parentNode] }), t = 0; return this.domManip(arguments, function (n) { var r = e[t++], i = e[t++]; i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r)) }, !0), t ? this : this.remove() }, detach: function (e) { return this.remove(e, !0) }, domManip: function (e, t, n) { e = d.apply([], e); var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h); if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function (r) { var i = p.eq(r); g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n) }); if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) { for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u); if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, ""))); l = r = null } return this } }); function Lt(e, t) { return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e } function Ht(e) { return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e } function qt(e) { var t = Et.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e } function _t(e, t) { var n, r = 0; for (; null != (n = e[r]) ; r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval")) } function Mt(e, t) { if (1 === t.nodeType && x.hasData(e)) { var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events; if (s) { delete a.handle, a.events = {}; for (n in s) for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r]) } a.data && (a.data = x.extend({}, a.data)) } } function Ot(e, t) { var n, r, i; if (1 === t.nodeType) { if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) { i = x._data(t); for (r in i.events) x.removeEvent(t, r, i.handle); t.removeAttribute(x.expando) } "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) } } x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) { x.fn[e] = function (e) { var n, r = 0, i = [], o = x(e), a = o.length - 1; for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get()); return this.pushStack(i) } }); function Ft(e, n) { var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t; if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]) ; a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n)); return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s } function Bt(e) { Ct.test(e.type) && (e.defaultChecked = e.checked) } x.extend({
        clone: function (e, t, n) { var r, i, o, a, s, l = x.contains(e.ownerDocument, e); if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]) ; ++a) r[a] && Ot(i, r[a]); if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]) ; a++) Mt(i, r[a]); else Mt(e, o); return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o }, buildFragment: function (e, t, n, r) { var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0; for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) { s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0]; while (i--) s = s.lastChild; if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) { o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u) } x.merge(d, s.childNodes), s.textContent = ""; while (s.firstChild) s.removeChild(s.firstChild); s = f.lastChild } else d.push(t.createTextNode(o)); s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0; while (o = d[h++]) if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) { i = 0; while (o = s[i++]) kt.test(o.type || "") && n.push(o) } return s = null, f }, cleanData: function (e, t) {
            var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special; for (; null != (n = e[s]) ; s++) if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                if (a.events) for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
            }
        }, _evalUrl: function (e) { return x.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }
    }), x.fn.extend({ wrapAll: function (e) { if (x.isFunction(e)) return this.each(function (t) { x(this).wrapAll(e.call(this, t)) }); if (this[0]) { var t = x(e, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild; return e }).append(this) } return this }, wrapInner: function (e) { return x.isFunction(e) ? this.each(function (t) { x(this).wrapInner(e.call(this, t)) }) : this.each(function () { var t = x(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function (e) { var t = x.isFunction(e); return this.each(function (n) { x(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function () { return this.parent().each(function () { x.nodeName(this, "body") || x(this).replaceWith(this.childNodes) }).end() } }); var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = { BODY: "block" }, Qt = { position: "absolute", visibility: "hidden", display: "block" }, Kt = { letterSpacing: 0, fontWeight: 400 }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"]; function tn(e, t) { if (t in e) return t; var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length; while (i--) if (t = en[i] + n, t in e) return t; return r } function nn(e, t) { return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e) } function rn(e, t) { var n, r, i, o = [], a = 0, s = e.length; for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display")))); for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")); return e } x.fn.extend({ css: function (e, n) { return x.access(this, function (e, n, r) { var i, o, a = {}, s = 0; if (x.isArray(n)) { for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o); return a } return r !== t ? x.style(e, n, r) : x.css(e, n) }, e, n, arguments.length > 1) }, show: function () { return rn(this, !0) }, hide: function () { return rn(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { nn(this) ? x(this).show() : x(this).hide() }) } }), x.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = Wt(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": x.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function (e, n, r, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var o, a, s, l = x.camelCase(n), u = e.style; if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n]; if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { u[n] = r } catch (c) { } } }, css: function (e, n, r, i) { var o, a, s, l = x.camelCase(n); return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a } }), e.getComputedStyle ? (Rt = function (t) { return e.getComputedStyle(t, null) }, Wt = function (e, n, r) { var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style; return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l }) : a.documentElement.currentStyle && (Rt = function (e) { return e.currentStyle }, Wt = function (e, n, r) { var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style; return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l }); function on(e, t, n) { var r = Vt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t } function an(e, t, n, r, i) { var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i))); return a } function sn(e, t, n) { var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o); if (0 >= i || null == i) { if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i; r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0 } return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px" } function ln(e) { var t = a, n = Gt[e]; return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n } function un(e, t) { var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display"); return n.remove(), r } x.each(["height", "width"], function (e, n) { x.cssHooks[n] = { get: function (e, r, i) { return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () { return sn(e, n, i) }) : sn(e, n, i) : t }, set: function (e, t, r) { var i = r && Rt(e); return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0) } } }), x.support.opacity || (x.cssHooks.opacity = { get: function (e, t) { return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function (e, t) { var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || ""; n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i) } }), x(function () { x.support.reliableMarginRight || (x.cssHooks.marginRight = { get: function (e, n) { return n ? x.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"]) : t } }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) { x.cssHooks[n] = { get: function (e, r) { return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t } } }) }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) { return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display")) }, x.expr.filters.visible = function (e) { return !x.expr.filters.hidden(e) }), x.each({ margin: "", padding: "", border: "Width" }, function (e, t) { x.cssHooks[e + t] = { expand: function (n) { var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, Ut.test(e) || (x.cssHooks[e + t].set = on) }); var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i; x.fn.extend({ serialize: function () { return x.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = x.prop(this, "elements"); return e ? x.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e)) }).map(function (e, t) { var n = x(this).val(); return null == n ? null : x.isArray(n) ? x.map(n, function (e) { return { name: t.name, value: e.replace(fn, "\r\n") } }) : { name: t.name, value: n.replace(fn, "\r\n") } }).get() } }), x.param = function (e, n) { var r, i = [], o = function (e, t) { t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) }; if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () { o(this.name, this.value) }); else for (r in e) gn(r, e[r], n, o); return i.join("&").replace(cn, "+") }; function gn(e, t, n, r) { var i; if (x.isArray(t)) x.each(t, function (t, i) { n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) }); else if (n || "object" !== x.type(t)) r(e, t); else for (i in t) gn(e + "[" + i + "]", t[i], n, r) } x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) { x.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), x.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) }, bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }); var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*"); try { yn = o.href } catch (Ln) { yn = a.createElement("a"), yn.href = "", yn = yn.href } mn = En.exec(yn.toLowerCase()) || []; function Hn(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(T) || []; if (x.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } } function qn(e, n, r, i) { var o = {}, a = e === jn; function s(l) { var u; return o[l] = !0, x.each(e[l] || [], function (e, l) { var c = l(n, r, i); return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1) }), u } return s(n.dataTypes[0]) || !o["*"] && s("*") } function _n(e, n) { var r, i, o = x.ajaxSettings.flatOptions || {}; for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]); return r && x.extend(!0, e, r), e } x.fn.load = function (e, n, r) { if ("string" != typeof e && Sn) return Sn.apply(this, arguments); var i, o, a, s = this, l = e.indexOf(" "); return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({ url: e, type: a, dataType: "html", data: n }).done(function (e) { o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e) }).complete(r && function (e, t) { s.each(r, o || [e.responseText, t, e]) }), this }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { x.fn[t] = function (e) { return this.on(t, e) } }), x.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yn, type: "GET", isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e) }, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function (e, n) { "object" == typeof e && (n = e, e = t), n = n || {}; var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = { readyState: 0, getResponseHeader: function (e) { var t; if (2 === b) { if (!c) { c = {}; while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2] } t = c[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function () { return 2 === b ? a : null }, setRequestHeader: function (e, t) { var n = e.toLowerCase(); return b || (e = v[n] = v[n] || e, y[e] = t), this }, overrideMimeType: function (e) { return b || (p.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (2 > b) for (t in e) m[t] = [m[t], e[t]]; else C.always(e[C.status]); return this }, abort: function (e) { var t = e || w; return u && u.abort(t), k(0, t), this } }; if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C; l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]); for (i in p.headers) C.setRequestHeader(i, p.headers[i]); if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort(); w = "abort"; for (i in { success: 1, error: 1, complete: 1 }) C[i](p[i]); if (u = qn(jn, p, n, C)) { C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () { C.abort("timeout") }, p.timeout)); try { b = 1, u.send(y, k) } catch (N) { if (!(2 > b)) throw N; k(-1, N) } } else k(-1, "No Transport"); function k(e, n, r, i) { var c, y, v, w, T, N = n; 2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop"))) } return C }, getJSON: function (e, t, n) { return x.get(e, t, n, "json") }, getScript: function (e, n) { return x.get(e, t, n, "script") } }), x.each(["get", "post"], function (e, n) { x[n] = function (e, r, i, o) { return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({ url: e, type: n, dataType: o, data: r, success: i }) } }); function Mn(e, n, r) { var i, o, a, s, l = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type")); if (o) for (s in l) if (l[s] && l[s].test(o)) { u.unshift(s); break } if (u[0] in r) a = u[0]; else { for (s in r) { if (!u[0] || e.converters[s + " " + u[0]]) { a = s; break } i || (i = s) } a = a || i } return a ? (a !== u[0] && u.unshift(a), r[a]) : t } function On(e, t, n, r) { var i, o, a, s, l, u = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) { if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) { a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1])); break } if (a !== !0) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (p) { return { state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o } } } return { state: "success", data: t } } x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (e) { return x.globalEval(e), e } } }), x.ajaxPrefilter("script", function (e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), x.ajaxTransport("script", function (e) { if (e.crossDomain) { var n, r = a.head || x("head")[0] || a.documentElement; return { send: function (t, i) { n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")) }, r.insertBefore(n, r.firstChild) }, abort: function () { n && n.onload(t, !0) } } } }); var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/; x.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Fn.pop() || x.expando + "_" + vn++; return this[e] = !0, e } }), x.ajaxPrefilter("json jsonp", function (n, r, i) { var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data"); return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () { return s || x.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", a = e[o], e[o] = function () { s = arguments }, i.always(function () { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t }), "script") : t }); var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () { var e; for (e in Pn) Pn[e](t, !0) }; function In() { try { return new e.XMLHttpRequest } catch (t) { } } function zn() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) { } } x.ajaxSettings.xhr = e.ActiveXObject ? function () { return !this.isLocal && In() || zn() } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) { if (!n.crossDomain || x.support.cors) { var r; return { send: function (i, o) { var a, s, l = n.xhr(); if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s]; n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); try { for (s in i) l.setRequestHeader(s, i[s]) } catch (u) { } l.send(n.hasContent && n.data || null), r = function (e, i) { var s, u, c, p; try { if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort(); else { p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText); try { c = l.statusText } catch (f) { c = "" } s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404 } } catch (d) { i || o(-1, d) } p && o(s, c, p, u) }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r() }, abort: function () { r && r(t, !0) } } } }); var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = { "*": [function (e, t) { var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20; if (a && a[3] !== o) { o = o || a[3], i = i || [], a = +r || 1; do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l) } return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n }] }; function Kn() { return setTimeout(function () { Xn = t }), Xn = x.now() } function Zn(e, t, n) { var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length; for (; a > o; o++) if (r = i[o].call(n, t, e)) return r } function er(e, t, n) { var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function () { delete l.elem }), l = function () { if (i) return !1; var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; for (; l > a; a++) u.tweens[a].run(o); return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1) }, u = s.promise({ elem: e, props: x.extend({}, t), opts: x.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function (t, n) { var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing); return u.tweens.push(r), r }, stop: function (t) { var n = 0, r = t ? u.tweens.length : 0; if (i) return this; for (i = !0; r > n; n++) u.tweens[n].run(1); return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this } }), c = u.props; for (tr(c, u.opts.specialEasing) ; a > o; o++) if (r = Gn[o].call(u, e, c, u.opts)) return r; return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) } function tr(e, t) { var n, r, i, o, a; for (n in e) if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i } x.Animation = x.extend(er, { tweener: function (e, t) { x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); var n, r = 0, i = e.length; for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t) }, prefilter: function (e, t) { t ? Gn.unshift(e) : Gn.push(e) } }); function nr(e, t, n) { var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow"); n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () { s.unqueued || l() }), s.unqueued++, u.always(function () { u.always(function () { s.unqueued--, x.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] })); for (r in t) if (i = t[r], Vn.exec(i)) { if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue; c[r] = d && d[r] || x.style(e, r) } if (!x.isEmptyObject(c)) { d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () { x(e).hide() }), u.done(function () { var t; x._removeData(e, "fxshow"); for (t in c) x.style(e, t, c[t]) }); for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0)) } } function rr(e, t, n, r, i) { return new rr.prototype.init(e, t, n, r, i) } x.Tween = rr, rr.prototype = { constructor: rr, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px") }, cur: function () { var e = rr.propHooks[this.prop]; return e && e.get ? e.get(this) : rr.propHooks._default.get(this) }, run: function (e) { var t, n = rr.propHooks[this.prop]; return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this } }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function (e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function (e) { x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, x.each(["toggle", "show", "hide"], function (e, t) { var n = x.fn[t]; x.fn[t] = function (e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i) } }), x.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (e, t, n, r) { var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function () { var t = er(this, x.extend({}, e), o); (i || x._data(this, "finish")) && t.stop(!0) }; return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a) }, stop: function (e, n, r) { var i = function (e) { var t = e.stop; delete e.stop, t(r) }; return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () { var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this); if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]); for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); (t || !r) && x.dequeue(this, e) }) }, finish: function (e) { return e !== !1 && (e = e || "fx"), this.each(function () { var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0; for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this); delete n.finish }) } }); function ir(e, t) { var n, r = { height: e }, i = 0; for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r } x.each({ slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) { x.fn[e] = function (e, n, r) { return this.animate(t, e, n, r) } }), x.speed = function (e, t, n) { var r = e && "object" == typeof e ? x.extend({}, e) : { complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t }; return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () { x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue) }, r }, x.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 } }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () { var e, n = x.timers, r = 0; for (Xn = x.now() ; n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1); n.length || x.fx.stop(), Xn = t }, x.fx.timer = function (e) { e() && x.timers.push(e) && x.fx.start() }, x.fx.interval = 13, x.fx.start = function () { Un || (Un = setInterval(x.fx.tick, x.fx.interval)) }, x.fx.stop = function () { clearInterval(Un), Un = null }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) { return x.grep(x.timers, function (t) { return e === t.elem }).length }), x.fn.offset = function (e) { if (arguments.length) return e === t ? this : this.each(function (t) { x.offset.setOffset(this, e, t) }); var n, r, o = { top: 0, left: 0 }, a = this[0], s = a && a.ownerDocument; if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o }, x.offset = { setOffset: function (e, t, n) { var r = x.css(e, "position"); "static" === r && (e.style.position = "relative"); var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f; l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u) } }, x.fn.extend({ position: function () { if (this[0]) { var e, t, n = { top: 0, left: 0 }, r = this[0]; return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - x.css(r, "marginTop", !0), left: t.left - n.left - x.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent || s; while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent; return e || s }) } }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) { var r = /Y/.test(n); x.fn[e] = function (i) { return x.access(this, function (e, i, o) { var a = or(e); return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t) }, e, i, arguments.length, null) } }); function or(e) { return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 } x.each({ Height: "height", Width: "width" }, function (e, n) { x.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (r, i) { x.fn[i] = function (i, o) { var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border"); return x.access(this, function (n, r, i) { var o; return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s) }, n, a ? i : t, a, null) } }) }), x.fn.size = function () { return this.length }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () { return x }))
})(window);


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


(function () {
    var Module, Plugin, Widget,
      __slice = [].slice,
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    Module = (function () {
        function Module() { }

        Module.extend = function (obj) {
            var key, val, _ref;
            if (!((obj != null) && typeof obj === 'object')) {
                return;
            }
            for (key in obj) {
                val = obj[key];
                if (key !== 'included' && key !== 'extended') {
                    this[key] = val;
                }
            }
            return (_ref = obj.extended) != null ? _ref.call(this) : void 0;
        };

        Module.include = function (obj) {
            var key, val, _ref;
            if (!((obj != null) && typeof obj === 'object')) {
                return;
            }
            for (key in obj) {
                val = obj[key];
                if (key !== 'included' && key !== 'extended') {
                    this.prototype[key] = val;
                }
            }
            return (_ref = obj.included) != null ? _ref.call(this) : void 0;
        };

        Module.prototype.on = function () {
            var args, _ref;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            return (_ref = $(this)).on.apply(_ref, args);
        };

        Module.prototype.one = function () {
            var args, _ref;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            return (_ref = $(this)).one.apply(_ref, args);
        };

        Module.prototype.off = function () {
            var args, _ref;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            return (_ref = $(this)).off.apply(_ref, args);
        };

        Module.prototype.trigger = function () {
            var args, _ref;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            return (_ref = $(this)).trigger.apply(_ref, args);
        };

        Module.prototype.triggerHandler = function () {
            var args, _ref;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            return (_ref = $(this)).triggerHandler.apply(_ref, args);
        };

        return Module;

    })();

    Widget = (function (_super) {
        __extends(Widget, _super);

        Widget.connect = function (cls) {
            if (typeof cls !== 'function') {
                return;
            }
            if (!cls.className) {
                throw new Error('Widget.connect: lack of class property "className"');
                return;
            }
            if (!this._connectedClasses) {
                this._connectedClasses = [];
            }
            this._connectedClasses.push(cls);
            if (cls.className) {
                return this[cls.className] = cls;
            }
        };

        Widget.prototype._init = function () { };

        Widget.prototype.opts = {};

        function Widget(opts) {
            var cls, instance, instances, name, _base, _i, _len;
            this.opts = $.extend({}, this.opts, opts);
            (_base = this.constructor)._connectedClasses || (_base._connectedClasses = []);
            instances = (function () {
                var _i, _len, _ref, _results;
                _ref = this.constructor._connectedClasses;
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    cls = _ref[_i];
                    name = cls.className.charAt(0).toLowerCase() + cls.className.slice(1);
                    _results.push(this[name] = new cls(this));
                }
                return _results;
            }).call(this);
            this._init();
            for (_i = 0, _len = instances.length; _i < _len; _i++) {
                instance = instances[_i];
                if (typeof instance._init === "function") {
                    instance._init();
                }
            }
            this.trigger('pluginconnected');
        }

        Widget.prototype.destroy = function () { };

        return Widget;

    })(Module);

    Plugin = (function (_super) {
        __extends(Plugin, _super);

        Plugin.className = 'Plugin';

        Plugin.prototype.opts = {};

        function Plugin(widget) {
            this.widget = widget;
            this.opts = $.extend({}, this.opts, this.widget.opts);
        }

        Plugin.prototype._init = function () { };

        return Plugin;

    })(Module);

    window.Module = Module;

    window.Widget = Widget;

    window.Plugin = Plugin;

}).call(this);

(function () {
    var Uploader,
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    Uploader = (function (_super) {
        __extends(Uploader, _super);

        Uploader.count = 0;

        Uploader.prototype.opts = {
            url: '',
            params: null,
            connectionCount: 3,
            leaveConfirm: '正在上传文件，如果离开上传会自动取消'
        };

        Uploader.prototype.files = [];

        Uploader.prototype.queue = [];

        Uploader.prototype.html5 = !!(window.File && window.FileList);

        function Uploader(opts) {
            var _this = this;
            if (opts == null) {
                opts = {};
            }
            $.extend(this.opts, opts);
            this.id = ++Uploader.count;
            this.on('uploadcomplete', function (e, file) {
                _this.files.splice($.inArray(file, _this.files), 1);
                if (_this.queue.length > 0 && _this.files.length < _this.opts.connectionCount) {
                    return _this.upload(_this.queue.shift());
                } else {
                    return _this.uploading = false;
                }
            });
            $(window).on('beforeunload.uploader-' + this.id, function (e) {
                if (!_this.uploading) {
                    return;
                }
                e.originalEvent.returnValue = _this.opts.leaveConfirm;
                return _this.opts.leaveConfirm;
            });
        }

        Uploader.prototype.generateId = (function () {
            var id;
            id = 0;
            return function () {
                return id += 1;
            };
        })();

        Uploader.prototype.upload = function (file, opts) {
            var f, _i, _len;
            if (opts == null) {
                opts = {};
            }
            if (file == null) {
                return;
            }
            if ($.isArray(file)) {
                for (_i = 0, _len = file.length; _i < _len; _i++) {
                    f = file[_i];
                    this.upload(f, opts);
                }
            } else if ($(file).is('input:file') && this.html5) {
                this.upload($.makeArray($(file)[0].files), opts);
            } else if (!file.id || !file.obj) {
                file = this.getFile(file);
            }
            if (!(file && file.obj)) {
                return;
            }
            $.extend(file, opts);
            if (this.files.length >= this.opts.connectionCount) {
                this.queue.push(file);
                return;
            }
            if (this.triggerHandler('beforeupload', [file]) === false) {
                return;
            }
            this.files.push(file);
            if (this.html5) {
                this.xhrUpload(file);
            } else {
                this.iframeUpload(file);
            }
            return this.uploading = true;
        };

        Uploader.prototype.getFile = function (fileObj) {
            var name, _ref, _ref1;
            if (fileObj instanceof window.File || fileObj instanceof window.Blob) {
                name = (_ref = fileObj.fileName) != null ? _ref : fileObj.name;
            } else if ($(fileObj).is('input:file')) {
                name = $input.val().replace(/.*(\/|\\)/, "");
                fileObj = $(fileObj).clone();
            } else {
                return null;
            }
            return {
                id: this.generateId(),
                url: this.opts.url,
                params: this.opts.params,
                name: name,
                size: (_ref1 = fileObj.fileSize) != null ? _ref1 : fileObj.size,
                ext: name ? name.split('.').pop().toLowerCase() : '',
                obj: fileObj
            };
        };

        Uploader.prototype.xhrUpload = function (file) {
            var formData, k, v, _ref,
              _this = this;
            formData = new FormData();
            formData.append("upload_file", file.obj);
            formData.append("original_filename", file.name);
            if (file.params) {
                _ref = file.params;
                for (k in _ref) {
                    v = _ref[k];
                    formData.append(k, v);
                }
            }
            return file.xhr = $.ajax({
                url: file.url,
                data: formData,
                processData: false,
                contentType: false,
                type: 'POST',
                headers: {
                    'X-File-Name': encodeURIComponent(file.name)
                },
                xhr: function () {
                    var req,
                      _this = this;
                    req = $.ajaxSettings.xhr();
                    if (req) {
                        req.upload.onprogress = function (e) {
                            return _this.progress(e);
                        };
                    }
                    return req;
                },
                progress: function (e) {
                    if (!e.lengthComputable) {
                        return;
                    }
                    return _this.trigger('uploadprogress', [file, e.loaded, e.total]);
                },
                error: function (xhr, status, err) {
                    return _this.trigger('uploaderror', [file, xhr, status]);
                },
                success: function (result) {
                    _this.trigger('uploadprogress', [file, file.size, file.size]);
                    return _this.trigger('uploadsuccess', [file, result]);
                },
                complete: function (xhr, status) {
                    return _this.trigger('uploadcomplete', [file, xhr.responseText]);
                }
            });
        };

        Uploader.prototype.iframeUpload = function (file) {
            var k, v, _ref,
              _this = this;
            file.iframe = $('iframe', {
                src: 'javascript:false;',
                name: 'uploader-' + file.id
            }).hide().appendTo(document.body);
            file.form = $('<form/>', {
                method: 'post',
                enctype: 'multipart/form-data',
                action: file.url,
                target: file.iframe[0].name
            }).hide().append(file.obj).appendTo(document.body);
            if (file.params) {
                _ref = file.params;
                for (k in _ref) {
                    v = _ref[k];
                    $('<input/>', {
                        type: 'hidden',
                        name: k,
                        value: v
                    }).appendTo(form);
                }
            }
            file.iframe.on('load', function () {
                var error, iframeDoc, json, responseEl, result;
                if (!(iframe.parent().length > 0)) {
                    return;
                }
                iframeDoc = iframe[0].contentDocument;
                if (iframeDoc && iframeDoc.body && iframeDoc.body.innerHTML === "false") {
                    return;
                }
                responseEl = iframeDoc.getElementById('json-response');
                json = responseEl ? responseEl.innerHTML : iframeDoc.body.innerHTML;
                try {
                    result = $.parseJSON(json);
                } catch (_error) {
                    error = _error;
                    _this.trigger('uploaderror', [file, null, 'parsererror']);
                    result = {};
                }
                if (result.success) {
                    _this.trigger('uploadsuccess', [file, result]);
                }
                _this.trigger('uploadcomplete', [file, result]);
                return file.iframe.remove();
            });
            return file.form.submit().remove();
        };

        Uploader.prototype.cancel = function (file) {
            var f, _i, _len, _ref;
            if (!file.id) {
                _ref = this.files;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    f = _ref[_i];
                    if (f.id === file) {
                        file = f;
                        break;
                    }
                }
            }
            this.trigger('uploadcancel', [file]);
            if (this.html5) {
                if (file.xhr) {
                    file.xhr.abort();
                }
                return file.xhr = null;
            } else {
                file.iframe.attr('src', 'javascript:false;').remove();
                return this.trigger('uploadcomplete', [file]);
            }
        };

        Uploader.prototype.readImageFile = function (fileObj, callback) {
            var fileReader, img;
            if (!$.isFunction(callback)) {
                return;
            }
            img = new Image();
            img.onload = function () {
                return callback(img);
            };
            img.onerror = function () {
                return callback();
            };
            if (window.FileReader && FileReader.prototype.readAsDataURL && /^image/.test(fileObj.type)) {
                fileReader = new FileReader();
                fileReader.onload = function (e) {
                    return img.src = e.target.result;
                };
                return fileReader.readAsDataURL(fileObj);
            } else {
                return callback();
            }
        };

        Uploader.prototype.destroy = function () {
            var file, _i, _len, _ref;
            this.queue.length = 0;
            _ref = this.files;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                this.cancel(file);
            }
            $(window).off('.uploader-' + this.id);
            return $(document).off('.uploader-' + this.id);
        };

        return Uploader;

    })(Module);

    this.simple || (this.simple = {});

    this.simple.uploader = function (opts) {
        return new Uploader(opts);
    };

}).call(this);

(function () {
    var BlockquoteButton, BoldButton, Button, CodeButton, CodePopover, Formatter, HrButton, ImageButton, ImagePopover, IndentButton, InputManager, ItalicButton, Keystroke, LinkButton, LinkPopover, ListButton, OrderListButton, OutdentButton, Popover, Selection, Simditor, StrikethroughButton, TableButton, Test, TestPlugin, TitleButton, Toolbar, UnderlineButton, UndoManager, UnorderListButton, Util, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9,
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      __slice = [].slice,
      __indexOf = [].indexOf || function (item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

    Selection = (function (_super) {
        __extends(Selection, _super);

        Selection.className = 'Selection';

        function Selection() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            Selection.__super__.constructor.apply(this, args);
            this.sel = document.getSelection();
            this.editor = this.widget;
        }

        Selection.prototype._init = function () { };

        Selection.prototype.clear = function () {
            var e;
            try {
                return this.sel.removeAllRanges();
            } catch (_error) {
                e = _error;
            }
        };

        Selection.prototype.getRange = function () {
            if (!this.editor.inputManager.focused || !this.sel.rangeCount) {
                return null;
            }
            return this.sel.getRangeAt(0);
        };

        Selection.prototype.selectRange = function (range) {
            this.clear();
            this.sel.addRange(range);
            if (!this.editor.inputManager.focused && (this.editor.util.browser.firefox || this.editor.util.browser.msie)) {
                return this.editor.body.focus();
            }
        };

        Selection.prototype.rangeAtEndOf = function (node, range) {
            var endNode, endNodeLength, result,
              _this = this;
            if (range == null) {
                range = this.getRange();
            }
            if (!((range != null) && range.collapsed)) {
                return;
            }
            node = $(node)[0];
            endNode = range.endContainer;
            endNodeLength = this.editor.util.getNodeLength(endNode);
            if (!(range.endOffset === endNodeLength - 1 && $(endNode).contents().last().is('br')) && range.endOffset !== endNodeLength) {
                return false;
            }
            if (node === endNode) {
                return true;
            } else if (!$.contains(node, endNode)) {
                return false;
            }
            result = true;
            $(endNode).parentsUntil(node).addBack().each(function (i, n) {
                var $lastChild, nodes;
                nodes = $(n).parent().contents().filter(function () {
                    return !(this !== n && this.nodeType === 3 && !this.nodeValue);
                });
                $lastChild = nodes.last();
                if (!($lastChild.get(0) === n || ($lastChild.is('br') && $lastChild.prev().get(0) === n))) {
                    result = false;
                    return false;
                }
            });
            return result;
        };

        Selection.prototype.rangeAtStartOf = function (node, range) {
            var result, startNode,
              _this = this;
            if (range == null) {
                range = this.getRange();
            }
            if (!((range != null) && range.collapsed)) {
                return;
            }
            node = $(node)[0];
            startNode = range.startContainer;
            if (range.startOffset !== 0) {
                return false;
            }
            if (node === startNode) {
                return true;
            } else if (!$.contains(node, startNode)) {
                return false;
            }
            result = true;
            $(startNode).parentsUntil(node).addBack().each(function (i, n) {
                var nodes;
                nodes = $(n).parent().contents().filter(function () {
                    return !(this !== n && this.nodeType === 3 && !this.nodeValue);
                });
                if (nodes.first().get(0) !== n) {
                    return result = false;
                }
            });
            return result;
        };

        Selection.prototype.insertNode = function (node, range) {
            if (range == null) {
                range = this.getRange();
            }
            if (range == null) {
                return;
            }
            node = $(node)[0];
            range.insertNode(node);
            return this.setRangeAfter(node, range);
        };

        Selection.prototype.setRangeAfter = function (node, range) {
            if (range == null) {
                range = this.getRange();
            }
            if (range == null) {
                return;
            }
            node = $(node)[0];
            range.setEndAfter(node);
            range.collapse(false);
            return this.selectRange(range);
        };

        Selection.prototype.setRangeBefore = function (node, range) {
            if (range == null) {
                range = this.getRange();
            }
            if (range == null) {
                return;
            }
            node = $(node)[0];
            range.setEndBefore(node);
            range.collapse(false);
            return this.selectRange(range);
        };

        Selection.prototype.setRangeAtStartOf = function (node, range) {
            if (range == null) {
                range = this.getRange();
            }
            node = $(node).get(0);
            range.setEnd(node, 0);
            range.collapse(false);
            return this.selectRange(range);
        };

        Selection.prototype.setRangeAtEndOf = function (node, range) {
            var $node, contents, lastChild, lastText, nodeLength;
            if (range == null) {
                range = this.getRange();
            }
            $node = $(node);
            node = $node.get(0);
            if ($node.is('pre')) {
                contents = $node.contents();
                if (contents.length > 0) {
                    lastChild = contents.last();
                    lastText = lastChild.text();
                    if (lastText.charAt(lastText.length - 1) === '\n') {
                        range.setEnd(lastChild[0], this.editor.util.getNodeLength(lastChild[0]) - 1);
                    } else {
                        range.setEnd(lastChild[0], this.editor.util.getNodeLength(lastChild[0]));
                    }
                } else {
                    range.setEnd(node, 0);
                }
            } else {
                nodeLength = this.editor.util.getNodeLength(node);
                if (node.nodeType !== 3 && nodeLength > 0 && $(node).contents().last().is('br')) {
                    nodeLength -= 1;
                }
                range.setEnd(node, nodeLength);
            }
            range.collapse(false);
            return this.selectRange(range);
        };

        Selection.prototype.deleteRangeContents = function (range) {
            var endRange, startRange;
            if (range == null) {
                range = this.getRange();
            }
            startRange = range.cloneRange();
            endRange = range.cloneRange();
            startRange.collapse(true);
            endRange.collapse();
            if (!range.collapsed && this.rangeAtStartOf(this.editor.body, startRange) && this.rangeAtEndOf(this.editor.body, endRange)) {
                this.editor.body.empty();
                range.setStart(this.editor.body[0], 0);
                range.collapse(true);
                this.selectRange(range);
            } else {
                range.deleteContents();
            }
            return range;
        };

        Selection.prototype.breakBlockEl = function (el, range) {
            var $el;
            if (range == null) {
                range = this.getRange();
            }
            $el = $(el);
            if (!range.collapsed) {
                return $el;
            }
            range.setStartBefore($el.get(0));
            if (range.collapsed) {
                return $el;
            }
            return $el.before(range.extractContents());
        };

        Selection.prototype.save = function (range) {
            var endCaret, startCaret;
            if (range == null) {
                range = this.getRange();
            }
            if (this._selectionSaved) {
                return;
            }
            startCaret = $('<span/>').addClass('simditor-caret-start');
            endCaret = $('<span/>').addClass('simditor-caret-end');
            range.insertNode(startCaret[0]);
            range.collapse(false);
            range.insertNode(endCaret[0]);
            this.clear();
            return this._selectionSaved = true;
        };

        Selection.prototype.restore = function () {
            var endCaret, endContainer, endOffset, range, startCaret, startContainer, startOffset;
            if (!this._selectionSaved) {
                return false;
            }
            startCaret = this.editor.body.find('.simditor-caret-start');
            endCaret = this.editor.body.find('.simditor-caret-end');
            if (startCaret.length && endCaret.length) {
                startContainer = startCaret.parent();
                startOffset = startContainer.contents().index(startCaret);
                endContainer = endCaret.parent();
                endOffset = endContainer.contents().index(endCaret);
                if (startContainer[0] === endContainer[0]) {
                    endOffset -= 1;
                }
                range = document.createRange();
                range.setStart(startContainer.get(0), startOffset);
                range.setEnd(endContainer.get(0), endOffset);
                startCaret.remove();
                endCaret.remove();
                this.selectRange(range);
            } else {
                startCaret.remove();
                endCaret.remove();
            }
            this._selectionSaved = false;
            return range;
        };

        return Selection;

    })(Plugin);

    Formatter = (function (_super) {
        __extends(Formatter, _super);

        Formatter.className = 'Formatter';

        function Formatter() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            Formatter.__super__.constructor.apply(this, args);
            this.editor = this.widget;
        }

        Formatter.prototype._init = function () {
            var _this = this;
            return this.editor.body.on('click', 'a', function (e) {
                return false;
            });
        };

        Formatter.prototype._allowedTags = ['br', 'a', 'img', 'b', 'strong', 'i', 'u', 'p', 'ul', 'ol', 'li', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'hr'];

        Formatter.prototype._allowedAttributes = {
            img: ['src', 'alt', 'width', 'height', 'data-image-src', 'data-image-size', 'data-image-name', 'data-non-image'],
            a: ['href', 'target'],
            pre: ['data-lang', 'class'],
            p: ['data-indent'],
            h1: ['data-indent'],
            h2: ['data-indent'],
            h3: ['data-indent'],
            h4: ['data-indent']
        };

        Formatter.prototype.decorate = function ($el) {
            if ($el == null) {
                $el = this.editor.body;
            }
            return this.editor.trigger('decorate', [$el]);
        };

        Formatter.prototype.undecorate = function ($el) {
            if ($el == null) {
                $el = this.editor.body.clone();
            }
            this.editor.trigger('undecorate', [$el]);
            return $.trim($el.html());
        };

        Formatter.prototype.autolink = function ($el) {
            var $node, findLinkNode, lastIndex, linkNodes, match, re, replaceEls, text, uri, _i, _len;
            if ($el == null) {
                $el = this.editor.body;
            }
            linkNodes = [];
            findLinkNode = function ($parentNode) {
                return $parentNode.contents().each(function (i, node) {
                    var $node, text;
                    $node = $(node);
                    if ($node.is('a') || $node.closest('a', $el).length) {
                        return;
                    }
                    if ($node.contents().length) {
                        return findLinkNode($node);
                    } else if ((text = $node.text()) && /https?:\/\/|www\./ig.test(text)) {
                        return linkNodes.push($node);
                    }
                });
            };
            findLinkNode($el);
            re = /(https?:\/\/|www\.)[\w\-\.\?&=\/#%:\!]+/ig;
            for (_i = 0, _len = linkNodes.length; _i < _len; _i++) {
                $node = linkNodes[_i];
                text = $node.text();
                replaceEls = [];
                match = null;
                lastIndex = 0;
                while ((match = re.exec(text)) !== null) {
                    replaceEls.push(document.createTextNode(text.substring(lastIndex, match.index)));
                    lastIndex = re.lastIndex;
                    uri = /^(http(s)?:\/\/|\/)/.test(match[0]) ? match[0] : 'http://' + match[0];
                    replaceEls.push($('<a href="' + uri + '" rel="nofollow">' + match[0] + '</a>')[0]);
                }
                replaceEls.push(document.createTextNode(text.substring(lastIndex)));
                $node.replaceWith($(replaceEls));
            }
            return $el;
        };

        Formatter.prototype.format = function ($el) {
            var $node, blockNode, n, node, _i, _j, _len, _len1, _ref, _ref1;
            if ($el == null) {
                $el = this.editor.body;
            }
            if ($el.is(':empty')) {
                $el.append('<p>' + this.editor.util.phBr + '</p>');
                return $el;
            }
            _ref = $el.contents();
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                n = _ref[_i];
                this.cleanNode(n, true);
            }
            _ref1 = $el.contents();
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                node = _ref1[_j];
                $node = $(node);
                if ($node.is('br')) {
                    if (typeof blockNode !== "undefined" && blockNode !== null) {
                        blockNode = null;
                    }
                    $node.remove();
                } else if (this.editor.util.isBlockNode(node)) {
                    if ($node.is('li')) {
                        if (blockNode && blockNode.is('ul, ol')) {
                            blockNode.append(node);
                        } else {
                            blockNode = $('<ul/>').insertBefore(node);
                            blockNode.append(node);
                        }
                    } else {
                        blockNode = null;
                    }
                } else {
                    if (!blockNode || blockNode.is('ul, ol')) {
                        blockNode = $('<p/>').insertBefore(node);
                    }
                    blockNode.append(node);
                }
            }
            return $el;
        };

        Formatter.prototype.cleanNode = function (node, recursive) {
            var $node, $p, $td, allowedAttributes, attr, contents, isDecoration, n, text, textNode, _i, _j, _len, _len1, _ref, _ref1,
              _this = this;
            $node = $(node);
            if ($node[0].nodeType === 3) {
                text = $node.text().replace(/(\r\n|\n|\r)/gm, '');
                if (text) {
                    textNode = document.createTextNode(text);
                    $node.replaceWith(textNode);
                } else {
                    $node.remove();
                }
                return;
            }
            contents = $node.contents();
            isDecoration = $node.is('[class^="simditor-"]');
            if ($node.is(this._allowedTags.join(',')) || isDecoration) {
                if ($node.is('a') && $node.find('img').length > 0) {
                    contents.first().unwrap();
                }
                if ($node.is('img') && $node.hasClass('uploading')) {
                    $node.remove();
                }
                if (!isDecoration) {
                    allowedAttributes = this._allowedAttributes[$node[0].tagName.toLowerCase()];
                    _ref = $.makeArray($node[0].attributes);
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        attr = _ref[_i];
                        if (!((allowedAttributes != null) && (_ref1 = attr.name, __indexOf.call(allowedAttributes, _ref1) >= 0))) {
                            $node.removeAttr(attr.name);
                        }
                    }
                }
            } else if ($node[0].nodeType === 1 && !$node.is(':empty')) {
                if ($node.is('div, article, dl, header, footer, tr')) {
                    $node.append('<br/>');
                    contents.first().unwrap();
                } else if ($node.is('table')) {
                    $p = $('<p/>');
                    $node.find('tr').each(function (i, tr) {
                        return $p.append($(tr).text() + '<br/>');
                    });
                    $node.replaceWith($p);
                    contents = null;
                } else if ($node.is('thead, tfoot')) {
                    $node.remove();
                    contents = null;
                } else if ($node.is('th')) {
                    $td = $('<td/>').append($node.contents());
                    $node.replaceWith($td);
                } else {
                    contents.first().unwrap();
                }
            } else {
                $node.remove();
                contents = null;
            }
            if (recursive && (contents != null) && !$node.is('pre')) {
                for (_j = 0, _len1 = contents.length; _j < _len1; _j++) {
                    n = contents[_j];
                    this.cleanNode(n, true);
                }
            }
            return null;
        };

        Formatter.prototype.clearHtml = function (html, lineBreak) {
            var container, contents, result,
              _this = this;
            if (lineBreak == null) {
                lineBreak = true;
            }
            container = $('<div/>').append(html);
            contents = container.contents();
            result = '';
            contents.each(function (i, node) {
                var $node;
                if (node.nodeType === 3) {
                    return result += node.nodeValue;
                } else if (node.nodeType === 1) {
                    $node = $(node);
                    contents = $node.contents();
                    if (contents.length > 0) {
                        result += _this.clearHtml(contents);
                    }
                    if (lineBreak && i < contents.length - 1 && $node.is('br, p, div, li, tr, pre, address, artticle, aside, dl, figcaption, footer, h1, h2, h3, h4, header')) {
                        return result += '\n';
                    }
                }
            });
            return result;
        };

        Formatter.prototype.beautify = function ($contents) {
            var uselessP,
              _this = this;
            uselessP = function ($el) {
                return !!($el.is('p') && !$el.text() && $el.children(':not(br)').length < 1);
            };
            return $contents.each(function (i, el) {
                var $el;
                $el = $(el);
                if ($el.is(':not(img, br, col, td, hr, [class^="simditor-"]):empty')) {
                    $el.remove();
                }
                if (uselessP($el)) {
                    $el.remove();
                }
                return $el.find(':not(img, br, col, td, hr, [class^="simditor-"]):empty').remove();
            });
        };

        return Formatter;

    })(Plugin);

    InputManager = (function (_super) {
        __extends(InputManager, _super);

        InputManager.className = 'InputManager';

        InputManager.prototype.opts = {
            pasteImage: false
        };

        function InputManager() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            InputManager.__super__.constructor.apply(this, args);
            this.editor = this.widget;
            if (this.opts.pasteImage && typeof this.opts.pasteImage !== 'string') {
                this.opts.pasteImage = 'inline';
            }
        }

        InputManager.prototype._modifierKeys = [16, 17, 18, 91, 93, 224];

        InputManager.prototype._arrowKeys = [37, 38, 39, 40];

        InputManager.prototype._init = function () {
            var _this = this;
            this._pasteArea = $('<div/>').css({
                width: '1px',
                height: '1px',
                overflow: 'hidden',
                position: 'fixed',
                right: '0',
                bottom: '100px'
            }).attr({
                tabIndex: '-1',
                contentEditable: true
            }).addClass('simditor-paste-area').appendTo(this.editor.el);
            this.editor.on('valuechanged', function () {
                return _this.editor.body.find('hr, pre, .simditor-table').each(function (i, el) {
                    var $el, formatted;
                    $el = $(el);
                    if ($el.parent().is('blockquote') || $el.parent()[0] === _this.editor.body[0]) {
                        formatted = false;
                        if ($el.next().length === 0) {
                            $('<p/>').append(_this.editor.util.phBr).insertAfter($el);
                            formatted = true;
                        }
                        if ($el.prev().length === 0) {
                            $('<p/>').append(_this.editor.util.phBr).insertBefore($el);
                            formatted = true;
                        }
                        if (formatted) {
                            return setTimeout(function () {
                                return _this.editor.trigger('valuechanged');
                            }, 10);
                        }
                    }
                });
            });
            this.editor.body.on('keydown', $.proxy(this._onKeyDown, this)).on('keypress', $.proxy(this._onKeyPress, this)).on('keyup', $.proxy(this._onKeyUp, this)).on('mouseup', $.proxy(this._onMouseUp, this)).on('focus', $.proxy(this._onFocus, this)).on('blur', $.proxy(this._onBlur, this)).on('paste', $.proxy(this._onPaste, this)).on('drop', $.proxy(this._onDrop, this));
            if (this.editor.util.browser.firefox) {
                this.addShortcut('cmd+37', function (e) {
                    e.preventDefault();
                    _this.editor.selection.sel.modify('move', 'backward', 'lineboundary');
                    return false;
                });
                this.addShortcut('cmd+39', function (e) {
                    e.preventDefault();
                    _this.editor.selection.sel.modify('move', 'forward', 'lineboundary');
                    return false;
                });
            }
            if (this.editor.textarea.attr('autofocus')) {
                return setTimeout(function () {
                    return _this.editor.focus();
                }, 0);
            }
        };

        InputManager.prototype._onFocus = function (e) {
            var _this = this;
            this.editor.el.addClass('focus').removeClass('error');
            this.focused = true;
            this.lastCaretPosition = null;
            return setTimeout(function () {
                return _this.editor.triggerHandler('focus');
            }, 0);
        };

        InputManager.prototype._onBlur = function (e) {
            var _ref;
            this.editor.el.removeClass('focus');
            this.editor.sync();
            this.focused = false;
            this.lastCaretPosition = (_ref = this.editor.undoManager.currentState()) != null ? _ref.caret : void 0;
            return this.editor.triggerHandler('blur');
        };

        InputManager.prototype._onMouseUp = function (e) {
            var _this = this;
            return setTimeout(function () {
                _this.editor.trigger('selectionchanged');
                return _this.editor.undoManager.update();
            }, 0);
        };

        InputManager.prototype._onKeyDown = function (e) {
            var $blockEl, metaKey, result, shortcutKey, _base, _ref, _ref1,
              _this = this;
            if (this.editor.triggerHandler(e) === false) {
                return false;
            }
            shortcutKey = this.editor.util.getShortcutKey(e);
            if (this._shortcuts[shortcutKey]) {
                return this._shortcuts[shortcutKey].call(this, e);
            }
            if (e.which in this._keystrokeHandlers) {
                result = typeof (_base = this._keystrokeHandlers[e.which])['*'] === "function" ? _base['*'](e) : void 0;
                if (result) {
                    this.editor.trigger('valuechanged');
                    this.editor.trigger('selectionchanged');
                    return false;
                }
                this.editor.util.traverseUp(function (node) {
                    var handler, _ref;
                    if (node.nodeType !== 1) {
                        return;
                    }
                    handler = (_ref = _this._keystrokeHandlers[e.which]) != null ? _ref[node.tagName.toLowerCase()] : void 0;
                    result = typeof handler === "function" ? handler(e, $(node)) : void 0;
                    return !result;
                });
                if (result) {
                    this.editor.trigger('valuechanged');
                    this.editor.trigger('selectionchanged');
                    return false;
                }
            }
            if ((_ref = e.which, __indexOf.call(this._modifierKeys, _ref) >= 0) || (_ref1 = e.which, __indexOf.call(this._arrowKeys, _ref1) >= 0)) {
                return;
            }
            metaKey = this.editor.util.metaKey(e);
            $blockEl = this.editor.util.closestBlockEl();
            if (metaKey && e.which === 86) {
                return;
            }
            if (this._typing) {
                if (this._typing !== true) {
                    clearTimeout(this._typing);
                }
                this._typing = setTimeout(function () {
                    _this.editor.trigger('valuechanged');
                    _this.editor.trigger('selectionchanged');
                    return _this._typing = false;
                }, 200);
            } else {
                setTimeout(function () {
                    _this.editor.trigger('valuechanged');
                    return _this.editor.trigger('selectionchanged');
                }, 10);
                this._typing = true;
            }
            return null;
        };

        InputManager.prototype._onKeyPress = function (e) {
            if (this.editor.triggerHandler(e) === false) {
                return false;
            }
        };

        InputManager.prototype._onKeyUp = function (e) {
            var p, _ref;
            if (this.editor.triggerHandler(e) === false) {
                return false;
            }
            if (_ref = e.which, __indexOf.call(this._arrowKeys, _ref) >= 0) {
                this.editor.trigger('selectionchanged');
                this.editor.undoManager.update();
                return;
            }
            if (e.which === 8 && this.editor.util.isEmptyNode(this.editor.body)) {
                this.editor.body.empty();
                p = $('<p/>').append(this.editor.util.phBr).appendTo(this.editor.body);
                this.editor.selection.setRangeAtStartOf(p);
            }
        };

        InputManager.prototype._onPaste = function (e) {
            var $blockEl, cleanPaste, imageFile, pasteItem, range, uploadOpt, _ref,
              _this = this;
            if (this.editor.triggerHandler(e) === false) {
                return false;
            }
            if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.items && e.originalEvent.clipboardData.items.length > 0) {
                pasteItem = e.originalEvent.clipboardData.items[0];
                if (/^image\//.test(pasteItem.type)) {
                    imageFile = pasteItem.getAsFile();
                    if (!((imageFile != null) && this.opts.pasteImage)) {
                        return;
                    }
                    if (!imageFile.name) {
                        imageFile.name = "Clipboard Image.png";
                    }
                    uploadOpt = {};
                    uploadOpt[this.opts.pasteImage] = true;
                    if ((_ref = this.editor.uploader) != null) {
                        _ref.upload(imageFile, uploadOpt);
                    }
                    return false;
                }
            }
            range = this.editor.selection.deleteRangeContents();
            if (!range.collapsed) {
                range.collapse(true);
            }
            $blockEl = this.editor.util.closestBlockEl();
            cleanPaste = $blockEl.is('pre, table');
            this.editor.selection.save(range);
            this._pasteArea.focus();
            return setTimeout(function () {
                var $img, blob, children, insertPosition, lastLine, line, lines, node, pasteContent, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref1, _ref2;
                if (_this._pasteArea.is(':empty')) {
                    pasteContent = null;
                } else if (cleanPaste) {
                    pasteContent = _this.editor.formatter.clearHtml(_this._pasteArea.html());
                } else {
                    pasteContent = $('<div/>').append(_this._pasteArea.contents());
                    _this.editor.formatter.format(pasteContent);
                    _this.editor.formatter.decorate(pasteContent);
                    _this.editor.formatter.beautify(pasteContent.children());
                    pasteContent = pasteContent.contents();
                }
                _this._pasteArea.empty();
                range = _this.editor.selection.restore();
                if (_this.editor.triggerHandler('pasting', [pasteContent]) === false) {
                    return;
                }
                if (!pasteContent) {
                    return;
                } else if (cleanPaste) {
                    if ($blockEl.is('table')) {
                        lines = pasteContent.split('\n');
                        lastLine = lines.pop();
                        for (_i = 0, _len = lines.length; _i < _len; _i++) {
                            line = lines[_i];
                            _this.editor.selection.insertNode(document.createTextNode(line));
                            _this.editor.selection.insertNode($('<br/>'));
                        }
                        _this.editor.selection.insertNode(document.createTextNode(lastLine));
                    } else {
                        pasteContent = $('<div/>').text(pasteContent);
                        console.log(pasteContent.contents());
                        _ref1 = pasteContent.contents();
                        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                            node = _ref1[_j];
                            _this.editor.selection.insertNode($(node)[0], range);
                        }
                    }
                } else if ($blockEl.is(_this.editor.body)) {
                    for (_k = 0, _len2 = pasteContent.length; _k < _len2; _k++) {
                        node = pasteContent[_k];
                        _this.editor.selection.insertNode(node, range);
                    }
                } else if (pasteContent.length < 1) {
                    return;
                } else if (pasteContent.length === 1) {
                    if (pasteContent.is('p')) {
                        children = pasteContent.contents();
                        if (children.length === 1 && children.is('img')) {
                            $img = children;
                            if (/^data:image/.test($img.attr('src'))) {
                                if (!_this.opts.pasteImage) {
                                    return;
                                }
                                blob = _this.editor.util.dataURLtoBlob($img.attr("src"));
                                blob.name = "Clipboard Image.png";
                                uploadOpt = {};
                                uploadOpt[_this.opts.pasteImage] = true;
                                if ((_ref2 = _this.editor.uploader) != null) {
                                    _ref2.upload(blob, uploadOpt);
                                }
                                return;
                            } else if ($img.is('img[src^="webkit-fake-url://"]')) {
                                return;
                            }
                        } else {
                            for (_l = 0, _len3 = children.length; _l < _len3; _l++) {
                                node = children[_l];
                                _this.editor.selection.insertNode(node, range);
                            }
                        }
                    } else if ($blockEl.is('p') && _this.editor.util.isEmptyNode($blockEl)) {
                        $blockEl.replaceWith(pasteContent);
                        _this.editor.selection.setRangeAtEndOf(pasteContent, range);
                    } else if (pasteContent.is('ul, ol') && $blockEl.is('li')) {
                        $blockEl.parent().after(pasteContent);
                        _this.editor.selection.setRangeAtEndOf(pasteContent, range);
                    } else {
                        $blockEl.after(pasteContent);
                        _this.editor.selection.setRangeAtEndOf(pasteContent, range);
                    }
                } else {
                    if ($blockEl.is('li')) {
                        $blockEl = $blockEl.parent();
                    }
                    if (_this.editor.selection.rangeAtStartOf($blockEl, range)) {
                        insertPosition = 'before';
                    } else if (_this.editor.selection.rangeAtEndOf($blockEl, range)) {
                        insertPosition = 'after';
                    } else {
                        _this.editor.selection.breakBlockEl($blockEl, range);
                        insertPosition = 'before';
                    }
                    $blockEl[insertPosition](pasteContent);
                    _this.editor.selection.setRangeAtEndOf(pasteContent.last(), range);
                }
                _this.editor.trigger('valuechanged');
                return _this.editor.trigger('selectionchanged');
            }, 10);
        };

        InputManager.prototype._onDrop = function (e) {
            var _this = this;
            if (this.editor.triggerHandler(e) === false) {
                return false;
            }
            return setTimeout(function () {
                _this.editor.trigger('valuechanged');
                return _this.editor.trigger('selectionchanged');
            }, 0);
        };

        InputManager.prototype._keystrokeHandlers = {};

        InputManager.prototype.addKeystrokeHandler = function (key, node, handler) {
            if (!this._keystrokeHandlers[key]) {
                this._keystrokeHandlers[key] = {};
            }
            return this._keystrokeHandlers[key][node] = handler;
        };

        InputManager.prototype._shortcuts = {
            'cmd+13': function (e) {
                this.editor.el.closest('form').find('button:submit').click();
                return false;
            }
        };

        InputManager.prototype.addShortcut = function (keys, handler) {
            return this._shortcuts[keys] = $.proxy(handler, this);
        };

        return InputManager;

    })(Plugin);

    Keystroke = (function (_super) {
        __extends(Keystroke, _super);

        Keystroke.className = 'Keystroke';

        function Keystroke() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            Keystroke.__super__.constructor.apply(this, args);
            this.editor = this.widget;
        }

        Keystroke.prototype._init = function () {
            var titleEnterHandler,
              _this = this;
            if (this.editor.util.browser.safari) {
                this.editor.inputManager.addKeystrokeHandler('13', '*', function (e) {
                    var $br;
                    if (!e.shiftKey) {
                        return;
                    }
                    $br = $('<br/>');
                    if (_this.editor.selection.rangeAtEndOf($blockEl)) {
                        _this.editor.selection.insertNode($br);
                        _this.editor.selection.insertNode($('<br/>'));
                        _this.editor.selection.setRangeBefore($br);
                    } else {
                        _this.editor.selection.insertNode($br);
                    }
                    return true;
                });
            }
            if (this.editor.util.browser.webkit || this.editor.util.browser.msie) {
                titleEnterHandler = function (e, $node) {
                    var $p;
                    if (!_this.editor.selection.rangeAtEndOf($node)) {
                        return;
                    }
                    $p = $('<p/>').append(_this.editor.util.phBr).insertAfter($node);
                    _this.editor.selection.setRangeAtStartOf($p);
                    return true;
                };
                this.editor.inputManager.addKeystrokeHandler('13', 'h1', titleEnterHandler);
                this.editor.inputManager.addKeystrokeHandler('13', 'h2', titleEnterHandler);
                this.editor.inputManager.addKeystrokeHandler('13', 'h3', titleEnterHandler);
                this.editor.inputManager.addKeystrokeHandler('13', 'h4', titleEnterHandler);
                this.editor.inputManager.addKeystrokeHandler('13', 'h5', titleEnterHandler);
                this.editor.inputManager.addKeystrokeHandler('13', 'h6', titleEnterHandler);
            }
            this.editor.inputManager.addKeystrokeHandler('8', '*', function (e) {
                var $prevBlockEl, $rootBlock;
                $rootBlock = _this.editor.util.furthestBlockEl();
                $prevBlockEl = $rootBlock.prev();
                if ($prevBlockEl.is('hr') && _this.editor.selection.rangeAtStartOf($rootBlock)) {
                    _this.editor.selection.save();
                    $prevBlockEl.remove();
                    _this.editor.selection.restore();
                    return true;
                }
            });
            this.editor.inputManager.addKeystrokeHandler('9', '*', function (e) {
                if (!_this.editor.opts.tabIndent) {
                    return;
                }
                if (e.shiftKey) {
                    _this.editor.util.outdent();
                } else {
                    _this.editor.util.indent();
                }
                return true;
            });
            this.editor.inputManager.addKeystrokeHandler('13', 'li', function (e, $node) {
                var $cloneNode, listEl, newBlockEl, newListEl;
                $cloneNode = $node.clone();
                $cloneNode.find('ul, ol').remove();
                if (!(_this.editor.util.isEmptyNode($cloneNode) && $node.is(_this.editor.util.closestBlockEl()))) {
                    return;
                }
                listEl = $node.parent();
                if ($node.next('li').length > 0) {
                    if (!_this.editor.util.isEmptyNode($node)) {
                        return;
                    }
                    if (listEl.parent('li').length > 0) {
                        newBlockEl = $('<li/>').append(_this.editor.util.phBr).insertAfter(listEl.parent('li'));
                        newListEl = $('<' + listEl[0].tagName + '/>').append($node.nextAll('li'));
                        newBlockEl.append(newListEl);
                    } else {
                        newBlockEl = $('<p/>').append(_this.editor.util.phBr).insertAfter(listEl);
                        newListEl = $('<' + listEl[0].tagName + '/>').append($node.nextAll('li'));
                        newBlockEl.after(newListEl);
                    }
                } else {
                    if (listEl.parent('li').length > 0) {
                        newBlockEl = $('<li/>').insertAfter(listEl.parent('li'));
                        if ($node.contents().length > 0) {
                            newBlockEl.append($node.contents());
                        } else {
                            newBlockEl.append(_this.editor.util.phBr);
                        }
                    } else {
                        newBlockEl = $('<p/>').append(_this.editor.util.phBr).insertAfter(listEl);
                        if ($node.children('ul, ol').length > 0) {
                            newBlockEl.after($node.children('ul, ol'));
                        }
                    }
                }
                if ($node.prev('li').length) {
                    $node.remove();
                } else {
                    listEl.remove();
                }
                _this.editor.selection.setRangeAtStartOf(newBlockEl);
                return true;
            });
            this.editor.inputManager.addKeystrokeHandler('13', 'pre', function (e, $node) {
                var breakNode, range;
                e.preventDefault();
                range = _this.editor.selection.getRange();
                breakNode = null;
                range.deleteContents();
                if (!_this.editor.util.browser.msie && _this.editor.selection.rangeAtEndOf($node)) {
                    breakNode = document.createTextNode('\n\n');
                    range.insertNode(breakNode);
                    range.setEnd(breakNode, 1);
                } else {
                    breakNode = document.createTextNode('\n');
                    range.insertNode(breakNode);
                    range.setStartAfter(breakNode);
                }
                range.collapse(false);
                _this.editor.selection.selectRange(range);
                return true;
            });
            this.editor.inputManager.addKeystrokeHandler('13', 'blockquote', function (e, $node) {
                var $closestBlock;
                $closestBlock = _this.editor.util.closestBlockEl();
                if (!($closestBlock.is('p') && !$closestBlock.next().length && _this.editor.util.isEmptyNode($closestBlock))) {
                    return;
                }
                $node.after($closestBlock);
                _this.editor.selection.setRangeAtStartOf($closestBlock);
                return true;
            });
            this.editor.inputManager.addKeystrokeHandler('8', 'li', function (e, $node) {
                var $br, $childList, $newLi, $prevChildList, $prevNode, $textNode, range, text;
                $childList = $node.children('ul, ol');
                $prevNode = $node.prev('li');
                if (!($childList.length > 0 && $prevNode.length > 0)) {
                    return;
                }
                text = '';
                $textNode = null;
                $node.contents().each(function (i, n) {
                    if (n.nodeType === 3 && n.nodeValue) {
                        text += n.nodeValue;
                        return $textNode = $(n);
                    }
                });
                if ($textNode && text.length === 1 && _this.editor.util.browser.firefox && !$textNode.next('br').length) {
                    $br = $(_this.editor.util.phBr).insertAfter($textNode);
                    $textNode.remove();
                    _this.editor.selection.setRangeBefore($br);
                    return true;
                } else if (text.length > 0) {
                    return;
                }
                range = document.createRange();
                $prevChildList = $prevNode.children('ul, ol');
                if ($prevChildList.length > 0) {
                    $newLi = $('<li/>').append(_this.editor.util.phBr).appendTo($prevChildList);
                    $prevChildList.append($childList.children('li'));
                    $node.remove();
                    _this.editor.selection.setRangeAtEndOf($newLi, range);
                } else {
                    _this.editor.selection.setRangeAtEndOf($prevNode, range);
                    $prevNode.append($childList);
                    $node.remove();
                    _this.editor.selection.selectRange(range);
                }
                return true;
            });
            this.editor.inputManager.addKeystrokeHandler('8', 'pre', function (e, $node) {
                var $newNode, codeStr;
                if (!_this.editor.selection.rangeAtStartOf($node)) {
                    return;
                }
                codeStr = $node.html().replace('\n', '<br/>');
                $newNode = $('<p/>').append(codeStr || _this.editor.util.phBr).insertAfter($node);
                $node.remove();
                _this.editor.selection.setRangeAtStartOf($newNode);
                return true;
            });
            return this.editor.inputManager.addKeystrokeHandler('8', 'blockquote', function (e, $node) {
                var $firstChild;
                if (!_this.editor.selection.rangeAtStartOf($node)) {
                    return;
                }
                $firstChild = $node.children().first().unwrap();
                _this.editor.selection.setRangeAtStartOf($firstChild);
                return true;
            });
        };

        return Keystroke;

    })(Plugin);

    UndoManager = (function (_super) {
        __extends(UndoManager, _super);

        UndoManager.className = 'UndoManager';

        UndoManager.prototype._stack = [];

        UndoManager.prototype._index = -1;

        UndoManager.prototype._capacity = 50;

        UndoManager.prototype._timer = null;

        function UndoManager() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            UndoManager.__super__.constructor.apply(this, args);
            this.editor = this.widget;
        }

        UndoManager.prototype._init = function () {
            var redoShortcut, undoShortcut,
              _this = this;
            if (this.editor.util.os.mac) {
                undoShortcut = 'cmd+90';
                redoShortcut = 'shift+cmd+90';
            } else if (this.editor.util.os.win) {
                undoShortcut = 'ctrl+90';
                redoShortcut = 'ctrl+89';
            } else {
                undoShortcut = 'ctrl+90';
                redoShortcut = 'shift+ctrl+90';
            }
            this.editor.inputManager.addShortcut(undoShortcut, function (e) {
                e.preventDefault();
                _this.undo();
                return false;
            });
            this.editor.inputManager.addShortcut(redoShortcut, function (e) {
                e.preventDefault();
                _this.redo();
                return false;
            });
            return this.editor.on('valuechanged', function (e, src) {
                if (src === 'undo') {
                    return;
                }
                if (_this._timer) {
                    clearTimeout(_this._timer);
                    _this._timer = null;
                }
                return _this._timer = setTimeout(function () {
                    return _this._pushUndoState();
                }, 200);
            });
        };

        UndoManager.prototype._pushUndoState = function () {
            var currentState, html;
            currentState = this.currentState();
            html = this.editor.body.html();
            if (currentState && currentState.html === html) {
                return;
            }
            this._index += 1;
            this._stack.length = this._index;
            this._stack.push({
                html: html,
                caret: this.caretPosition()
            });
            if (this._stack.length > this._capacity) {
                this._stack.shift();
                return this._index -= 1;
            }
        };

        UndoManager.prototype.currentState = function () {
            if (this._stack.length && this._index > -1) {
                return this._stack[this._index];
            } else {
                return null;
            }
        };

        UndoManager.prototype.undo = function () {
            var state;
            if (this._index < 1 || this._stack.length < 2) {
                return;
            }
            this.editor.hidePopover();
            this._index -= 1;
            state = this._stack[this._index];
            this.editor.body.html(state.html);
            this.caretPosition(state.caret);
            this.editor.body.find('.selected').removeClass('selected');
            this.editor.sync();
            this.editor.trigger('valuechanged', ['undo']);
            return this.editor.trigger('selectionchanged', ['undo']);
        };

        UndoManager.prototype.redo = function () {
            var state;
            if (this._index < 0 || this._stack.length < this._index + 2) {
                return;
            }
            this.editor.hidePopover();
            this._index += 1;
            state = this._stack[this._index];
            this.editor.body.html(state.html);
            this.caretPosition(state.caret);
            this.editor.body.find('.selected').removeClass('selected');
            this.editor.sync();
            this.editor.trigger('valuechanged', ['undo']);
            return this.editor.trigger('selectionchanged', ['undo']);
        };

        UndoManager.prototype.update = function () {
            var currentState, html;
            currentState = this.currentState();
            if (!currentState) {
                return;
            }
            html = this.editor.body.html();
            currentState.html = html;
            return currentState.caret = this.caretPosition();
        };

        UndoManager.prototype._getNodeOffset = function (node, index) {
            var $parent, merging, offset,
              _this = this;
            if (index) {
                $parent = $(node);
            } else {
                $parent = $(node).parent();
            }
            offset = 0;
            merging = false;
            $parent.contents().each(function (i, child) {
                if (index === i || node === child) {
                    return false;
                }
                if (child.nodeType === 3) {
                    if (!merging) {
                        offset += 1;
                        merging = true;
                    }
                } else {
                    offset += 1;
                    merging = false;
                }
                return null;
            });
            return offset;
        };

        UndoManager.prototype._getNodePosition = function (node, offset) {
            var position, prevNode,
              _this = this;
            if (node.nodeType === 3) {
                prevNode = node.previousSibling;
                while (prevNode && prevNode.nodeType === 3) {
                    node = prevNode;
                    offset += this.editor.util.getNodeLength(prevNode);
                    prevNode = prevNode.previousSibling;
                }
            } else {
                offset = this._getNodeOffset(node, offset);
            }
            position = [];
            position.unshift(offset);
            this.editor.util.traverseUp(function (n) {
                return position.unshift(_this._getNodeOffset(n));
            }, node);
            return position;
        };

        UndoManager.prototype._getNodeByPosition = function (position) {
            var child, childNodes, i, node, offset, _i, _len, _ref;
            node = this.editor.body[0];
            _ref = position.slice(0, position.length - 1);
            for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                offset = _ref[i];
                childNodes = node.childNodes;
                if (offset > childNodes.length - 1) {
                    if (i === position.length - 2 && $(node).is('pre')) {
                        child = document.createTextNode('');
                        node.appendChild(child);
                        childNodes = node.childNodes;
                    } else {
                        node = null;
                        break;
                    }
                }
                node = childNodes[offset];
            }
            return node;
        };

        UndoManager.prototype.caretPosition = function (caret) {
            var endContainer, endOffset, range, startContainer, startOffset;
            if (!caret) {
                range = this.editor.selection.getRange();
                if (!(this.editor.inputManager.focused && (range != null))) {
                    return {};
                }
                caret = {
                    start: [],
                    end: null,
                    collapsed: true
                };
                caret.start = this._getNodePosition(range.startContainer, range.startOffset);
                if (!range.collapsed) {
                    caret.end = this._getNodePosition(range.endContainer, range.endOffset);
                    caret.collapsed = false;
                }
                return caret;
            } else {
                if (!this.editor.inputManager.focused) {
                    this.editor.body.focus();
                }
                if (!caret.start) {
                    this.editor.body.blur();
                    return;
                }
                startContainer = this._getNodeByPosition(caret.start);
                startOffset = caret.start[caret.start.length - 1];
                if (caret.collapsed) {
                    endContainer = startContainer;
                    endOffset = startOffset;
                } else {
                    endContainer = this._getNodeByPosition(caret.end);
                    endOffset = caret.start[caret.start.length - 1];
                }
                if (!startContainer || !endContainer) {
                    throw new Error('simditor: invalid caret state');
                    return;
                }
                range = document.createRange();
                range.setStart(startContainer, startOffset);
                range.setEnd(endContainer, endOffset);
                return this.editor.selection.selectRange(range);
            }
        };

        return UndoManager;

    })(Plugin);

    Util = (function (_super) {
        __extends(Util, _super);

        Util.className = 'Util';

        function Util() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            Util.__super__.constructor.apply(this, args);
            if (this.browser.msie && this.browser.version < 11) {
                this.phBr = '';
            }
            this.editor = this.widget;
        }

        Util.prototype._init = function () { };

        Util.prototype.phBr = '<br/>';

        Util.prototype.os = (function () {
            if (/Mac/.test(navigator.appVersion)) {
                return {
                    mac: true
                };
            } else if (/Linux/.test(navigator.appVersion)) {
                return {
                    linux: true
                };
            } else if (/Win/.test(navigator.appVersion)) {
                return {
                    win: true
                };
            } else if (/X11/.test(navigator.appVersion)) {
                return {
                    unix: true
                };
            } else {
                return {};
            }
        })();

        Util.prototype.browser = (function () {
            var chrome, firefox, ie, safari, ua;
            ua = navigator.userAgent;
            ie = /(msie|trident)/i.test(ua);
            chrome = /chrome|crios/i.test(ua);
            safari = /safari/i.test(ua) && !chrome;
            firefox = /firefox/i.test(ua);
            if (ie) {
                return {
                    msie: true,
                    version: ua.match(/(msie |rv:)(\d+(\.\d+)?)/i)[2]
                };
            } else if (chrome) {
                return {
                    webkit: true,
                    chrome: true,
                    version: ua.match(/(?:chrome|crios)\/(\d+(\.\d+)?)/i)[1]
                };
            } else if (safari) {
                return {
                    webkit: true,
                    safari: true,
                    version: ua.match(/version\/(\d+(\.\d+)?)/i)[1]
                };
            } else if (firefox) {
                return {
                    mozilla: true,
                    firefox: true,
                    version: ua.match(/firefox\/(\d+(\.\d+)?)/i)[1]
                };
            } else {
                return {};
            }
        })();

        Util.prototype.metaKey = function (e) {
            var isMac;
            isMac = /Mac/.test(navigator.userAgent);
            if (isMac) {
                return e.metaKey;
            } else {
                return e.ctrlKey;
            }
        };

        Util.prototype.isEmptyNode = function (node) {
            var $node;
            $node = $(node);
            return $node.is(':empty') || (!$node.text() && !$node.find(':not(br, span, div)').length);
        };

        Util.prototype.isBlockNode = function (node) {
            node = $(node)[0];
            if (!node || node.nodeType === 3) {
                return false;
            }
            return /^(div|p|ul|ol|li|blockquote|hr|pre|h1|h2|h3|h4|table)$/.test(node.nodeName.toLowerCase());
        };

        Util.prototype.closestBlockEl = function (node) {
            var $node, blockEl, range,
              _this = this;
            if (node == null) {
                range = this.editor.selection.getRange();
                node = range != null ? range.commonAncestorContainer : void 0;
            }
            $node = $(node);
            if (!$node.length) {
                return null;
            }
            blockEl = $node.parentsUntil(this.editor.body).addBack();
            blockEl = blockEl.filter(function (i) {
                return _this.isBlockNode(blockEl.eq(i));
            });
            if (blockEl.length) {
                return blockEl.last();
            } else {
                return null;
            }
        };

        Util.prototype.furthestNode = function (node, filter) {
            var $node, blockEl, range,
              _this = this;
            if (node == null) {
                range = this.editor.selection.getRange();
                node = range != null ? range.commonAncestorContainer : void 0;
            }
            $node = $(node);
            if (!$node.length) {
                return null;
            }
            blockEl = $node.parentsUntil(this.editor.body).addBack();
            blockEl = blockEl.filter(function (i) {
                var $n;
                $n = blockEl.eq(i);
                if ($.isFunction(filter)) {
                    return filter($n);
                } else {
                    return $n.is(filter);
                }
            });
            if (blockEl.length) {
                return blockEl.first();
            } else {
                return null;
            }
        };

        Util.prototype.furthestBlockEl = function (node) {
            return this.furthestNode(node, this.isBlockNode);
        };

        Util.prototype.getNodeLength = function (node) {
            switch (node.nodeType) {
                case 7:
                case 10:
                    return 0;
                case 3:
                case 8:
                    return node.length;
                default:
                    return node.childNodes.length;
            }
        };

        Util.prototype.traverseUp = function (callback, node) {
            var n, nodes, range, result, _i, _len, _results;
            if (node == null) {
                range = this.editor.selection.getRange();
                node = range != null ? range.commonAncestorContainer : void 0;
            }
            if ((node == null) || !$.contains(this.editor.body[0], node)) {
                return false;
            }
            nodes = $(node).parentsUntil(this.editor.body).get();
            nodes.unshift(node);
            _results = [];
            for (_i = 0, _len = nodes.length; _i < _len; _i++) {
                n = nodes[_i];
                result = callback(n);
                if (result === false) {
                    break;
                } else {
                    _results.push(void 0);
                }
            }
            return _results;
        };

        Util.prototype.getShortcutKey = function (e) {
            var shortcutName;
            shortcutName = [];
            if (e.shiftKey) {
                shortcutName.push('shift');
            }
            if (e.ctrlKey) {
                shortcutName.push('ctrl');
            }
            if (e.altKey) {
                shortcutName.push('alt');
            }
            if (e.metaKey) {
                shortcutName.push('cmd');
            }
            shortcutName.push(e.which);
            return shortcutName.join('+');
        };

        Util.prototype.indent = function () {
            var $blockEl, $childList, $nextTd, $parentLi, $td, indentLevel, range, spaceNode, tagName, _ref;
            $blockEl = this.editor.util.closestBlockEl();
            if (!($blockEl && $blockEl.length > 0)) {
                return false;
            }
            if ($blockEl.is('pre')) {
                spaceNode = document.createTextNode('\u00A0\u00A0');
                this.editor.selection.insertNode(spaceNode);
            } else if ($blockEl.is('li')) {
                $parentLi = $blockEl.prev('li');
                if ($parentLi.length < 1) {
                    return false;
                }
                this.editor.selection.save();
                tagName = $blockEl.parent()[0].tagName;
                $childList = $parentLi.children('ul, ol');
                if ($childList.length > 0) {
                    $childList.append($blockEl);
                } else {
                    $('<' + tagName + '/>').append($blockEl).appendTo($parentLi);
                }
                this.editor.selection.restore();
            } else if ($blockEl.is('p, h1, h2, h3, h4')) {
                indentLevel = (_ref = $blockEl.attr('data-indent')) != null ? _ref : 0;
                indentLevel = indentLevel * 1 + 1;
                if (indentLevel > 10) {
                    indentLevel = 10;
                }
                $blockEl.attr('data-indent', indentLevel);
            } else if ($blockEl.is('table')) {
                range = this.editor.selection.getRange();
                $td = $(range.commonAncestorContainer).closest('td');
                $nextTd = $td.next('td');
                if (!($nextTd.length > 0)) {
                    $nextTd = $td.parent('tr').next('tr').find('td:first');
                }
                if (!($td.length > 0 && $nextTd.length > 0)) {
                    return false;
                }
                this.editor.selection.setRangeAtEndOf($nextTd);
            } else {
                spaceNode = document.createTextNode('\u00A0\u00A0\u00A0\u00A0');
                this.editor.selection.insertNode(spaceNode);
            }
            this.editor.trigger('valuechanged');
            this.editor.trigger('selectionchanged');
            return true;
        };

        Util.prototype.outdent = function () {
            var $blockEl, $parent, $parentLi, $prevTd, $td, button, indentLevel, range, _ref;
            $blockEl = this.editor.util.closestBlockEl();
            if (!($blockEl && $blockEl.length > 0)) {
                return false;
            }
            if ($blockEl.is('pre')) {
                return false;
            } else if ($blockEl.is('li')) {
                $parent = $blockEl.parent();
                $parentLi = $parent.parent('li');
                if ($parentLi.length < 1) {
                    button = this.editor.toolbar.findButton($parent[0].tagName.toLowerCase());
                    if (button != null) {
                        button.command();
                    }
                    return false;
                }
                this.editor.selection.save();
                if ($blockEl.next('li').length > 0) {
                    $('<' + $parent[0].tagName + '/>').append($blockEl.nextAll('li')).appendTo($blockEl);
                }
                $blockEl.insertAfter($parentLi);
                if ($parent.children('li').length < 1) {
                    $parent.remove();
                }
                this.editor.selection.restore();
            } else if ($blockEl.is('p, h1, h2, h3, h4')) {
                indentLevel = (_ref = $blockEl.attr('data-indent')) != null ? _ref : 0;
                indentLevel = indentLevel * 1 - 1;
                if (indentLevel < 0) {
                    indentLevel = 0;
                }
                $blockEl.attr('data-indent', indentLevel);
            } else if ($blockEl.is('table')) {
                range = this.editor.selection.getRange();
                $td = $(range.commonAncestorContainer).closest('td');
                $prevTd = $td.prev('td');
                if (!($prevTd.length > 0)) {
                    $prevTd = $td.parent('tr').prev('tr').find('td:last');
                }
                if (!($td.length > 0 && $prevTd.length > 0)) {
                    return false;
                }
                this.editor.selection.setRangeAtEndOf($prevTd);
            } else {
                return false;
            }
            this.editor.trigger('valuechanged');
            this.editor.trigger('selectionchanged');
            return true;
        };

        Util.prototype.dataURLtoBlob = function (dataURL) {
            var BlobBuilder, arrayBuffer, bb, byteString, hasArrayBufferViewSupport, hasBlobConstructor, i, intArray, mimeString, _i, _ref;
            hasBlobConstructor = window.Blob && (function () {
                var e;
                try {
                    return Boolean(new Blob());
                } catch (_error) {
                    e = _error;
                    return false;
                }
            })();
            hasArrayBufferViewSupport = hasBlobConstructor && window.Uint8Array && (function () {
                var e;
                try {
                    return new Blob([new Uint8Array(100)]).size === 100;
                } catch (_error) {
                    e = _error;
                    return false;
                }
            })();
            BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            if (!((hasBlobConstructor || BlobBuilder) && window.atob && window.ArrayBuffer && window.Uint8Array)) {
                return false;
            }
            if (dataURL.split(',')[0].indexOf('base64') >= 0) {
                byteString = atob(dataURL.split(',')[1]);
            } else {
                byteString = decodeURIComponent(dataURL.split(',')[1]);
            }
            arrayBuffer = new ArrayBuffer(byteString.length);
            intArray = new Uint8Array(arrayBuffer);
            for (i = _i = 0, _ref = byteString.length; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
                intArray[i] = byteString.charCodeAt(i);
            }
            mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
            if (hasBlobConstructor) {
                return new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], {
                    type: mimeString
                });
            }
            bb = new BlobBuilder();
            bb.append(arrayBuffer);
            return bb.getBlob(mimeString);
        };

        return Util;

    })(Plugin);

    Toolbar = (function (_super) {
        __extends(Toolbar, _super);

        Toolbar.className = 'Toolbar';

        Toolbar.prototype.opts = {
            toolbar: true,
            toolbarFloat: true
        };

        Toolbar.prototype._tpl = {
            wrapper: '<div class="simditor-toolbar"><ul></ul></div>',
            separator: '<li><span class="separator"></span></li>'
        };

        function Toolbar() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            Toolbar.__super__.constructor.apply(this, args);
            this.editor = this.widget;
        }

        Toolbar.prototype._init = function () {
            var _this = this;
            if (!this.opts.toolbar) {
                return;
            }
            if (!$.isArray(this.opts.toolbar)) {
                this.opts.toolbar = ['bold', 'italic', 'underline', 'strikethrough', '|', 'ol', 'ul', 'blockquote', 'code', '|', 'link', 'image', '|', 'indent', 'outdent'];
            }
            this._render();
            this.list.on('click', function (e) {
                return false;
            });
            this.wrapper.on('mousedown', function (e) {
                return _this.list.find('.menu-on').removeClass('.menu-on');
            });
            $(document).on('mousedown.simditor', function (e) {
                return _this.list.find('.menu-on').removeClass('.menu-on');
            });
            if (this.opts.toolbarFloat) {
                this.wrapper.width(this.wrapper.outerWidth());
                this.wrapper.css('left', this.wrapper.offset().left);
                $(window).on('scroll.simditor-' + this.editor.id, function (e) {
                    var bottomEdge, scrollTop, topEdge;
                    topEdge = _this.editor.wrapper.offset().top;
                    bottomEdge = topEdge + _this.editor.wrapper.outerHeight() - 80;
                    scrollTop = $(document).scrollTop();
                    if (scrollTop <= topEdge || scrollTop >= bottomEdge) {
                        return _this.editor.wrapper.removeClass('toolbar-floating');
                    } else {
                        return _this.editor.wrapper.addClass('toolbar-floating');
                    }
                });
            }
            this.editor.on('selectionchanged focus', function () {
                return _this.toolbarStatus();
            });
            this.editor.on('destroy', function () {
                return _this.buttons.length = 0;
            });
            return $(document).on('mousedown.simditor-' + this.editor.id, function (e) {
                return _this.list.find('li.menu-on').removeClass('menu-on');
            });
        };

        Toolbar.prototype._render = function () {
            var name, _i, _len, _ref, _results;
            this.buttons = [];
            this.wrapper = $(this._tpl.wrapper).prependTo(this.editor.wrapper);
            this.list = this.wrapper.find('ul');
            _ref = this.opts.toolbar;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                name = _ref[_i];
                if (name === '|') {
                    $(this._tpl.separator).appendTo(this.list);
                    continue;
                }
                if (!this.constructor.buttons[name]) {
                    throw new Error('simditor: invalid toolbar button "' + name + '"');
                    continue;
                }
                _results.push(this.buttons.push(new this.constructor.buttons[name](this.editor)));
            }
            return _results;
        };

        Toolbar.prototype.toolbarStatus = function (name) {
            var buttons,
              _this = this;
            if (!this.editor.inputManager.focused) {
                return;
            }
            buttons = this.buttons.slice(0);
            return this.editor.util.traverseUp(function (node) {
                var button, i, removeButtons, _i, _j, _len, _len1;
                removeButtons = [];
                for (i = _i = 0, _len = buttons.length; _i < _len; i = ++_i) {
                    button = buttons[i];
                    if ((name != null) && button.name !== name) {
                        continue;
                    }
                    if (!button.status || button.status($(node)) === true) {
                        removeButtons.push(button);
                    }
                }
                for (_j = 0, _len1 = removeButtons.length; _j < _len1; _j++) {
                    button = removeButtons[_j];
                    i = $.inArray(button, buttons);
                    buttons.splice(i, 1);
                }
                if (buttons.length === 0) {
                    return false;
                }
            });
        };

        Toolbar.prototype.findButton = function (name) {
            var button;
            button = this.list.find('.toolbar-item-' + name).data('button');
            return button != null ? button : null;
        };

        Toolbar.addButton = function (btn) {
            return this.buttons[btn.prototype.name] = btn;
        };

        Toolbar.buttons = {};

        return Toolbar;

    })(Plugin);

    Simditor = (function (_super) {
        __extends(Simditor, _super);

        function Simditor() {
            _ref = Simditor.__super__.constructor.apply(this, arguments);
            return _ref;
        }

        Simditor.connect(Util);

        Simditor.connect(UndoManager);

        Simditor.connect(InputManager);

        Simditor.connect(Keystroke);

        Simditor.connect(Formatter);

        Simditor.connect(Selection);

        Simditor.connect(Toolbar);

        Simditor.count = 0;

        Simditor.prototype.opts = {
            textarea: null,
            placeholder: '',
            defaultImage: 'images/image.png',
            params: {},
            upload: false,
            tabIndent: true
        };

        Simditor.prototype._init = function () {
            var editor, form, uploadOpts, _ref1,
              _this = this;
            this.textarea = $(this.opts.textarea);
            this.opts.placeholder = (_ref1 = this.opts.placeholder) != null ? _ref1 : this.textarea.attr('placeholder');
            if (!this.textarea.length) {
                throw new Error('simditor: param textarea is required.');
                return;
            }
            editor = this.textarea.data('simditor');
            if (editor != null) {
                editor.destroy();
            }
            this.id = ++Simditor.count;
            this._render();
            if (this.opts.upload && (typeof simple !== "undefined" && simple !== null ? simple.uploader : void 0)) {
                uploadOpts = typeof this.opts.upload === 'object' ? this.opts.upload : {};
                this.uploader = simple.uploader(uploadOpts);
            }
            form = this.textarea.closest('form');
            if (form.length) {
                form.on('submit.simditor-' + this.id, function () {
                    return _this.sync();
                });
                form.on('reset.simditor-' + this.id, function () {
                    return _this.setValue('');
                });
            }
            this.on('pluginconnected', function () {
                _this.setValue(_this.textarea.val() || '');
                if (_this.opts.placeholder) {
                    _this.on('valuechanged', function () {
                        return _this._placeholder();
                    });
                }
                return setTimeout(function () {
                    return _this.trigger('valuechanged');
                }, 0);
            });
            if (this.util.browser.mozilla) {
                document.execCommand("enableObjectResizing", false, false);
                return document.execCommand("enableInlineTableEditing", false, false);
            }
        };

        Simditor.prototype._tpl = "<div class=\"simditor\">\n  <div class=\"simditor-wrapper\">\n    <div class=\"simditor-placeholder\"></div>\n    <div class=\"simditor-body\" contenteditable=\"true\">\n    </div>\n  </div>\n</div>";

        Simditor.prototype._render = function () {
            var key, val, _ref1, _results;
            this.el = $(this._tpl).insertBefore(this.textarea);
            this.wrapper = this.el.find('.simditor-wrapper');
            this.body = this.wrapper.find('.simditor-body');
            this.placeholderEl = this.wrapper.find('.simditor-placeholder').append(this.opts.placeholder);
            this.el.append(this.textarea).data('simditor', this);
            this.textarea.data('simditor', this).hide().blur();
            this.body.attr('tabindex', this.textarea.attr('tabindex'));
            if (this.util.os.mac) {
                this.el.addClass('simditor-mac');
            } else if (this.util.os.linux) {
                this.el.addClass('simditor-linux');
            }
            if (this.opts.params) {
                _ref1 = this.opts.params;
                _results = [];
                for (key in _ref1) {
                    val = _ref1[key];
                    _results.push($('<input/>', {
                        type: 'hidden',
                        name: key,
                        value: val
                    }).insertAfter(this.textarea));
                }
                return _results;
            }
        };

        Simditor.prototype._placeholder = function () {
            var children, _ref1;
            children = this.body.children();
            if (children.length === 0 || (children.length === 1 && this.util.isEmptyNode(children) && ((_ref1 = children.data('indent')) != null ? _ref1 : 0) < 1)) {
                return this.placeholderEl.show();
            } else {
                return this.placeholderEl.hide();
            }
        };

        Simditor.prototype.setValue = function (val) {
            this.hidePopover();
            this.textarea.val(val);
            this.body.html(val);
            this.formatter.format();
            return this.formatter.decorate();
        };

        Simditor.prototype.getValue = function () {
            return this.sync();
        };

        Simditor.prototype.sync = function () {
            var children, cloneBody, emptyP, firstP, lastP, val;
            this.hidePopover;
            cloneBody = this.body.clone();
            this.formatter.undecorate(cloneBody);
            this.formatter.format(cloneBody);
            this.formatter.autolink(cloneBody);
            children = cloneBody.children();
            lastP = children.last('p');
            firstP = children.first('p');
            while (lastP.is('p') && this.util.isEmptyNode(lastP)) {
                emptyP = lastP;
                lastP = lastP.prev('p');
                emptyP.remove();
            }
            while (firstP.is('p') && this.util.isEmptyNode(firstP)) {
                emptyP = firstP;
                firstP = lastP.next('p');
                emptyP.remove();
            }
            cloneBody.find('img.uploading').remove();
            val = $.trim(cloneBody.html());
            this.textarea.val(val);
            return val;
        };

        Simditor.prototype.focus = function () {
            var $blockEl, range;
            $blockEl = this.body.find('p, li, pre, h1, h2, h3, h4, td').first();
            if (!($blockEl.length > 0)) {
                return;
            }
            range = document.createRange();
            this.selection.setRangeAtStartOf($blockEl, range);
            return this.body.focus();
        };

        Simditor.prototype.blur = function () {
            return this.body.blur();
        };

        Simditor.prototype.hidePopover = function () {
            var _this = this;
            return this.wrapper.find('.simditor-popover').each(function (i, popover) {
                popover = $(popover).data('popover');
                if (popover.active) {
                    return popover.hide();
                }
            });
        };

        Simditor.prototype.destroy = function () {
            this.triggerHandler('destroy');
            this.textarea.closest('form').off('.simditor .simditor-' + this.id);
            this.selection.clear();
            this.textarea.insertBefore(this.el).hide().val('').removeData('simditor');
            this.el.remove();
            $(document).off('.simditor-' + this.id);
            $(window).off('.simditor-' + this.id);
            return this.off();
        };

        return Simditor;

    })(Widget);

    window.Simditor = Simditor;

    TestPlugin = (function (_super) {
        __extends(TestPlugin, _super);

        function TestPlugin() {
            _ref1 = TestPlugin.__super__.constructor.apply(this, arguments);
            return _ref1;
        }

        return TestPlugin;

    })(Plugin);

    Test = (function (_super) {
        __extends(Test, _super);

        function Test() {
            _ref2 = Test.__super__.constructor.apply(this, arguments);
            return _ref2;
        }

        Test.connect(TestPlugin);

        return Test;

    })(Widget);

    Button = (function (_super) {
        __extends(Button, _super);

        Button.prototype._tpl = {
            item: '<li><a tabindex="-1" unselectable="on" class="toolbar-item" href="javascript:;"><span></span></a></li>',
            menuWrapper: '<div class="toolbar-menu"></div>',
            menuItem: '<li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;"><span></span></a></li>',
            separator: '<li><span class="separator"></span></li>'
        };

        Button.prototype.name = '';

        Button.prototype.icon = '';

        Button.prototype.title = '';

        Button.prototype.text = '';

        Button.prototype.htmlTag = '';

        Button.prototype.disableTag = '';

        Button.prototype.menu = false;

        Button.prototype.active = false;

        Button.prototype.disabled = false;

        Button.prototype.needFocus = true;

        Button.prototype.shortcut = null;

        function Button(editor) {
            var tag, _i, _len, _ref3,
              _this = this;
            this.editor = editor;
            this.render();
            this.el.on('mousedown', function (e) {
                var exceed, param;
                e.preventDefault();
                if (_this.menu) {
                    _this.wrapper.toggleClass('menu-on').siblings('li').removeClass('menu-on');
                    if (_this.wrapper.is('.menu-on')) {
                        exceed = _this.menuWrapper.offset().left + _this.menuWrapper.outerWidth() + 5 - _this.editor.wrapper.offset().left - _this.editor.wrapper.outerWidth();
                        if (exceed > 0) {
                            _this.menuWrapper.css({
                                'left': 'auto',
                                'right': 0
                            });
                        }
                    }
                    return false;
                }
                if (_this.el.hasClass('disabled') || (_this.needFocus && !_this.editor.inputManager.focused)) {
                    return false;
                }
                param = _this.el.data('param');
                _this.command(param);
                return false;
            });
            this.wrapper.on('click', 'a.menu-item', function (e) {
                var btn, param;
                e.preventDefault();
                btn = $(e.currentTarget);
                _this.wrapper.removeClass('menu-on');
                if (btn.hasClass('disabled') || (_this.needFocus && !_this.editor.inputManager.focused)) {
                    return false;
                }
                _this.editor.toolbar.wrapper.removeClass('menu-on');
                param = btn.data('param');
                _this.command(param);
                return false;
            });
            this.wrapper.on('mousedown', 'a.menu-item', function (e) {
                return false;
            });
            this.editor.on('blur', function () {
                _this.setActive(false);
                return _this.setDisabled(false);
            });
            if (this.shortcut != null) {
                this.editor.inputManager.addShortcut(this.shortcut, function (e) {
                    _this.el.mousedown();
                    return false;
                });
            }
            _ref3 = this.htmlTag.split(',');
            for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
                tag = _ref3[_i];
                tag = $.trim(tag);
                if (tag && $.inArray(tag, this.editor.formatter._allowedTags) < 0) {
                    this.editor.formatter._allowedTags.push(tag);
                }
            }
        }

        Button.prototype.render = function () {
            this.wrapper = $(this._tpl.item).appendTo(this.editor.toolbar.list);
            this.el = this.wrapper.find('a.toolbar-item');
            this.el.attr('title', this.title).addClass('toolbar-item-' + this.name).data('button', this);
            this.el.find('span').addClass(this.icon ? 'fa fa-' + this.icon : '').text(this.text);
            if (!this.menu) {
                return;
            }
            this.menuWrapper = $(this._tpl.menuWrapper).appendTo(this.wrapper);
            this.menuWrapper.addClass('toolbar-menu-' + this.name);
            return this.renderMenu();
        };

        Button.prototype.renderMenu = function () {
            var $menuBtntnEl, $menuItemEl, menuItem, _i, _len, _ref3, _ref4, _results;
            if (!$.isArray(this.menu)) {
                return;
            }
            this.menuEl = $('<ul/>').appendTo(this.menuWrapper);
            _ref3 = this.menu;
            _results = [];
            for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
                menuItem = _ref3[_i];
                if (menuItem === '|') {
                    $(this._tpl.separator).appendTo(this.menuEl);
                    continue;
                }
                $menuItemEl = $(this._tpl.menuItem).appendTo(this.menuEl);
                _results.push($menuBtntnEl = $menuItemEl.find('a.menu-item').attr({
                    'title': (_ref4 = menuItem.title) != null ? _ref4 : menuItem.text,
                    'data-param': menuItem.param
                }).addClass('menu-item-' + menuItem.name).find('span').text(menuItem.text));
            }
            return _results;
        };

        Button.prototype.setActive = function (active) {
            this.active = active;
            return this.el.toggleClass('active', this.active);
        };

        Button.prototype.setDisabled = function (disabled) {
            this.disabled = disabled;
            return this.el.toggleClass('disabled', this.disabled);
        };

        Button.prototype.status = function ($node) {
            if ($node != null) {
                this.setDisabled($node.is(this.disableTag));
            }
            if (this.disabled) {
                return true;
            }
            if ($node != null) {
                this.setActive($node.is(this.htmlTag));
            }
            return this.active;
        };

        Button.prototype.command = function (param) { };

        return Button;

    })(Module);

    window.SimditorButton = Button;

    Popover = (function (_super) {
        __extends(Popover, _super);

        Popover.prototype.offset = {
            top: 4,
            left: 0
        };

        Popover.prototype.target = null;

        Popover.prototype.active = false;

        function Popover(editor) {
            var _this = this;
            this.editor = editor;
            this.el = $('<div class="simditor-popover"></div>').appendTo(this.editor.wrapper).data('popover', this);
            this.render();
            this.el.on('mouseenter', function (e) {
                return _this.el.addClass('hover');
            });
            this.el.on('mouseleave', function (e) {
                return _this.el.removeClass('hover');
            });
        }

        Popover.prototype.render = function () { };

        Popover.prototype.show = function ($target, position) {
            var _this = this;
            if (position == null) {
                position = 'bottom';
            }
            if ($target == null) {
                return;
            }
            this.target = $target.addClass('selected');
            this.el.siblings('.simditor-popover').each(function (i, el) {
                var popover;
                popover = $(el).data('popover');
                return popover.hide();
            });
            if (this.active) {
                this.refresh(position);
                return this.trigger('popovershow');
            } else {
                this.active = true;
                this.el.css({
                    left: -9999
                }).show();
                return setTimeout(function () {
                    _this.refresh(position);
                    return _this.trigger('popovershow');
                }, 0);
            }
        };

        Popover.prototype.hide = function () {
            if (!this.active) {
                return;
            }
            if (this.target) {
                this.target.removeClass('selected');
            }
            this.target = null;
            this.active = false;
            this.el.hide();
            return this.trigger('popoverhide');
        };

        Popover.prototype.refresh = function (position) {
            var left, targetH, targetOffset, top, wrapperOffset;
            if (position == null) {
                position = 'bottom';
            }
            wrapperOffset = this.editor.wrapper.offset();
            targetOffset = this.target.offset();
            targetH = this.target.outerHeight();
            if (position === 'bottom') {
                top = targetOffset.top - wrapperOffset.top + targetH;
            } else if (position === 'top') {
                top = targetOffset.top - wrapperOffset.top - this.el.height();
            }
            left = Math.min(targetOffset.left - wrapperOffset.left, this.editor.wrapper.width() - this.el.outerWidth() - 10);
            return this.el.css({
                top: top + this.offset.top,
                left: left + this.offset.left
            });
        };

        Popover.prototype.destroy = function () {
            this.target = null;
            this.active = false;
            this.editor.off('.linkpopover');
            return this.el.remove();
        };

        return Popover;

    })(Module);

    window.SimditorPopover = Popover;

    TitleButton = (function (_super) {
        __extends(TitleButton, _super);

        function TitleButton() {
            _ref3 = TitleButton.__super__.constructor.apply(this, arguments);
            return _ref3;
        }

        TitleButton.prototype.name = 'title';

        TitleButton.prototype.title = '标题文字';

        TitleButton.prototype.htmlTag = 'h1, h2, h3, h4';

        TitleButton.prototype.disableTag = 'pre, table';

        TitleButton.prototype.menu = [
          {
              name: 'normal',
              text: '普通文本',
              param: 'p'
          }, '|', {
              name: 'h1',
              text: '标题 1',
              param: 'h1'
          }, {
              name: 'h2',
              text: '标题 2',
              param: 'h2'
          }, {
              name: 'h3',
              text: '标题 3',
              param: 'h3'
          }
        ];

        TitleButton.prototype.setActive = function (active, param) {
            this.active = active;
            if (active) {
                return this.el.addClass('active active-' + param);
            } else {
                return this.el.removeClass('active active-p active-h1 active-h2 active-h3');
            }
        };

        TitleButton.prototype.status = function ($node) {
            var param, _ref4;
            if ($node != null) {
                this.setDisabled($node.is(this.disableTag));
            }
            if (this.disabled) {
                return true;
            }
            if ($node != null) {
                param = (_ref4 = $node[0].tagName) != null ? _ref4.toLowerCase() : void 0;
                this.setActive($node.is(this.htmlTag), param);
            }
            return this.active;
        };

        TitleButton.prototype.command = function (param) {
            var $contents, $endBlock, $startBlock, endNode, node, range, results, startNode, _i, _len, _ref4,
              _this = this;
            range = this.editor.selection.getRange();
            startNode = range.startContainer;
            endNode = range.endContainer;
            $startBlock = this.editor.util.closestBlockEl(startNode);
            $endBlock = this.editor.util.closestBlockEl(endNode);
            this.editor.selection.save();
            range.setStartBefore($startBlock[0]);
            range.setEndAfter($endBlock[0]);
            $contents = $(range.extractContents());
            results = [];
            $contents.children().each(function (i, el) {
                var c, converted, _i, _len, _results;
                converted = _this._convertEl(el, param);
                _results = [];
                for (_i = 0, _len = converted.length; _i < _len; _i++) {
                    c = converted[_i];
                    _results.push(results.push(c));
                }
                return _results;
            });
            _ref4 = results.reverse();
            for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
                node = _ref4[_i];
                range.insertNode(node[0]);
            }
            this.editor.selection.restore();
            this.editor.trigger('valuechanged');
            return this.editor.trigger('selectionchanged');
        };

        TitleButton.prototype._convertEl = function (el, param) {
            var $block, $el, results;
            $el = $(el);
            results = [];
            if ($el.is(param)) {
                results.push($el);
            } else {
                $block = $('<' + param + '/>').append($el.contents());
                results.push($block);
            }
            return results;
        };

        return TitleButton;

    })(Button);

    Simditor.Toolbar.addButton(TitleButton);

    BoldButton = (function (_super) {
        __extends(BoldButton, _super);

        function BoldButton() {
            _ref4 = BoldButton.__super__.constructor.apply(this, arguments);
            return _ref4;
        }

        BoldButton.prototype.name = 'bold';

        BoldButton.prototype.icon = 'bold';

        BoldButton.prototype.title = '加粗文字';

        BoldButton.prototype.htmlTag = 'b, strong';

        BoldButton.prototype.disableTag = 'pre';

        BoldButton.prototype.shortcut = 'cmd+66';

        BoldButton.prototype.render = function () {
            if (this.editor.util.os.mac) {
                this.title = this.title + ' ( Cmd + b )';
            } else {
                this.title = this.title + ' ( Ctrl + b )';
                this.shortcut = 'ctrl+66';
            }
            return BoldButton.__super__.render.call(this);
        };

        BoldButton.prototype.status = function ($node) {
            var active;
            if ($node != null) {
                this.setDisabled($node.is(this.disableTag));
            }
            if (this.disabled) {
                return true;
            }
            active = document.queryCommandState('bold') === true;
            this.setActive(active);
            return active;
        };

        BoldButton.prototype.command = function () {
            document.execCommand('bold');
            this.editor.trigger('valuechanged');
            return this.editor.trigger('selectionchanged');
        };

        return BoldButton;

    })(Button);

    Simditor.Toolbar.addButton(BoldButton);

    ItalicButton = (function (_super) {
        __extends(ItalicButton, _super);

        function ItalicButton() {
            _ref5 = ItalicButton.__super__.constructor.apply(this, arguments);
            return _ref5;
        }

        ItalicButton.prototype.name = 'italic';

        ItalicButton.prototype.icon = 'italic';

        ItalicButton.prototype.title = '斜体文字';

        ItalicButton.prototype.htmlTag = 'i';

        ItalicButton.prototype.disableTag = 'pre';

        ItalicButton.prototype.shortcut = 'cmd+73';

        ItalicButton.prototype.render = function () {
            if (this.editor.util.os.mac) {
                this.title = this.title + ' ( Cmd + i )';
            } else {
                this.title = this.title + ' ( Ctrl + i )';
                this.shortcut = 'ctrl+73';
            }
            return ItalicButton.__super__.render.call(this);
        };

        ItalicButton.prototype.status = function ($node) {
            var active;
            if ($node != null) {
                this.setDisabled($node.is(this.disableTag));
            }
            if (this.disabled) {
                return this.disabled;
            }
            active = document.queryCommandState('italic') === true;
            this.setActive(active);
            return active;
        };

        ItalicButton.prototype.command = function () {
            document.execCommand('italic');
            this.editor.trigger('valuechanged');
            return this.editor.trigger('selectionchanged');
        };

        return ItalicButton;

    })(Button);

    Simditor.Toolbar.addButton(ItalicButton);

    UnderlineButton = (function (_super) {
        __extends(UnderlineButton, _super);

        function UnderlineButton() {
            _ref6 = UnderlineButton.__super__.constructor.apply(this, arguments);
            return _ref6;
        }

        UnderlineButton.prototype.name = 'underline';

        UnderlineButton.prototype.icon = 'underline';

        UnderlineButton.prototype.title = '下划线文字';

        UnderlineButton.prototype.htmlTag = 'u';

        UnderlineButton.prototype.disableTag = 'pre';

        UnderlineButton.prototype.shortcut = 'cmd+85';

        UnderlineButton.prototype.render = function () {
            if (this.editor.util.os.mac) {
                this.title = this.title + ' ( Cmd + u )';
            } else {
                this.title = this.title + ' ( Ctrl + u )';
                this.shortcut = 'ctrl+85';
            }
            return UnderlineButton.__super__.render.call(this);
        };

        UnderlineButton.prototype.status = function ($node) {
            var active;
            if ($node != null) {
                this.setDisabled($node.is(this.disableTag));
            }
            if (this.disabled) {
                return this.disabled;
            }
            active = document.queryCommandState('underline') === true;
            this.setActive(active);
            return active;
        };

        UnderlineButton.prototype.command = function () {
            document.execCommand('underline');
            this.editor.trigger('valuechanged');
            return this.editor.trigger('selectionchanged');
        };

        return UnderlineButton;

    })(Button);

    Simditor.Toolbar.addButton(UnderlineButton);

    ListButton = (function (_super) {
        __extends(ListButton, _super);

        function ListButton() {
            _ref7 = ListButton.__super__.constructor.apply(this, arguments);
            return _ref7;
        }

        ListButton.prototype.type = '';

        ListButton.prototype.disableTag = 'pre, table';

        ListButton.prototype.status = function ($node) {
            var anotherType;
            if ($node != null) {
                this.setDisabled($node.is(this.disableTag));
            }
            if (this.disabled) {
                return true;
            }
            if ($node == null) {
                return this.active;
            }
            anotherType = this.type === 'ul' ? 'ol' : 'ul';
            if ($node.is(anotherType)) {
                this.setActive(false);
                return true;
            } else {
                this.setActive($node.is(this.htmlTag));
                return this.active;
            }
        };

        ListButton.prototype.command = function (param) {
            var $contents, $endBlock, $furthestEnd, $furthestStart, $parent, $startBlock, endLevel, endNode, getListLevel, node, range, results, startLevel, startNode, _i, _len, _ref8,
              _this = this;
            range = this.editor.selection.getRange();
            startNode = range.startContainer;
            endNode = range.endContainer;
            $startBlock = this.editor.util.closestBlockEl(startNode);
            $endBlock = this.editor.util.closestBlockEl(endNode);
            this.editor.selection.save();
            range.setStartBefore($startBlock[0]);
            range.setEndAfter($endBlock[0]);
            if ($startBlock.is('li') && $endBlock.is('li')) {
                $furthestStart = this.editor.util.furthestNode($startBlock, 'ul, ol');
                $furthestEnd = this.editor.util.furthestNode($endBlock, 'ul, ol');
                if ($furthestStart.is($furthestEnd)) {
                    getListLevel = function ($li) {
                        var lvl;
                        lvl = 1;
                        while (!$li.parent().is($furthestStart)) {
                            lvl += 1;
                            $li = $li.parent();
                        }
                        return lvl;
                    };
                    startLevel = getListLevel($startBlock);
                    endLevel = getListLevel($endBlock);
                    if (startLevel > endLevel) {
                        $parent = $endBlock.parent();
                    } else {
                        $parent = $startBlock.parent();
                    }
                    range.setStartBefore($parent[0]);
                    range.setEndAfter($parent[0]);
                } else {
                    range.setStartBefore($furthestStart[0]);
                    range.setEndAfter($furthestEnd[0]);
                }
            }
            $contents = $(range.extractContents());
            results = [];
            $contents.children().each(function (i, el) {
                var c, converted, _i, _len, _results;
                converted = _this._convertEl(el);
                _results = [];
                for (_i = 0, _len = converted.length; _i < _len; _i++) {
                    c = converted[_i];
                    if (results.length && results[results.length - 1].is(_this.type) && c.is(_this.type)) {
                        _results.push(results[results.length - 1].append(c.children()));
                    } else {
                        _results.push(results.push(c));
                    }
                }
                return _results;
            });
            _ref8 = results.reverse();
            for (_i = 0, _len = _ref8.length; _i < _len; _i++) {
                node = _ref8[_i];
                range.insertNode(node[0]);
            }
            this.editor.selection.restore();
            this.editor.trigger('valuechanged');
            return this.editor.trigger('selectionchanged');
        };

        ListButton.prototype._convertEl = function (el) {
            var $el, anotherType, block, child, children, results, _i, _len, _ref8,
              _this = this;
            $el = $(el);
            results = [];
            anotherType = this.type === 'ul' ? 'ol' : 'ul';
            if ($el.is(this.type)) {
                $el.children('li').each(function (i, li) {
                    var $childList, $li, block;
                    $li = $(li);
                    $childList = $li.children('ul, ol').remove();
                    block = $('<p/>').append($(li).html() || _this.editor.util.phBr);
                    results.push(block);
                    if ($childList.length > 0) {
                        return results.push($childList);
                    }
                });
            } else if ($el.is(anotherType)) {
                block = $('<' + this.type + '/>').append($el.html());
                results.push(block);
            } else if ($el.is('blockquote')) {
                _ref8 = $el.children().get();
                for (_i = 0, _len = _ref8.length; _i < _len; _i++) {
                    child = _ref8[_i];
                    children = this._convertEl(child);
                }
                $.merge(results, children);
            } else if ($el.is('table')) {

            } else {
                block = $('<' + this.type + '><li></li></' + this.type + '>');
                block.find('li').append($el.html() || this.editor.util.phBr);
                results.push(block);
            }
            return results;
        };

        return ListButton;

    })(Button);

    OrderListButton = (function (_super) {
        __extends(OrderListButton, _super);

        function OrderListButton() {
            _ref8 = OrderListButton.__super__.constructor.apply(this, arguments);
            return _ref8;
        }

        OrderListButton.prototype.type = 'ol';

        OrderListButton.prototype.name = 'ol';

        OrderListButton.prototype.title = '有序列表';

        OrderListButton.prototype.icon = 'list-ol';

        OrderListButton.prototype.htmlTag = 'ol';

        OrderListButton.prototype.shortcut = 'cmd+191';

        OrderListButton.prototype.render = function () {
            if (this.editor.util.os.mac) {
                this.title = this.title + ' ( Cmd + / )';
            } else {
                this.title = this.title + ' ( ctrl + / )';
                this.shortcut = 'ctrl+191';
            }
            return OrderListButton.__super__.render.call(this);
        };

        return OrderListButton;

    })(ListButton);

    UnorderListButton = (function (_super) {
        __extends(UnorderListButton, _super);

        function UnorderListButton() {
            _ref9 = UnorderListButton.__super__.constructor.apply(this, arguments);
            return _ref9;
        }

        UnorderListButton.prototype.type = 'ul';

        UnorderListButton.prototype.name = 'ul';

        UnorderListButton.prototype.title = '无序列表';

        UnorderListButton.prototype.icon = 'list-ul';

        UnorderListButton.prototype.htmlTag = 'ul';

        UnorderListButton.prototype.shortcut = 'cmd+190';

        UnorderListButton.prototype.render = function () {
            if (this.editor.util.os.mac) {
                this.title = this.title + ' ( Cmd + . )';
            } else {
                this.title = this.title + ' ( Ctrl + . )';
                this.shortcut = 'ctrl+190';
            }
            return UnorderListButton.__super__.render.call(this);
        };

        return UnorderListButton;

    })(ListButton);

    Simditor.Toolbar.addButton(OrderListButton);

    Simditor.Toolbar.addButton(UnorderListButton);

    BlockquoteButton = (function (_super) {
        __extends(BlockquoteButton, _super);

        function BlockquoteButton() {
            _ref10 = BlockquoteButton.__super__.constructor.apply(this, arguments);
            return _ref10;
        }

        BlockquoteButton.prototype.name = 'blockquote';

        BlockquoteButton.prototype.icon = 'quote-left';

        BlockquoteButton.prototype.title = '引用';

        BlockquoteButton.prototype.htmlTag = 'blockquote';

        BlockquoteButton.prototype.disableTag = 'pre, table';

        BlockquoteButton.prototype.command = function () {
            var $contents, $endBlock, $startBlock, endNode, node, range, results, startNode, _i, _len, _ref11,
              _this = this;
            range = this.editor.selection.getRange();
            startNode = range.startContainer;
            endNode = range.endContainer;
            $startBlock = this.editor.util.furthestBlockEl(startNode);
            $endBlock = this.editor.util.furthestBlockEl(endNode);
            this.editor.selection.save();
            range.setStartBefore($startBlock[0]);
            range.setEndAfter($endBlock[0]);
            $contents = $(range.extractContents());
            results = [];
            $contents.children().each(function (i, el) {
                var c, converted, _i, _len, _results;
                converted = _this._convertEl(el);
                _results = [];
                for (_i = 0, _len = converted.length; _i < _len; _i++) {
                    c = converted[_i];
                    if (results.length && results[results.length - 1].is(_this.htmlTag) && c.is(_this.htmlTag)) {
                        _results.push(results[results.length - 1].append(c.children()));
                    } else {
                        _results.push(results.push(c));
                    }
                }
                return _results;
            });
            _ref11 = results.reverse();
            for (_i = 0, _len = _ref11.length; _i < _len; _i++) {
                node = _ref11[_i];
                range.insertNode(node[0]);
            }
            this.editor.selection.restore();
            this.editor.trigger('valuechanged');
            return this.editor.trigger('selectionchanged');
        };

        BlockquoteButton.prototype._convertEl = function (el) {
            var $el, block, results,
              _this = this;
            $el = $(el);
            results = [];
            if ($el.is(this.htmlTag)) {
                $el.children().each(function (i, node) {
                    return results.push($(node));
                });
            } else {
                block = $('<' + this.htmlTag + '/>').append($el);
                results.push(block);
            }
            return results;
        };

        return BlockquoteButton;

    })(Button);

    Simditor.Toolbar.addButton(BlockquoteButton);

    CodeButton = (function (_super) {
        __extends(CodeButton, _super);

        CodeButton.prototype.name = 'code';

        CodeButton.prototype.icon = 'code';

        CodeButton.prototype.title = '插入代码';

        CodeButton.prototype.htmlTag = 'pre';

        CodeButton.prototype.disableTag = 'li, table';

        function CodeButton(editor) {
            var _this = this;
            this.editor = editor;
            CodeButton.__super__.constructor.call(this, this.editor);
            this.editor.on('decorate', function (e, $el) {
                return $el.find('pre').each(function (i, pre) {
                    return _this.decorate($(pre));
                });
            });
            this.editor.on('undecorate', function (e, $el) {
                return $el.find('pre').each(function (i, pre) {
                    return _this.undecorate($(pre));
                });
            });
        }

        CodeButton.prototype.render = function () {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            CodeButton.__super__.render.apply(this, args);
            return this.popover = new CodePopover(this.editor);
        };

        CodeButton.prototype.status = function ($node) {
            var result;
            result = CodeButton.__super__.status.call(this, $node);
            if (this.active) {
                this.popover.show($node);
            } else if (this.editor.util.isBlockNode($node)) {
                this.popover.hide();
            }
            return result;
        };

        CodeButton.prototype.decorate = function ($pre) {
            var lang;
            lang = $pre.attr('data-lang');
            $pre.removeClass();
            if (lang && lang !== -1) {
                return $pre.addClass('lang-' + lang);
            }
        };

        CodeButton.prototype.undecorate = function ($pre) {
            var lang;
            lang = $pre.attr('data-lang');
            $pre.removeClass();
            if (lang && lang !== -1) {
                return $pre.addClass('lang-' + lang);
            }
        };

        CodeButton.prototype.command = function () {
            var $contents, $endBlock, $startBlock, endNode, node, range, results, startNode, _i, _len, _ref11,
              _this = this;
            range = this.editor.selection.getRange();
            startNode = range.startContainer;
            endNode = range.endContainer;
            $startBlock = this.editor.util.closestBlockEl(startNode);
            $endBlock = this.editor.util.closestBlockEl(endNode);
            range.setStartBefore($startBlock[0]);
            range.setEndAfter($endBlock[0]);
            $contents = $(range.extractContents());
            results = [];
            $contents.children().each(function (i, el) {
                var c, converted, _i, _len, _results;
                converted = _this._convertEl(el);
                _results = [];
                for (_i = 0, _len = converted.length; _i < _len; _i++) {
                    c = converted[_i];
                    if (results.length && results[results.length - 1].is(_this.htmlTag) && c.is(_this.htmlTag)) {
                        _results.push(results[results.length - 1].append(c.contents()));
                    } else {
                        _results.push(results.push(c));
                    }
                }
                return _results;
            });
            _ref11 = results.reverse();
            for (_i = 0, _len = _ref11.length; _i < _len; _i++) {
                node = _ref11[_i];
                range.insertNode(node[0]);
            }
            this.editor.selection.setRangeAtEndOf(results[0]);
            this.editor.trigger('valuechanged');
            return this.editor.trigger('selectionchanged');
        };

        CodeButton.prototype._convertEl = function (el) {
            var $el, block, codeStr, results;
            $el = $(el);
            results = [];
            if ($el.is(this.htmlTag)) {
                block = $('<p/>').append($el.html().replace('\n', '<br/>'));
                results.push(block);
            } else {
                if (!$el.text() && $el.children().length === 1 && $el.children().is('br')) {
                    codeStr = '\n';
                } else {
                    codeStr = this.editor.formatter.clearHtml($el);
                }
                block = $('<' + this.htmlTag + '/>').text(codeStr);
                results.push(block);
            }
            return results;
        };

        return CodeButton;

    })(Button);

    CodePopover = (function (_super) {
        __extends(CodePopover, _super);

        function CodePopover() {
            _ref11 = CodePopover.__super__.constructor.apply(this, arguments);
            return _ref11;
        }

        CodePopover.prototype._tpl = "<div class=\"code-settings\">\n  <div class=\"settings-field\">\n    <select class=\"select-lang\">\n      <option value=\"-1\">选择程序语言</option>\n      <option value=\"c++\">C++</option>\n      <option value=\"css\">CSS</option>\n      <option value=\"coffeeScript\">CoffeeScript</option>\n      <option value=\"html\">Html,XML</option>\n      <option value=\"json\">JSON</option>\n      <option value=\"java\">Java</option>\n      <option value=\"js\">JavaScript</option>\n      <option value=\"markdown\">Markdown</option>\n      <option value=\"oc\">Objective C</option>\n      <option value=\"php\">PHP</option>\n      <option value=\"perl\">Perl</option>\n      <option value=\"python\">Python</option>\n      <option value=\"ruby\">Ruby</option>\n      <option value=\"sql\">SQL</option>\n    </select>\n  </div>\n</div>";

        CodePopover.prototype.render = function () {
            var _this = this;
            this.el.addClass('code-popover').append(this._tpl);
            this.selectEl = this.el.find('.select-lang');
            return this.selectEl.on('change', function (e) {
                var selected;
                _this.lang = _this.selectEl.val();
                selected = _this.target.hasClass('selected');
                _this.target.removeClass().removeAttr('data-lang');
                if (_this.lang !== -1) {
                    _this.target.addClass('lang-' + _this.lang);
                    _this.target.attr('data-lang', _this.lang);
                }
                if (selected) {
                    return _this.target.addClass('selected');
                }
            });
        };

        CodePopover.prototype.show = function () {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            CodePopover.__super__.show.apply(this, args);
            this.lang = this.target.attr('data-lang');
            if (this.lang != null) {
                return this.selectEl.val(this.lang);
            }
        };

        return CodePopover;

    })(Popover);

    Simditor.Toolbar.addButton(CodeButton);

    LinkButton = (function (_super) {
        __extends(LinkButton, _super);

        function LinkButton() {
            _ref12 = LinkButton.__super__.constructor.apply(this, arguments);
            return _ref12;
        }

        LinkButton.prototype.name = 'link';

        LinkButton.prototype.icon = 'link';

        LinkButton.prototype.title = '插入链接';

        LinkButton.prototype.htmlTag = 'a';

        LinkButton.prototype.disableTag = 'pre';

        LinkButton.prototype.render = function () {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            LinkButton.__super__.render.apply(this, args);
            return this.popover = new LinkPopover(this.editor);
        };

        LinkButton.prototype.status = function ($node) {
            var showPopover;
            if ($node != null) {
                this.setDisabled($node.is(this.disableTag));
            }
            if (this.disabled) {
                return true;
            }
            if ($node == null) {
                return this.active;
            }
            showPopover = true;
            if (!$node.is(this.htmlTag) || $node.is('[class^="simditor-"]')) {
                this.setActive(false);
                showPopover = false;
            } else if (this.editor.selection.rangeAtEndOf($node)) {
                this.setActive(true);
                showPopover = false;
            } else {
                this.setActive(true);
            }
            if (showPopover) {
                this.popover.show($node);
            } else if (this.editor.util.isBlockNode($node)) {
                this.popover.hide();
            }
            return this.active;
        };

        LinkButton.prototype.command = function () {
            var $contents, $endBlock, $link, $newBlock, $startBlock, endNode, linkText, range, startNode, txtNode,
              _this = this;
            range = this.editor.selection.getRange();
            if (this.active) {
                $link = $(range.commonAncestorContainer).closest('a');
                txtNode = document.createTextNode($link.text());
                $link.replaceWith(txtNode);
                range.selectNode(txtNode);
            } else {
                startNode = range.startContainer;
                endNode = range.endContainer;
                $startBlock = this.editor.util.closestBlockEl(startNode);
                $endBlock = this.editor.util.closestBlockEl(endNode);
                $contents = $(range.extractContents());
                linkText = this.editor.formatter.clearHtml($contents.contents(), false);
                $link = $('<a/>', {
                    href: 'http://www.example.com',
                    target: '_blank',
                    text: linkText || '链接文字'
                });
                if ($startBlock[0] === $endBlock[0]) {
                    range.insertNode($link[0]);
                } else {
                    $newBlock = $('<p/>').append($link);
                    range.insertNode($newBlock[0]);
                }
                range.selectNodeContents($link[0]);
                this.popover.one('popovershow', function () {
                    if (linkText) {
                        _this.popover.urlEl.focus();
                        return _this.popover.urlEl[0].select();
                    } else {
                        _this.popover.textEl.focus();
                        return _this.popover.textEl[0].select();
                    }
                });
            }
            this.editor.selection.selectRange(range);
            this.editor.trigger('valuechanged');
            return this.editor.trigger('selectionchanged');
        };

        return LinkButton;

    })(Button);

    LinkPopover = (function (_super) {
        __extends(LinkPopover, _super);

        function LinkPopover() {
            _ref13 = LinkPopover.__super__.constructor.apply(this, arguments);
            return _ref13;
        }

        LinkPopover.prototype._tpl = "<div class=\"link-settings\">\n  <div class=\"settings-field\">\n    <label>文本</label>\n    <input class=\"link-text\" type=\"text\"/>\n    <a class=\"btn-unlink\" href=\"javascript:;\" title=\"取消链接\" tabindex=\"-1\"><span class=\"fa fa-unlink\"></span></a>\n  </div>\n  <div class=\"settings-field\">\n    <label>链接</label>\n    <input class=\"link-url\" type=\"text\"/>\n  </div>\n</div>";

        LinkPopover.prototype.render = function () {
            var _this = this;
            this.el.addClass('link-popover').append(this._tpl);
            this.textEl = this.el.find('.link-text');
            this.urlEl = this.el.find('.link-url');
            this.unlinkEl = this.el.find('.btn-unlink');
            this.textEl.on('keyup', function (e) {
                if (e.which === 13) {
                    return;
                }
                return _this.target.text(_this.textEl.val());
            });
            this.urlEl.on('keyup', function (e) {
                if (e.which === 13) {
                    return;
                }
                return _this.target.attr('href', _this.urlEl.val());
            });
            $([this.urlEl[0], this.textEl[0]]).on('keydown', function (e) {
                if (e.which === 13 || e.which === 27 || (!e.shiftKey && e.which === 9 && $(e.target).hasClass('link-url'))) {
                    e.preventDefault();
                    return setTimeout(function () {
                        var range;
                        range = document.createRange();
                        _this.editor.selection.setRangeAfter(_this.target, range);
                        _this.hide();
                        _this.editor.trigger('valuechanged');
                        return _this.editor.trigger('selectionchanged');
                    }, 0);
                }
            });
            return this.unlinkEl.on('click', function (e) {
                var range, txtNode;
                txtNode = document.createTextNode(_this.target.text());
                _this.target.replaceWith(txtNode);
                _this.hide();
                range = document.createRange();
                _this.editor.selection.setRangeAfter(txtNode, range);
                _this.editor.trigger('valuechanged');
                return _this.editor.trigger('selectionchanged');
            });
        };

        LinkPopover.prototype.show = function () {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            LinkPopover.__super__.show.apply(this, args);
            this.textEl.val(this.target.text());
            return this.urlEl.val(this.target.attr('href'));
        };

        return LinkPopover;

    })(Popover);

    Simditor.Toolbar.addButton(LinkButton);

    ImageButton = (function (_super) {
        __extends(ImageButton, _super);

        ImageButton.prototype.name = 'image';

        ImageButton.prototype.icon = 'picture-o';

        ImageButton.prototype.title = '插入图片';

        ImageButton.prototype.htmlTag = 'img';

        ImageButton.prototype.disableTag = 'pre, table';

        ImageButton.prototype.defaultImage = '';

        ImageButton.prototype.maxWidth = 0;

        ImageButton.prototype.maxHeight = 0;

        ImageButton.prototype.menu = [
          {
              name: 'upload-image',
              text: '本地图片'
          }, {
              name: 'external-image',
              text: '外链图片'
          }
        ];

        function ImageButton(editor) {
            var _this = this;
            this.editor = editor;
            if (this.editor.uploader == null) {
                this.menu = false;
            }
            ImageButton.__super__.constructor.call(this, this.editor);
            this.defaultImage = this.editor.opts.defaultImage;
            this.maxWidth = this.editor.opts.maxImageWidth || this.editor.body.width();
            this.maxHeight = this.editor.opts.maxImageHeight || $(window).height();
            this.editor.body.on('click', 'img:not([data-non-image])', function (e) {
                var $img, range;
                $img = $(e.currentTarget);
                range = document.createRange();
                range.selectNode($img[0]);
                _this.editor.selection.selectRange(range);
                setTimeout(function () {
                    _this.editor.body.focus();
                    return _this.editor.trigger('selectionchanged');
                }, 0);
                return false;
            });
            this.editor.body.on('mouseup', 'img:not([data-non-image])', function (e) {
                return false;
            });
            this.editor.on('selectionchanged.image', function () {
                var $contents, $img, range;
                range = _this.editor.selection.sel.getRangeAt(0);
                if (range == null) {
                    return;
                }
                $contents = $(range.cloneContents()).contents();
                if ($contents.length === 1 && $contents.is('img:not([data-non-image])')) {
                    $img = $(range.startContainer).contents().eq(range.startOffset);
                    return _this.popover.show($img);
                } else {
                    return _this.popover.hide();
                }
            });
        }

        ImageButton.prototype.render = function () {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            ImageButton.__super__.render.apply(this, args);
            return this.popover = new ImagePopover(this);
        };

        ImageButton.prototype.renderMenu = function () {
            var $input, $uploadItem, createInput,
              _this = this;
            ImageButton.__super__.renderMenu.call(this);
            $uploadItem = this.menuEl.find('.menu-item-upload-image');
            $input = null;
            createInput = function () {
                if ($input) {
                    $input.remove();
                }
                return $input = $('<input type="file" title="上传图片" name="upload_file" accept="image/*">').appendTo($uploadItem);
            };
            createInput();
            $uploadItem.on('click mousedown', 'input[name=upload_file]', function (e) {
                return e.stopPropagation();
            });
            $uploadItem.on('change', 'input[name=upload_file]', function (e) {
                if (_this.editor.inputManager.focused) {
                    _this.editor.uploader.upload($input, {
                        inline: true
                    });
                    createInput();
                } else if (_this.editor.inputManager.lastCaretPosition) {
                    _this.editor.one('focus', function (e) {
                        _this.editor.uploader.upload($input, {
                            inline: true
                        });
                        return createInput();
                    });
                    _this.editor.undoManager.caretPosition(_this.editor.inputManager.lastCaretPosition);
                }
                return _this.wrapper.removeClass('menu-on');
            });
            return this._initUploader();
        };

        ImageButton.prototype._initUploader = function () {
            var _this = this;
            if (this.editor.uploader == null) {
                this.el.find('.btn-upload').remove();
                return;
            }
            this.editor.uploader.on('beforeupload', function (e, file) {
                var $img;
                if (!file.inline) {
                    return;
                }
                if (file.img) {
                    $img = $(file.img);
                } else {
                    $img = _this.createImage(file.name);
                    $img.click();
                    file.img = $img;
                }
                $img.addClass('uploading');
                return _this.editor.uploader.readImageFile(file.obj, function (img) {
                    var src;
                    if (!$img.hasClass('uploading')) {
                        return;
                    }
                    src = img ? img.src : _this.defaultImage;
                    return _this.loadImage($img, src, function () {
                        _this.popover.refresh();
                        return _this.popover.srcEl.val('正在上传...').prop('disabled', true);
                    });
                });
            });
            this.editor.uploader.on('uploadprogress', function (e, file, loaded, total) {
                var $mask, percent;
                if (!file.inline) {
                    return;
                }
                percent = loaded / total;
                percent = (percent * 100).toFixed(0);
                if (percent > 99) {
                    percent = 99;
                }
                $mask = file.img.data('mask');
                if ($mask) {
                    return $mask.find("span").text(percent);
                }
            });
            this.editor.uploader.on('uploadsuccess', function (e, file, result) {
                var $img;
                if (!file.inline) {
                    return;
                }
                $img = file.img.removeClass('uploading');
                return _this.loadImage($img, result.file_path, function () {
                    _this.popover.srcEl.prop('disabled', false);
                    $img.click();
                    _this.editor.trigger('valuechanged');
                    return _this.editor.uploader.trigger('uploadready', [file, result]);
                });
            });
            return this.editor.uploader.on('uploaderror', function (e, file, xhr) {
                var $img, msg, result;
                if (!file.inline) {
                    return;
                }
                if (xhr.statusText === 'abort') {
                    return;
                }
                if (xhr.responseText) {
                    try {
                        result = $.parseJSON(xhr.responseText);
                        msg = result.msg;
                    } catch (_error) {
                        e = _error;
                        msg = '上传出错了';
                    }
                    if ((typeof simple !== "undefined" && simple !== null) && (simple.message != null)) {
                        simple.message(msg);
                    } else {
                        alert(msg);
                    }
                }
                $img = file.img.removeClass('uploading');
                return _this.loadImage($img, _this.defaultImage, function () {
                    _this.popover.refresh();
                    _this.popover.srcEl.val($img.attr('src')).prop('disabled', false);
                    return _this.editor.trigger('valuechanged');
                });
            });
        };

        ImageButton.prototype.status = function ($node) {
            if ($node != null) {
                this.setDisabled($node.is(this.disableTag));
            }
            if (this.disabled) {
                return true;
            }
        };

        ImageButton.prototype.loadImage = function ($img, src, callback) {
            var $mask, img, imgPosition, toolbarH,
              _this = this;
            $mask = $img.data('mask');
            if (!$mask) {
                $mask = $('<div class="simditor-image-loading"><span></span></div>').appendTo(this.editor.wrapper);
                if ($img.hasClass('uploading') && this.editor.uploader.html5) {
                    $mask.addClass('uploading');
                }
                $img.data('mask', $mask);
            }
            imgPosition = $img.position();
            toolbarH = this.editor.toolbar.wrapper.outerHeight();
            $mask.css({
                top: imgPosition.top + toolbarH,
                left: imgPosition.left,
                width: $img.width(),
                height: $img.height()
            });
            img = new Image();
            img.onload = function () {
                var height, width;
                width = img.width;
                height = img.height;
                if (width > _this.maxWidth) {
                    height = _this.maxWidth * height / width;
                    width = _this.maxWidth;
                }
                if (height > _this.maxHeight) {
                    width = _this.maxHeight * width / height;
                    height = _this.maxHeight;
                }
                $img.attr({
                    src: src,
                    width: width,
                    height: height,
                    'data-image-size': img.width + ',' + img.height
                });
                if ($img.hasClass('uploading')) {
                    $mask.css({
                        width: width,
                        height: height
                    });
                } else {
                    $mask.remove();
                    $img.removeData('mask');
                }
                return callback(img);
            };
            img.onerror = function () {
                callback(false);
                $mask.remove();
                return $img.removeData('mask');
            };
            return img.src = src;
        };

        ImageButton.prototype.createImage = function (name) {
            var $img, range;
            if (name == null) {
                name = 'Image';
            }
            range = this.editor.selection.getRange();
            range.deleteContents();
            $img = $('<img/>').attr('alt', name);
            range.insertNode($img[0]);
            return $img;
        };

        ImageButton.prototype.command = function (src) {
            var $img,
              _this = this;
            $img = this.createImage();
            return this.loadImage($img, src || this.defaultImage, function () {
                _this.editor.trigger('valuechanged');
                $img.click();
                return _this.popover.one('popovershow', function () {
                    _this.popover.srcEl.focus();
                    return _this.popover.srcEl[0].select();
                });
            });
        };

        return ImageButton;

    })(Button);

    ImagePopover = (function (_super) {
        __extends(ImagePopover, _super);

        ImagePopover.prototype._tpl = "<div class=\"link-settings\">\n  <div class=\"settings-field\">\n    <label>图片地址</label>\n    <input class=\"image-src\" type=\"text\"/>\n    <a class=\"btn-upload\" href=\"javascript:;\" title=\"上传图片\" tabindex=\"-1\">\n      <span class=\"fa fa-upload\"></span>\n    </a>\n  </div>\n</div>";

        ImagePopover.prototype.offset = {
            top: 6,
            left: -4
        };

        function ImagePopover(button) {
            this.button = button;
            ImagePopover.__super__.constructor.call(this, this.button.editor);
        }

        ImagePopover.prototype.render = function () {
            var _this = this;
            this.el.addClass('image-popover').append(this._tpl);
            this.srcEl = this.el.find('.image-src');
            this.srcEl.on('keydown', function (e) {
                var src;
                if (e.which === 13 || e.which === 27 || e.which === 9) {
                    e.preventDefault();
                    if (e.which === 13 && !_this.target.hasClass('uploading')) {
                        src = _this.srcEl.val();
                        return _this.button.loadImage(_this.target, src, function (success) {
                            if (!success) {
                                return;
                            }
                            _this.button.editor.body.focus();
                            _this.button.editor.selection.setRangeAfter(_this.target);
                            _this.hide();
                            return _this.editor.trigger('valuechanged');
                        });
                    } else {
                        _this.button.editor.body.focus();
                        _this.button.editor.selection.setRangeAfter(_this.target);
                        return _this.hide();
                    }
                }
            });
            this.editor.on('valuechanged', function (e) {
                if (_this.active) {
                    return _this.refresh();
                }
            });
            return this._initUploader();
        };

        ImagePopover.prototype._initUploader = function () {
            var $uploadBtn, createInput,
              _this = this;
            $uploadBtn = this.el.find('.btn-upload');
            if (this.editor.uploader == null) {
                $uploadBtn.remove();
                return;
            }
            createInput = function () {
                if (_this.input) {
                    _this.input.remove();
                }
                return _this.input = $('<input type="file" title="上传图片" name="upload_file" accept="image/*">').appendTo($uploadBtn);
            };
            createInput();
            this.el.on('click mousedown', 'input[name=upload_file]', function (e) {
                return e.stopPropagation();
            });
            return this.el.on('change', 'input[name=upload_file]', function (e) {
                _this.editor.uploader.upload(_this.input, {
                    inline: true,
                    img: _this.target
                });
                return createInput();
            });
        };

        ImagePopover.prototype.show = function () {
            var $img, args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            ImagePopover.__super__.show.apply(this, args);
            $img = this.target;
            if ($img.hasClass('uploading')) {
                return this.srcEl.val('正在上传');
            } else {
                return this.srcEl.val($img.attr('src'));
            }
        };

        return ImagePopover;

    })(Popover);

    Simditor.Toolbar.addButton(ImageButton);

    IndentButton = (function (_super) {
        __extends(IndentButton, _super);

        function IndentButton() {
            _ref14 = IndentButton.__super__.constructor.apply(this, arguments);
            return _ref14;
        }

        IndentButton.prototype.name = 'indent';

        IndentButton.prototype.icon = 'indent';

        IndentButton.prototype.title = '向右缩进（Tab）';

        IndentButton.prototype.status = function ($node) {
            return true;
        };

        IndentButton.prototype.command = function () {
            return this.editor.util.indent();
        };

        return IndentButton;

    })(Button);

    Simditor.Toolbar.addButton(IndentButton);

    OutdentButton = (function (_super) {
        __extends(OutdentButton, _super);

        function OutdentButton() {
            _ref15 = OutdentButton.__super__.constructor.apply(this, arguments);
            return _ref15;
        }

        OutdentButton.prototype.name = 'outdent';

        OutdentButton.prototype.icon = 'outdent';

        OutdentButton.prototype.title = '向左缩进（Shift + Tab）';

        OutdentButton.prototype.status = function ($node) {
            return true;
        };

        OutdentButton.prototype.command = function () {
            return this.editor.util.outdent();
        };

        return OutdentButton;

    })(Button);

    Simditor.Toolbar.addButton(OutdentButton);

    HrButton = (function (_super) {
        __extends(HrButton, _super);

        function HrButton() {
            _ref16 = HrButton.__super__.constructor.apply(this, arguments);
            return _ref16;
        }

        HrButton.prototype.name = 'hr';

        HrButton.prototype.icon = 'minus';

        HrButton.prototype.title = '分隔线';

        HrButton.prototype.htmlTag = 'hr';

        HrButton.prototype.status = function ($node) {
            return true;
        };

        HrButton.prototype.command = function () {
            var $hr, $newBlock, $nextBlock, $rootBlock;
            $rootBlock = this.editor.util.furthestBlockEl();
            $nextBlock = $rootBlock.next();
            if ($nextBlock.length > 0) {
                this.editor.selection.save();
            } else {
                $newBlock = $('<p/>').append(this.editor.util.phBr);
            }
            $hr = $('<hr/>').insertAfter($rootBlock);
            if ($newBlock) {
                $newBlock.insertAfter($hr);
                this.editor.selection.setRangeAtStartOf($newBlock);
            } else {
                this.editor.selection.restore();
            }
            this.editor.trigger('valuechanged');
            return this.editor.trigger('selectionchanged');
        };

        return HrButton;

    })(Button);

    Simditor.Toolbar.addButton(HrButton);

    TableButton = (function (_super) {
        __extends(TableButton, _super);

        TableButton.prototype.name = 'table';

        TableButton.prototype.icon = 'table';

        TableButton.prototype.title = '表格';

        TableButton.prototype.htmlTag = 'table';

        TableButton.prototype.disableTag = 'pre, li, blockquote';

        TableButton.prototype.menu = true;

        function TableButton() {
            var args,
              _this = this;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            TableButton.__super__.constructor.apply(this, args);
            $.merge(this.editor.formatter._allowedTags, ['tbody', 'tr', 'td', 'colgroup', 'col']);
            $.extend(this.editor.formatter._allowedAttributes, {
                td: ['rowspan', 'colspan'],
                col: ['width']
            });
            this.editor.on('decorate', function (e, $el) {
                return $el.find('table').each(function (i, table) {
                    return _this.decorate($(table));
                });
            });
            this.editor.on('undecorate', function (e, $el) {
                return $el.find('table').each(function (i, table) {
                    return _this.undecorate($(table));
                });
            });
            this.editor.on('selectionchanged.table', function (e) {
                var $container, range;
                _this.editor.body.find('.simditor-table td').removeClass('active');
                range = _this.editor.selection.getRange();
                if (range == null) {
                    return;
                }
                $container = $(range.commonAncestorContainer);
                if (range.collapsed && $container.is('.simditor-table')) {
                    if (_this.editor.selection.rangeAtStartOf($container)) {
                        $container = $container.find('td:first');
                    } else {
                        $container = $container.find('td:last');
                    }
                    _this.editor.selection.setRangeAtEndOf($container);
                }
                return $container.closest('td', _this.editor.body).addClass('active');
            });
            this.editor.on('blur.table', function (e) {
                return _this.editor.body.find('.simditor-table td').removeClass('active');
            });
            this.editor.inputManager.addKeystrokeHandler('38', 'td', function (e, $node) {
                var $prevTr, $tr, index;
                $tr = $node.parent('tr');
                $prevTr = $tr.prev('tr');
                if (!($prevTr.length > 0)) {
                    return true;
                }
                index = $tr.find('td').index($node);
                _this.editor.selection.setRangeAtEndOf($prevTr.find('td').eq(index));
                return true;
            });
            this.editor.inputManager.addKeystrokeHandler('40', 'td', function (e, $node) {
                var $nextTr, $tr, index;
                $tr = $node.parent('tr');
                $nextTr = $tr.next('tr');
                if (!($nextTr.length > 0)) {
                    return true;
                }
                index = $tr.find('td').index($node);
                _this.editor.selection.setRangeAtEndOf($nextTr.find('td').eq(index));
                return true;
            });
        }

        TableButton.prototype.initResize = function ($table) {
            var $colgroup, $resizeHandle, $wrapper,
              _this = this;
            $wrapper = $table.parent('.simditor-table');
            $colgroup = $table.find('colgroup');
            if ($colgroup.length < 1) {
                $colgroup = $('<colgroup/>').prependTo($table);
                $table.find('tr:first td').each(function (i, td) {
                    var $col;
                    return $col = $('<col/>').appendTo($colgroup);
                });
                this.refreshTableWidth($table);
            }
            $resizeHandle = $('<div class="simditor-resize-handle" contenteditable="false"></div>').appendTo($wrapper);
            $wrapper.on('mousemove', 'td', function (e) {
                var $col, $td, index, x, _ref17, _ref18;
                if ($wrapper.hasClass('resizing')) {
                    return;
                }
                $td = $(e.currentTarget);
                x = e.pageX - $(e.currentTarget).offset().left;
                if (x < 5 && $td.prev().length > 0) {
                    $td = $td.prev();
                }
                if ($td.next('td').length < 1) {
                    $resizeHandle.hide();
                    return;
                }
                if ((_ref17 = $resizeHandle.data('td')) != null ? _ref17.is($td) : void 0) {
                    $resizeHandle.show();
                    return;
                }
                index = $td.parent().find('td').index($td);
                $col = $colgroup.find('col').eq(index);
                if ((_ref18 = $resizeHandle.data('col')) != null ? _ref18.is($col) : void 0) {
                    $resizeHandle.show();
                    return;
                }
                return $resizeHandle.css('left', $td.position().left + $td.outerWidth() - 5).data('td', $td).data('col', $col).show();
            });
            $wrapper.on('mouseleave', function (e) {
                return $resizeHandle.hide();
            });
            return $wrapper.on('mousedown', '.simditor-resize-handle', function (e) {
                var $handle, $leftCol, $leftTd, $rightCol, $rightTd, minWidth, startHandleLeft, startLeftWidth, startRightWidth, startX, tableWidth;
                $handle = $(e.currentTarget);
                $leftTd = $handle.data('td');
                $leftCol = $handle.data('col');
                $rightTd = $leftTd.next('td');
                $rightCol = $leftCol.next('col');
                startX = e.pageX;
                startLeftWidth = $leftTd.outerWidth() * 1;
                startRightWidth = $rightTd.outerWidth() * 1;
                startHandleLeft = parseFloat($handle.css('left'));
                tableWidth = $leftTd.closest('table').width();
                minWidth = 50;
                $(document).on('mousemove.simditor-resize-table', function (e) {
                    var deltaX, leftWidth, rightWidth;
                    deltaX = e.pageX - startX;
                    leftWidth = startLeftWidth + deltaX;
                    rightWidth = startRightWidth - deltaX;
                    if (leftWidth < minWidth) {
                        leftWidth = minWidth;
                        deltaX = minWidth - startLeftWidth;
                        rightWidth = startRightWidth - deltaX;
                    } else if (rightWidth < minWidth) {
                        rightWidth = minWidth;
                        deltaX = startRightWidth - minWidth;
                        leftWidth = startLeftWidth + deltaX;
                    }
                    $leftCol.attr('width', (leftWidth / tableWidth * 100) + '%');
                    $rightCol.attr('width', (rightWidth / tableWidth * 100) + '%');
                    return $handle.css('left', startHandleLeft + deltaX);
                });
                $(document).one('mouseup.simditor-resize-table', function (e) {
                    $(document).off('.simditor-resize-table');
                    return $wrapper.removeClass('resizing');
                });
                $wrapper.addClass('resizing');
                return false;
            });
        };

        TableButton.prototype.decorate = function ($table) {
            if ($table.parent('.simditor-table').length > 0) {
                this.undecorate($table);
            }
            $table.wrap('<div class="simditor-table"></div>');
            this.initResize($table);
            return $table.parent();
        };

        TableButton.prototype.undecorate = function ($table) {
            if (!($table.parent('.simditor-table').length > 0)) {
                return;
            }
            return $table.parent().replaceWith($table);
        };

        TableButton.prototype.renderMenu = function () {
            var _this = this;
            $('<div class="menu-create-table">\n</div>\n<div class="menu-edit-table">\n  <ul>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="deleteRow"><span>删除行</span></a></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="insertRowAbove"><span>在上面插入行</span></a></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="insertRowBelow"><span>在下面插入行</span></a></li>\n    <li><span class="separator"></span></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="deleteCol"><span>删除列</span></a></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="insertColLeft"><span>在左边插入列</span></a></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="insertColRight"><span>在右边插入列</span></a></li>\n    <li><span class="separator"></span></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="deleteTable"><span>删除表格</span></a></li>\n  </ul>\n</div>').appendTo(this.menuWrapper);
            this.createMenu = this.menuWrapper.find('.menu-create-table');
            this.editMenu = this.menuWrapper.find('.menu-edit-table');
            this.createTable(6, 6).appendTo(this.createMenu);
            this.createMenu.on('mouseenter', 'td', function (e) {
                var $td, $tr, num;
                _this.createMenu.find('td').removeClass('selected');
                $td = $(e.currentTarget);
                $tr = $td.parent();
                num = $tr.find('td').index($td) + 1;
                return $tr.prevAll('tr').addBack().find('td:lt(' + num + ')').addClass('selected');
            });
            this.createMenu.on('mouseleave', function (e) {
                return $(e.currentTarget).find('td').removeClass('selected');
            });
            return this.createMenu.on('mousedown', 'td', function (e) {
                var $closestBlock, $table, $td, $tr, colNum, rowNum;
                _this.wrapper.removeClass('menu-on');
                if (!_this.editor.inputManager.focused) {
                    return;
                }
                $td = $(e.currentTarget);
                $tr = $td.parent();
                colNum = $tr.find('td').index($td) + 1;
                rowNum = $tr.prevAll('tr').length + 1;
                $table = _this.createTable(rowNum, colNum, true);
                $closestBlock = _this.editor.util.closestBlockEl();
                if (_this.editor.util.isEmptyNode($closestBlock)) {
                    $closestBlock.replaceWith($table);
                } else {
                    $closestBlock.after($table);
                }
                _this.decorate($table);
                _this.editor.selection.setRangeAtStartOf($table.find('td:first'));
                _this.editor.trigger('valuechanged');
                _this.editor.trigger('selectionchanged');
                return false;
            });
        };

        TableButton.prototype.createTable = function (row, col, phBr) {
            var $table, $tbody, $td, $tr, c, r, _i, _j;
            $table = $('<table/>');
            $tbody = $('<tbody/>').appendTo($table);
            for (r = _i = 0; 0 <= row ? _i < row : _i > row; r = 0 <= row ? ++_i : --_i) {
                $tr = $('<tr/>').appendTo($tbody);
                for (c = _j = 0; 0 <= col ? _j < col : _j > col; c = 0 <= col ? ++_j : --_j) {
                    $td = $('<td/>').appendTo($tr);
                    if (phBr) {
                        $td.append(this.editor.util.phBr);
                    }
                }
            }
            return $table;
        };

        TableButton.prototype.refreshTableWidth = function ($table) {
            var cols, tableWidth,
              _this = this;
            tableWidth = $table.width();
            cols = $table.find('col');
            return $table.find('tr:first td').each(function (i, td) {
                var $col;
                $col = cols.eq(i);
                return $col.attr('width', ($(td).outerWidth() / tableWidth * 100) + '%');
            });
        };

        TableButton.prototype.setActive = function (active) {
            TableButton.__super__.setActive.call(this, active);
            if (active) {
                this.createMenu.hide();
                return this.editMenu.show();
            } else {
                this.createMenu.show();
                return this.editMenu.hide();
            }
        };

        TableButton.prototype.deleteRow = function ($td) {
            var $newTr, $tr, index;
            $tr = $td.parent('tr');
            if ($tr.siblings('tr').length < 1) {
                return this.deleteTable($td);
            } else {
                $newTr = $tr.next('tr');
                if (!($newTr.length > 0)) {
                    $newTr = $tr.prev('tr');
                }
                index = $tr.find('td').index($td);
                $tr.remove();
                return this.editor.selection.setRangeAtEndOf($newTr.find('td').eq(index));
            }
        };

        TableButton.prototype.insertRow = function ($td, direction) {
            var $newTr, $table, $tr, colNum, i, index, _i,
              _this = this;
            if (direction == null) {
                direction = 'after';
            }
            $tr = $td.parent('tr');
            $table = $tr.closest('table');
            colNum = 0;
            $table.find('tr').each(function (i, tr) {
                return colNum = Math.max(colNum, $(tr).find('td').length);
            });
            $newTr = $('<tr/>');
            for (i = _i = 1; 1 <= colNum ? _i <= colNum : _i >= colNum; i = 1 <= colNum ? ++_i : --_i) {
                $('<td/>').append(this.editor.util.phBr).appendTo($newTr);
            }
            $tr[direction]($newTr);
            index = $tr.find('td').index($td);
            return this.editor.selection.setRangeAtStartOf($newTr.find('td').eq(index));
        };

        TableButton.prototype.deleteCol = function ($td) {
            var $newTd, $table, $tr, index,
              _this = this;
            $tr = $td.parent('tr');
            if ($tr.siblings('tr').length < 1 && $td.siblings('td').length < 1) {
                return this.deleteTable($td);
            } else {
                index = $tr.find('td').index($td);
                $newTd = $td.next('td');
                if (!($newTd.length > 0)) {
                    $newTd = $tr.prev('td');
                }
                $table = $tr.closest('table');
                $table.find('col').eq(index).remove();
                $table.find('tr').each(function (i, tr) {
                    return $(tr).find('td').eq(index).remove();
                });
                this.refreshTableWidth($table);
                return this.editor.selection.setRangeAtEndOf($newTd);
            }
        };

        TableButton.prototype.insertCol = function ($td, direction) {
            var $col, $newCol, $newTd, $table, $tr, index, tableWidth, width,
              _this = this;
            if (direction == null) {
                direction = 'after';
            }
            $tr = $td.parent('tr');
            index = $tr.find('td').index($td);
            $table = $td.closest('table');
            $col = $table.find('col').eq(index);
            $table.find('tr').each(function (i, tr) {
                var $newTd;
                $newTd = $('<td/>').append(_this.editor.util.phBr);
                return $(tr).find('td').eq(index)[direction]($newTd);
            });
            $newCol = $('<col/>');
            $col[direction]($newCol);
            tableWidth = $table.width();
            width = Math.max(parseFloat($col.attr('width')) / 2, 50 / tableWidth * 100);
            $col.attr('width', width + '%');
            $newCol.attr('width', width + '%');
            this.refreshTableWidth($table);
            $newTd = direction === 'after' ? $td.next('td') : $td.prev('td');
            return this.editor.selection.setRangeAtStartOf($newTd);
        };

        TableButton.prototype.deleteTable = function ($td) {
            var $block, $table;
            $table = $td.closest('.simditor-table');
            $block = $table.next('p');
            $table.remove();
            if ($block.length > 0) {
                return this.editor.selection.setRangeAtStartOf($block);
            }
        };

        TableButton.prototype.command = function (param) {
            var $td, range;
            range = this.editor.selection.getRange();
            $td = $(range.commonAncestorContainer).closest('td');
            if (!($td.length > 0)) {
                return;
            }
            if (param === 'deleteRow') {
                this.deleteRow($td);
            } else if (param === 'insertRowAbove') {
                this.insertRow($td, 'before');
            } else if (param === 'insertRowBelow') {
                this.insertRow($td);
            } else if (param === 'deleteCol') {
                this.deleteCol($td);
            } else if (param === 'insertColLeft') {
                this.insertCol($td, 'before');
            } else if (param === 'insertColRight') {
                this.insertCol($td);
            } else if (param === 'deleteTable') {
                this.deleteTable($td);
            } else {
                return;
            }
            this.editor.trigger('valuechanged');
            return this.editor.trigger('selectionchanged');
        };

        return TableButton;

    })(Button);

    Simditor.Toolbar.addButton(TableButton);

    StrikethroughButton = (function (_super) {
        __extends(StrikethroughButton, _super);

        function StrikethroughButton() {
            _ref17 = StrikethroughButton.__super__.constructor.apply(this, arguments);
            return _ref17;
        }

        StrikethroughButton.prototype.name = 'strikethrough';

        StrikethroughButton.prototype.icon = 'strikethrough';

        StrikethroughButton.prototype.title = '删除线文字';

        StrikethroughButton.prototype.htmlTag = 'strike';

        StrikethroughButton.prototype.disableTag = 'pre';

        StrikethroughButton.prototype.status = function ($node) {
            var active;
            if ($node != null) {
                this.setDisabled($node.is(this.disableTag));
            }
            if (this.disabled) {
                return true;
            }
            active = document.queryCommandState('strikethrough') === true;
            this.setActive(active);
            return active;
        };

        StrikethroughButton.prototype.command = function () {
            document.execCommand('strikethrough');
            this.editor.trigger('valuechanged');
            return this.editor.trigger('selectionchanged');
        };

        return StrikethroughButton;

    })(Button);

    Simditor.Toolbar.addButton(StrikethroughButton);

}).call(this);

(function () {
    var Markdown,
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      __slice = [].slice;

    Markdown = (function (_super) {
        __extends(Markdown, _super);

        Markdown.prototype.opts = {
            markdown: false
        };

        function Markdown() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            Markdown.__super__.constructor.apply(this, args);
            this.editor = this.widget;
        }

        Markdown.prototype._init = function () {
            var hooks;
            if (!this.opts.markdown) {
                return;
            }
            if (typeof this.opts.markdown === "object") {
                hooks = $.extend({}, this.hooks, this.opts.markdown);
            } else {
                hooks = $.extend({}, this.hooks);
            }
            return this.editor.on("keypress", (function (_this) {
                return function (e) {
                    var $blockEl, cmdEnd, cmdStart, container, content, hook, match, name, range, testRange, _results;
                    if (!(e.which === 32 || e.which === 13)) {
                        return;
                    }
                    range = _this.editor.selection.getRange();
                    container = range != null ? range.commonAncestorContainer : void 0;
                    if (!(range && range.collapsed && container && container.nodeType === 3 && !$(container).parent("pre").length)) {
                        return;
                    }
                    content = container.textContent;
                    _results = [];
                    for (name in hooks) {
                        hook = hooks[name];
                        if (!(hook && hook.cmd instanceof RegExp)) {
                            continue;
                        }
                        match = content.match(hook.cmd);
                        if (!match) {
                            continue;
                        }
                        if (hook.block) {
                            $blockEl = _this.editor.util.closestBlockEl(container);
                            testRange = document.createRange();
                            testRange.setStart(container, 0);
                            testRange.collapse(true);
                            if (!_this.editor.selection.rangeAtStartOf($blockEl, testRange)) {
                                continue;
                            }
                        }
                        if (e.which === 32 || name === "code") {
                            e.preventDefault();
                        }
                        cmdStart = match.index;
                        cmdEnd = match[0].length + match.index;
                        range.setStart(container, cmdStart);
                        range.setEnd(container, cmdEnd);
                        if (hook.block) {
                            range.deleteContents();
                            if (_this.editor.util.isEmptyNode($blockEl)) {
                                $blockEl.append(_this.editor.util.phBr);
                            }
                            _this.editor.selection.setRangeAtEndOf($blockEl);
                        } else {
                            _this.editor.selection.selectRange(range);
                        }
                        hook.callback.call(_this, hook, range, match, $blockEl);
                        break;
                    }
                    return _results;
                };
            })(this));
        };

        Markdown.prototype.hooks = {
            title: {
                cmd: /^#+/,
                block: true,
                callback: function (hook, range, match, $blockEl) {
                    var button, level;
                    button = this.editor.toolbar.findButton("title");
                    if (button === null || button.disabled) {
                        return;
                    }
                    level = Math.min(match[0].length, 3);
                    return button.command("h" + level);
                }
            },
            blockquote: {
                cmd: /^>{1}/,
                block: true,
                callback: function (hook, range, match, $blockEl) {
                    var button;
                    button = this.editor.toolbar.findButton("blockquote");
                    if (button === null || button.disabled) {
                        return;
                    }
                    return button.command();
                }
            },
            code: {
                cmd: /^`{3}/,
                block: true,
                callback: function (hook, range, match, $blockEl) {
                    var button;
                    button = this.editor.toolbar.findButton("code");
                    if (button === null || button.disabled) {
                        return;
                    }
                    return button.command();
                }
            },
            hr: {
                cmd: /^\*{3,}$|^\-{3,}$/,
                block: true,
                callback: function (hook, range, match, $blockEl) {
                    var button;
                    button = this.editor.toolbar.findButton("hr");
                    if (button === null || button.disabled) {
                        return;
                    }
                    return button.command();
                }
            },
            bold: {
                cmd: /\*{2}([^\*]+)\*{2}$|_{2}([^_]+)_{2}$/,
                block: false,
                callback: function (hook, range, match) {
                    var button, text, textNode;
                    button = this.editor.toolbar.findButton("bold");
                    if (button === null || button.disabled) {
                        return;
                    }
                    text = match[1] || match[2];
                    textNode = document.createTextNode(text);
                    range.deleteContents();
                    range.insertNode(textNode);
                    range.selectNode(textNode);
                    this.editor.selection.selectRange(range);
                    document.execCommand("bold");
                    this.editor.selection.setRangeAfter(textNode);
                    document.execCommand("bold");
                    this.editor.trigger("valuechanged");
                    return this.editor.trigger("selectionchanged");
                }
            },
            italic: {
                cmd: /\*([^\*]+)\*$/,
                block: false,
                callback: function (hook, range, match) {
                    var button, text, textNode;
                    button = this.editor.toolbar.findButton("italic");
                    if (button === null || button.disabled) {
                        return;
                    }
                    text = match[1] || match[2];
                    textNode = document.createTextNode(text);
                    range.deleteContents();
                    range.insertNode(textNode);
                    range.selectNode(textNode);
                    this.editor.selection.selectRange(range);
                    document.execCommand("italic");
                    this.editor.selection.setRangeAfter(textNode);
                    document.execCommand("italic");
                    this.editor.trigger("valuechanged");
                    return this.editor.trigger("selectionchanged");
                }
            },
            ul: {
                cmd: /^\*{1}|^\+{1}|^\-{1}/,
                block: true,
                callback: function (hook, range, match, $blockEl) {
                    var button;
                    button = this.editor.toolbar.findButton("ul");
                    if (button === null || button.disabled) {
                        return;
                    }
                    return button.command();
                }
            },
            ol: {
                cmd: /^[0-9][\.\u3002]{1}/,
                block: true,
                callback: function (hook, range, match, $blockEl) {
                    var button;
                    button = this.editor.toolbar.findButton("ol");
                    if (button === null || button.disabled) {
                        return;
                    }
                    return button.command();
                }
            },
            image: {
                cmd: /!\[(.+)\]\((.+)\)/,
                block: true,
                callback: function (hook, range, match) {
                    var button;
                    button = this.editor.toolbar.findButton("image");
                    if (button === null || button.disabled) {
                        return;
                    }
                    return button.command(match[2]);
                }
            },
            link: {
                cmd: /\[(.+)\]\((.+)\)|\<((.[^\[\]\(\)]+))\>/,
                block: false,
                callback: function (hook, range, match) {
                    var $link, button;
                    button = this.editor.toolbar.findButton("link");
                    if (button === null || button.disabled) {
                        return;
                    }
                    $link = $("<a/>", {
                        text: match[1] || match[3],
                        href: match[2] || match[4],
                        target: "_blank"
                    });
                    range.deleteContents();
                    range.insertNode($link[0]);
                    this.editor.selection.setRangeAfter($link);
                    this.editor.trigger("valuechanged");
                    return this.editor.trigger("selectionchanged");
                }
            }
        };

        return Markdown;

    })(Plugin);

    Simditor.connect(Markdown);

}).call(this);

(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as anonymous module.
        define(["jquery"], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function ($) {

    "use strict";

    var $window = $(window),
        $document = $(document),
        Datepicker = function (element, options) {
            options = $.isPlainObject(options) ? options : {};
            this.$element = $(element);
            this.defaults = $.extend({}, Datepicker.defaults, this.$element.data(), options);
            this.init();
        };

    Datepicker.prototype = {
        construstor: Datepicker,

        init: function () {
            var trigger = this.defaults.trigger;

            this.$trigger = trigger ? $(trigger) : this.$element;
            this.$picker = $(this.defaults.template);
            this.$years = this.$picker.find("[data-type='years picker']");
            this.$months = this.$picker.find("[data-type='months picker']");
            this.$days = this.$picker.find("[data-type='days picker']");
            this.$picker.appendTo("body");
            this.place();
            this.hide();

            this.format = Datepicker.fn.parseFormat(this.defaults.dateFormat);
            this.fillWeek();
            this.enable();
        },

        enable: function () {

            if (this.enabled) {
                return;
            }

            if (this.$element.is("input")) {
                this.$element.on("keyup", $.proxy(this.update, this));

                if (!this.defaults.trigger) {
                    this.$element.on("focus", $.proxy(this.show, this));
                }
            }

            this.$trigger.on("click", $.proxy(this.show, this));

            this.$picker.on({
                click: $.proxy(this.click, this),
                mousedown: $.proxy(this.mousedown, this)
            });

            this.update();
            this.enabled = true;
        },

        disable: function () {

            if (!this.enabled) {
                return;
            }

            if (this.$element.is("input")) {
                this.$element.off("keyup", this.update);

                if (!this.defaults.trigger) {
                    this.$element.off("focus", this.show);
                }
            }

            this.$trigger.off("click", this.show);

            this.$picker.off({
                click: this.click,
                mousedown: this.mousedown
            });

            this.hide();
            this.enabled = false;
        },

        showView: function (type) {
            var format = this.format;

            if (format.year || format.month || format.day) {
                switch (type) {

                    case 2:
                    case "years":
                        this.$months.hide();
                        this.$days.hide();

                        if (format.year) {
                            this.fillYears();
                            this.$years.show();
                        } else {
                            this.showView(0);
                        }

                        break;

                    case 1:
                    case "months":
                        this.$years.hide();
                        this.$days.hide();

                        if (format.month) {
                            this.fillMonths();
                            this.$months.show();
                        } else {
                            this.showView(2);
                        }

                        break;

                        // case 0: 
                        // case "days": 
                    default:
                        this.$years.hide();
                        this.$months.hide();

                        if (format.day) {
                            this.fillDays();
                            this.$days.show();
                        } else {
                            this.showView(1);
                        }
                }
            }
        },

        hideView: function () {
            if (this.defaults.autoClose) {
                this.hide();
            }
        },

        place: function () {
            var offset = this.$trigger.offset(),
                height = this.$trigger.outerHeight();

            this.$picker.css({
                top: offset.top + height,
                left: offset.left
            });
        },

        show: function () {
            if (!this.enabled) {
                return;
            }

            this.$picker.show();
            $window.on("resize", $.proxy(this.place, this));
            $document.on("mousedown", $.proxy(this.hide, this));

            this.place();
            this.showView(this.defaults.viewStart);
        },

        hide: function () {
            this.$picker.hide();
            $window.off("resize", this.place);
            $document.off("mousedown", this.hide);
        },

        mousedown: function (e) {
            e.stopPropagation();
            e.preventDefault();
        },

        update: function () {
            var viewDate = this.$element.is("input") ? this.$element.prop("value") : this.$element.text();

            this.date = Datepicker.fn.parseDate(viewDate, this.format);
            this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), 0, 0, 0, 0);
            this.fillAll();
        },

        output: function () {
            var $element = this.$element,
                date = Datepicker.fn.formatDate(this.date, this.format);

            if ($element.is("input")) {
                $element.prop("value", date).trigger("change");
            } else {
                $element.text(date);
            }
        },

        template: function (options) {
            var defaults = {
                text: "",
                type: "",
                selected: false,
                disabled: false
            };

            $.extend(defaults, options);

            return [
                '<' + this.defaults.itemTag + ' ',
                (defaults.selected ? 'class="' + this.defaults.selectedClass + '"' :
                defaults.disabled ? 'class="' + this.defaults.disabledClass + '"' : ''),
                (defaults.type ? ' data-type="' + defaults.type + '"' : ''),
                '>',
                defaults.text,
                '</' + this.defaults.itemTag + '>'
            ].join("");
        },

        fillAll: function () {
            this.fillYears();
            this.fillMonths();
            this.fillDays();
        },

        fillYears: function () {
            var title = "",
                items = [],
                suffix = this.defaults.yearSuffix || "",
                year = this.date.getFullYear(),
                viewYear = this.viewDate.getFullYear(),
                isCurrent,
                i;

            title = (viewYear - 5) + suffix + " - " + (viewYear + 6) + suffix;

            for (i = -5; i < 7; i++) {
                isCurrent = (viewYear + i) === year;
                items.push(this.template({
                    text: viewYear + i,
                    type: isCurrent ? "year selected" : "year",
                    selected: isCurrent,
                    disabled: i === -5 || i === 6
                }));
            }

            this.$picker.find("[data-type='years current']").html(title);
            this.$picker.find("[data-type='years']").empty().html(items.join(""));
        },

        fillMonths: function () {
            var title = "",
                items = [],
                options = this.defaults.monthsShort,
                year = this.date.getFullYear(),
                month = this.date.getMonth(),
                viewYear = this.viewDate.getFullYear(),
                isCurrent,
                i;

            title = viewYear.toString() + this.defaults.yearSuffix || "";

            for (i = 0; i < 12; i++) {
                isCurrent = viewYear === year && i === month;

                items.push(this.template({
                    text: options[i],
                    type: isCurrent ? "month selected" : "month",
                    selected: isCurrent
                }));
            }

            this.$picker.find("[data-type='year current']").html(title);
            this.$picker.find("[data-type='months']").empty().html(items.join(""));
        },

        fillWeek: function () {
            var items = [],
                options = this.defaults.daysMin,
                weekStart = parseInt(this.defaults.weekStart, 10) % 7,
                i;

            options = $.merge(options.slice(weekStart), options.slice(0, weekStart));

            for (i = 0; i < 7; i++) {
                items.push(this.template({
                    text: options[i]
                }));
            }

            this.$picker.find("[data-type='week']").empty().html(items.join(""));
        },

        fillDays: function () {
            var title = "",
                items = [],
                prevItems = [],
                currentItems = [],
                nextItems = [],
                options = this.defaults.monthsShort,
                suffix = this.defaults.yearSuffix || "",
                year = this.date.getFullYear(),
                month = this.date.getMonth(),
                day = this.date.getDate(),
                viewYear = this.viewDate.getFullYear(),
                viewMonth = this.viewDate.getMonth(),
                weekStart = parseInt(this.defaults.weekStart, 10) % 7,
                isCurrent,
                isDisabled,
                length,
                date,
                i,
                n;

            // Title of current month
            title = this.defaults.showMonthAfterYear ? (viewYear + suffix + " / " + options[viewMonth]) : options[viewMonth] + " / " + viewYear + suffix;

            // Days of prev month
            length = viewMonth === 0 ? Datepicker.fn.getDaysInMonth(viewYear - 1, 11) : Datepicker.fn.getDaysInMonth(viewYear, viewMonth - 1);

            for (i = 1; i <= length; i++) {
                prevItems.push(this.template({
                    text: i,
                    type: "day prev",
                    disabled: true
                }));
            }

            date = new Date(viewYear, viewMonth, 1, 0, 0, 0, 0); // The first day of current month
            n = (7 + (date.getDay() - weekStart)) % 7;
            n = n > 0 ? n : 7;
            prevItems = prevItems.slice((length - n));

            // Days of prev month next
            length = viewMonth === 11 ? Datepicker.fn.getDaysInMonth(viewYear + 1, 0) : Datepicker.fn.getDaysInMonth(viewYear, viewMonth + 1);

            for (i = 1; i <= length; i++) {
                nextItems.push(this.template({
                    text: i,
                    type: "day next",
                    disabled: true
                }));
            }

            length = Datepicker.fn.getDaysInMonth(viewYear, viewMonth);
            date = new Date(viewYear, viewMonth, length, 0, 0, 0, 0); // The last day of current month
            n = (7 - (date.getDay() + 1 - weekStart)) % 7;
            n = n >= (7 * 6 - (prevItems.length + length)) ? n : n + 7; // 7 * 6 : 7 columns & 6 rows, 42 items
            nextItems = nextItems.slice(0, n);

            // Days of current month
            for (i = 1; i <= length; i++) {
                isCurrent = viewYear === year && viewMonth === month && i === day;
                isDisabled = this.defaults.isDisabled(new Date(viewYear, viewMonth, i));

                currentItems.push(this.template({
                    text: i,
                    type: isDisabled ? "day disabled" : isCurrent ? "day selected" : "day",
                    selected: isCurrent,
                    disabled: isDisabled
                }));
            }

            // Merge all the days
            $.merge(items, prevItems);
            $.merge(items, currentItems);
            $.merge(items, nextItems);

            this.$picker.find("[data-type='month current']").html(title);
            this.$picker.find("[data-type='days']").empty().html(items.join(""));
        },

        click: function (e) {
            var $target = $(e.target),
                yearRegex = /^\d{2,4}$/,
                isYear = false,
                viewYear,
                viewMonth,
                viewDay,
                year,
                type;

            e.stopPropagation();
            e.preventDefault();

            if ($target.length === 0) {
                return;
            }

            viewYear = this.viewDate.getFullYear();
            viewMonth = this.viewDate.getMonth();
            viewDay = this.viewDate.getDate();
            type = $target.data().type;

            switch (type) {
                case "years prev":
                case "years next":
                    viewYear = type === "years prev" ? viewYear - 10 : viewYear + 10;
                    year = $target.text();
                    isYear = yearRegex.test(year);

                    if (isYear) {
                        viewYear = parseInt(year, 10);
                        this.date = new Date(viewYear, viewMonth, Math.min(viewDay, 28), 0, 0, 0, 0);
                    }

                    this.viewDate = new Date(viewYear, viewMonth, Math.min(viewDay, 28), 0, 0, 0, 0);
                    this.fillYears();

                    if (isYear) {
                        this.showView(1);
                        this.output();
                    }

                    break;

                case "year prev":
                case "year next":
                    viewYear = type === "year prev" ? viewYear - 1 : viewYear + 1;
                    this.viewDate = new Date(viewYear, viewMonth, Math.min(viewDay, 28), 0, 0, 0, 0);
                    this.fillMonths();
                    break;

                case "year current":

                    if (this.format.year) {
                        this.showView(2);
                    }

                    break;

                case "year selected":

                    if (this.format.month) {
                        this.showView(1);
                    } else {
                        this.hideView();
                    }

                    break;

                case "year":
                    viewYear = parseInt($target.text(), 10);
                    this.date = new Date(viewYear, viewMonth, Math.min(viewDay, 28), 0, 0, 0, 0);
                    this.viewDate = new Date(viewYear, viewMonth, Math.min(viewDay, 28), 0, 0, 0, 0);

                    if (this.format.month) {
                        this.showView(1);
                    } else {
                        this.hideView();
                    }

                    this.output();
                    break;

                case "month prev":
                case "month next":
                    viewMonth = type === "month prev" ? viewMonth - 1 : type === "month next" ? viewMonth + 1 : viewMonth;
                    this.viewDate = new Date(viewYear, viewMonth, Math.min(viewDay, 28), 0, 0, 0, 0);
                    this.fillDays();
                    break;

                case "month current":

                    if (this.format.month) {
                        this.showView(1);
                    }

                    break;

                case "month selected":

                    if (this.format.day) {
                        this.showView(0);
                    } else {
                        this.hideView();
                    }

                    break;

                case "month":
                    viewMonth = $target.parent().children().index($target);
                    this.date = new Date(viewYear, viewMonth, Math.min(viewDay, 28), 0, 0, 0, 0);
                    this.viewDate = new Date(viewYear, viewMonth, Math.min(viewDay, 28), 0, 0, 0, 0);

                    if (this.format.day) {
                        this.showView(0);
                    } else {
                        this.hideView();
                    }

                    this.output();
                    break;

                case "day prev":
                case "day next":
                case "day":
                    viewMonth = type === "day prev" ? viewMonth - 1 : type === "day next" ? viewMonth + 1 : viewMonth;
                    viewDay = parseInt($target.text(), 10);
                    this.date = new Date(viewYear, viewMonth, viewDay, 0, 0, 0, 0);
                    this.viewDate = new Date(viewYear, viewMonth, viewDay, 0, 0, 0, 0);
                    this.fillDays();

                    if (type === "day") {
                        this.hideView();
                    }

                    this.output();
                    break;

                case "day selected":
                    this.hideView();
                    this.output();
                    break;

                case "day disabled":
                    this.hideView();
                    break;

                    // No default 
            }
        }
    };

    // Common methods
    Datepicker.fn = {
        isLeapYear: function (year) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        },

        getDaysInMonth: function (year, month) {
            return [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
        },

        parseFormat: function (format) {
            var separator = format.match(/[.\/\-\s].*?/) || "/",
                parts = format.split(/\W+/),
                length,
                i;

            if (!parts || parts.length === 0) {
                throw new Error("Invalid date format.");
            }

            format = {
                separator: separator[0],
                parts: parts
            };

            for (i = 0, length = parts.length; i < length; i++) {
                switch (parts[i]) {
                    case "dd":
                    case "d":
                        format.day = true;
                        break;

                    case "mm":
                    case "m":
                        format.month = true;
                        break;

                    case "yyyy":
                    case "yy":
                        format.year = true;
                        break;

                        // No default 
                }
            }

            return format;
        },

        parseDate: function (date, format) {
            var parts,
                length,
                year,
                day,
                month,
                val,
                i;

            parts = typeof date === "string" && date.length > 0 ? date.split(format.separator) : [];
            length = format.parts.length;

            date = new Date();
            year = date.getFullYear();
            day = date.getDate();
            month = date.getMonth();

            if (parts.length === length) {
                for (i = 0; i < length; i++) {
                    val = parseInt(parts[i], 10) || 1;

                    switch (format.parts[i]) {
                        case "dd":
                        case "d":
                            day = val;
                            break;

                        case "mm":
                        case "m":
                            month = val - 1;
                            break;

                        case "yy":
                            year = 2000 + val;
                            break;

                        case "yyyy":
                            year = val;
                            break;

                            // No default 
                    }
                }
            }

            return new Date(year, month, day, 0, 0, 0, 0);
        },

        formatDate: function (date, format) {
            var val = {
                d: date.getDate(),
                m: date.getMonth() + 1,
                yy: date.getFullYear().toString().substring(2),
                yyyy: date.getFullYear()
            },
                parts = [],
                length = format.parts.length,
                i;

            val.dd = (val.d < 10 ? "0" : "") + val.d;
            val.mm = (val.m < 10 ? "0" : "") + val.m;

            for (i = 0; i < length; i++) {
                parts.push(val[format.parts[i]]);
            }

            return parts.join(format.separator);
        }
    };

    Datepicker.defaults = {
        autoClose: false,
        dateFormat: "mm/dd/yyyy",
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        disabledClass: "datepicker-disabled",

        isDisabled: function ( /* date */) {
            return false;
        },

        itemTag: "li",
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        selectedClass: "datepicker-selected",
        showMonthAfterYear: false,
        template: [
            '<div class="datepicker-container" data-type="datepicker">',
                '<div class="datepicker-arrow"></div>',
                '<div class="datepicker-content">',
                    '<div class="content-years" data-type="years picker">',
                        '<ul class="datepicker-title">',
                            '<li class="datepicker-prev" data-type="years prev">&lsaquo;</li>',
                            '<li class="col-5" data-type="years current"></li>',
                            '<li class="datepicker-next" data-type="years next">&rsaquo;</li>',
                        '</ul>',
                        '<ul class="datepicker-years" data-type="years"></ul>',
                    '</div>',
                    '<div class="content-months" data-type="months picker">',
                        '<ul class="datepicker-title">',
                            '<li class="datepicker-prev" data-type="year prev">&lsaquo;</li>',
                            '<li class="col-5" data-type="year current"></li>',
                            '<li class="datepicker-next" data-type="year next">&rsaquo;</li>',
                        '</ul>',
                        '<ul class="datepicker-months" data-type="months"></ul>',
                    '</div>',
                    '<div class="content-days" data-type="days picker">',
                        '<ul class="datepicker-title">',
                            '<li class="datepicker-prev" data-type="month prev">&lsaquo;</li>',
                            '<li class="col-5" data-type="month current"></li>',
                            '<li class="datepicker-next" data-type="month next">&rsaquo;</li>',
                        '</ul>',
                        '<ul class="datepicker-week" data-type="week"></ul>',
                        '<ul class="datepicker-days" data-type="days"></ul>',
                    '</div>',
                '</div>',
            '</div>'
        ].join(""),
        trigger: undefined,
        viewStart: 0, // 0 for "days", 1 for "months", 2 for "years"
        weekStart: 0, // 0 for Sunday, 1 for Monday, 2 for Tuesday, 3 for Wednesday, 4 for Thursday, 5 for Friday, 6 for Saturday
        yearSuffix: ""
    };

    Datepicker.setDefaults = function (options) {
        $.extend(Datepicker.defaults, options);
    };

    // Register as jQuery plugin
    $.fn.datepicker = function (options) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data("datepicker");

            if (!data) {
                data = new Datepicker(this, options);
                $this.data("datepicker", data);
            }

            if (typeof options === "string" && $.isFunction(data[options])) {
                data[options]();
            }
        });
    };

    $.fn.datepicker.Constructor = Datepicker;
    $.fn.datepicker.setDefaults = Datepicker.setDefaults;

    $(function () {
        $("[datepicker]").datepicker();
    });

}));

(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {

    "use strict";

    $.fn.datepicker.setDefaults({
        autoClose: true,
        dateFormat: "yyyy-mm-dd",
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        daysMin: ["日", "一", "二", "三", "四", "五", "六"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        showMonthAfterYear: true,
        viewStart: 0, // days
        weekStart: 0, // Monday
        yearSuffix: "年"
    });
}));

$(document).ready(function () {
    // 日期选择
    $(".datepicker").datepicker();

    $(".comment-list .comment").hover(function () {
        $(this).find(".comment-date").hide();
        $(this).find(".comment-reply-link").show();
    }, function () {
        $(this).find(".comment-date").show();
        $(this).find(".comment-reply-link").hide();
    });

    $(".comment-list .comment .comment-reply-link a").on("click", function () {
        var parent = $(this).parent().parent().parent().parent();
        $("#comment-context").val(parent.html());
        alert($("#comment-context").val());
    });

    $(".selecter").selecter();

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

});