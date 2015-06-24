$(document).ready(function(){
	$("#button2").hide();
	$("#par2").hide();

    $("#button1").click(function(){
        $("#par2").show();
        $("#button2").show();
        $("#button1").hide();
    });

    $("#button2").click(function(){
        $("#par2").hide();
        $("#button2").hide();
        $("#button1").show();
    });
});