$(function () {
    $(".header .menu-btn").on("click", function () {
        $("body").toggleClass("menu-open");
        return false;
    });
});