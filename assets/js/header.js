$(document).ready(function() {

    // Shrink header on scroll down
    $(document).on("scroll", function(){
        if($(document).scrollTop() > 50) {
            $("header").attr("id", "shrink");
            $("#logo").css("opacity", "1");
        }
        else {
            $("header").removeAttr("id", "shrink");
            $("#logo").css("opacity", "0");
        }
    });

    // Smooth scroll on hash links
    $('a').click(function(evt) {
        var $target = $(evt.target.hash);
            if ($target.length === 1) {
                if($('#endpoint-index').length != 0) {
                    $("#navbar").removeClass("in");
                    $("#toggle-button").addClass("collapsed");
                }
                if($(document).scrollTop() < 50) {
                    $('html, body').animate({
                        scrollTop: $target.offset().top - 96
                    }, 500);
                }
                else {
                    $('html, body').animate({
                        scrollTop: $target.offset().top - 58
                    }, 500);
                }

                evt.preventDefault();
                evt.stopImmediatePropagation();
            }
    });
});
