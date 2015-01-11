$(document).ready(function(){
	$('.CreateGrid').click(function(){
	height=$('.gridHeight').val();
	width=$('.gridWidth').val();
	for(i=1;i<=height;i++){
		for(j=1;j<=width;j++){
		$('#grid').append("<div class='mainGrid'></div>");
		}
		$('#grid').append("<br>");
	}
});

$('body').on('mouseenter', 'div.mainGrid', function() {
   
   var color=$(this).css('background-color');
   if(color=="rgb(230, 230, 255)")
	 $(this).css("background-color","rgb(204, 204, 255)");
    if(color=="rgb(204, 204, 255)")
	 $(this).css("background-color","rgb(178, 178, 255)");
    if(color=="rgb(178, 178, 255)")
	 $(this).css("background-color","rgb(153, 153, 255)");
    if(color=="rgb(153, 153, 255)")
	 $(this).css("background-color","rgb(102, 102, 255)");
    if(color=="rgb(102, 102, 255)")
	 $(this).css("background-color","rgb(77, 77, 255)");
    if(color=="rgb(77, 77, 255)")
	 $(this).css("background-color","rgb(51, 51, 255)");
    if(color=="rgb(51, 51, 255)")
	 $(this).css("background-color","rgb(25, 25, 255)");
	if(color=="rgb(25, 25, 255)")
	 $(this).css("background-color","rgb(0, 0, 255)");

});
$('.clearGrid').click(function(){
	$('div.mainGrid').css("background-color","rgb(230, 230, 255)");
});

$('.ResetGrid').click(function(){
	$('div.mainGrid').remove();
	$('.gridHeight').val("");
	$('.gridWidth').val("");
});
})
