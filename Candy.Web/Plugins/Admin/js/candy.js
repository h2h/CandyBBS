$(document).ready(function () {
    $('#my-task-list').popover({
        html: true,
        content: function () {
            return $('#notification-list').html();
        }
    });
    //**********************************BEGIN MAIN MENU********************************
    jQuery('.page-sidebar li > a').on('click', function (e) {
        if ($(this).next().hasClass('sub-menu') == false) {
            return;
        }
        var parent = $(this).parent();

        if ($(this).parent().hasClass("open")) {
            parent.removeClass("open");
        }
        else
        {
            parent.parent().children("li.open").removeClass("open");
            parent.addClass("open");
        }
        e.preventDefault();
    });

    jQuery('.alert .close').on("click", function (e) {
        $(this).parent().hide();
        e.preventDefault();
    });
    jQuery('.alert').delay(1800).fadeOut();

});