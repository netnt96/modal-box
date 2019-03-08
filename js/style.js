$(document).ready(function () {

    var modal = $("#myModal");
    var btn = $("#myBtn");
    var close = $(".close");

    btn.click(function () {
        modal.show();
        $(".modal-dialog").animate({
            top: "15%",
            opacity : '1'
        });
    })

    close.click(function () {
        modal.hide();
        $(".modal-dialog").animate({
            transition: 'all 0.6s',
            top: "-100%",
            opacity : '0'
          
        });
    })
 
    $(this).click(function (event) {           
        if (!$(event.target).closest(".modal-dialog, #myBtn").length) {
            $("body").find(".modal").css('display',"none");
            $("body").find(".modal-dialog").animate({
                transition: 'all 0.6s',
                top: "-100%",
                opacity : '0'
            });
        }
    });

    

});