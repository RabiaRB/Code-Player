
function updateOutput(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssDisplay").val() + "</style></head><body>" + $("#htmlDisplay").val() + "</body></html>");

    document.getElementById("outputDisplay").contentWindow.eval($("#jsDisplay").val());
};

$(document).ready(function() {
    setInterval(function(){
        $( "#subtitle" ).effect( "fade", "linear", "slow" );
}, 1000);
});