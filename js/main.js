$(function(){
	$("[data-toggle='tooltip']").tooltip();
	$("[href='#']").click(function(e){
		e.preventDefault();
	});
	$("textarea,input[type='text']").attr({
		spellcheck : "false",
		autocomplete : "off"
	});

	$("img").click(function(e){
		var path = e.target.src;
		var tag = "<img src='"+path+"' alt='img' class='d-block w-100'>";
		$("#modal-body").html(tag);
	});

	/*Hide post from profile*/
	function hide(s){
		if (s < 768) {
			$("#post-side").css({
				display : "none"
			});
		}else{
			$("#post-side").css({
				display : "block"
			});
		}
	}
	var w = $(window).width();
	$(document).ready(function(){
		hide(w);
	});
	$(window).resize(function(){
		var s = $(window).width()
		hide(s);
	});
});