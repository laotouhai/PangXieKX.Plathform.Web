export default () => {
    var c = $("#sidebar").hasClass("menu-min");
    var b = navigator.userAgent.match(/OS (5|6|7)(_\d)+ like Mac OS X/i);
    $(".nav-list").on(ace.click_event,
    function(h) {
        var g = $(h.target).closest("a");
        if (!g || g.length == 0) {
            return
        }
        c = $("#sidebar").hasClass("menu-min");
        if (!g.hasClass("dropdown-toggle")) {
            if (c && ace.click_event == "tap" && g.get(0).parentNode.parentNode == this) {
                var i = g.find(".menu-text").get(0);
                if (h.target != i && !a.contains(i, h.target)) {
                    return false
                }
            }
            if (b) {
                document.location = g.attr("href");
                return false
            }
            return
        }
        var f = g.next().get(0);
        if (!$(f).is(":visible")) {
            var d = $(f.parentNode).closest("ul");
            if (c && d.hasClass("nav-list")) {
                return
            }
            d.find("> .open > .submenu").each(function() {
                if (this != f && !$(this.parentNode).hasClass("active")) {
                    $(this).slideUp(200).parent().removeClass("open")
                }
            })
        } else {}
        if (c && $(f.parentNode.parentNode).hasClass("nav-list")) {
            return false
        }
        $(f).slideToggle(200).parent().toggleClass("open");
        return false
    })
}