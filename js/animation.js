$(document).ready(function() {
    $(window).on("scroll", function(){
        var w_top = $(window).scrollTop();
        var e_top = $("#prototype-animation").offset().top;
        
        console.log(w_top + " " + e_top)
        
        if (w_top >= e_top) {
            $("#12345").addClass("prototype-svg-2-anim");
        }
        
        
    })
})