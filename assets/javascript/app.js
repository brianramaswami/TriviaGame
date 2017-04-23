
//START OVER
function restart() {
	
}

//START
function initialize() {
	$("#START").show();
	$("#displayTime").hide();
	$(".questions").hide();

}

function start(){
	initialize();
	// $("#START").click(function(){
		$("#START").hide();
		$("#displayTime").show();
		$(".questions").show();		
	// });
}


$(document).ready(function(){
	start();
});


