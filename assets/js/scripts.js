$(document).ready(function() {
	$("#menu-toggle").click(function(e) {
	  e.preventDefault();
	  $("#wrapper").toggleClass("toggled");
	});

	$(".glyphicon-menu-hamburger").hover(function() {
	  $(this).toggleClass("hover");
	},
	function() {
	  $(this).toggleClass("hover");
	});
});
