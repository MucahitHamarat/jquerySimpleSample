$("p").css({ "color": "red", "text-decoration": "underline" });
$("a").attr("href", "https://www.hepsiburada.com");
$(".div1").css({ "background-image": "url('/images/pic01.jpg')", "width": "400px", "height": "250px","background-repeat":"no-repeat" }); 
$(".b1").css({ "height":"75px","top": "0", "left": "500px" ,"position":"absolute"});
$(".b2").css({ "height": "75px", "top": "0", "left": "600px", "position": "absolute" });
$(".b3").css({ "height": "75px", "top": "0", "left": "700px", "position": "absolute" });



    function hareket1() {
        //$(".div1").fadeIn(1000);
        $(".div1").slideUp(2000);
       
    }
    ;

    function hareket2() {
        //$(".div1").fadeOut(2000);
        $(".div1").slideDown(1500);
        $(".div1").css("visibility", "visible");
    }
    ;
    function hareket3() {
        //$(".div1").fadeToggle(2000);
        $(".div1").slideToggle(2000);
    }
;
function goster() {
    $(".div1").css("visibility","visible")
};

    $(document).ready(function(){
        $("p").click(function () {
            $(this).hide();
        });
    });


