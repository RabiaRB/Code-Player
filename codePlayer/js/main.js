
function updateOutput(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssDisplay").val() + "</style></head><body>" + $("#htmlDisplay").val() + "</body></html>");

    document.getElementById("outputDisplay").contentWindow.eval($("#jsDisplay").val());
};

$(document).ready(function() {
    setInterval(function(){
        $( "#subtitle" ).effect( "fade", "linear", "slow" );
}, 1000);
});

$(".button").hover(function(){
    $(this).toggleClass("highlightedButton");
});

$(".button").click(function(){
    $(this).toggleClass("selectedButton");
    var buttonId = $(this).attr("id");
    var displayId = buttonId.replace("Button", "Display");
    $("#" + displayId).toggleClass("hidden");
    var activeDisplay = 4 - $('.hidden').length;
    $(".displayPanel").width(($(window).width() / activeDisplay) - 8);
    
})

$(".displayPanel").height($(window). height() - $(".header").height());
$(".displayPanel").width(($(window). width() / 2) - 6);
            
updateOutput();
       
$("textarea").on('change keyup paste', function(){

    updateOutput();
}) 