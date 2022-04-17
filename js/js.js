function slideShow(index){
	var slides = $(".slider");
	var dots = $(".dot");
	$(".slider.activeslide").removeClass("activeslide");
	$(".dot.activedot").removeClass("activedot");
	slides[index-1].classList.add("activeslide");
	dots[index-1].classList.add("activedot");
}
$(document).ready(function() {
	$("#form").validate({
		rules: {
			name:{
				required: true,
				minlength: 8
			},
			email:"required",
			subbject:"required",
			texts:"required"
		},
		messages: {
			name:{
				required: "Fullname not null!",
				minlength: "Name more than 8 character!"
			}
		}
	})
	$("#form-send").validate({
		rules: {
			yourname:{
				required: true,
				minlength: 8
			},
			youremail:"required",
			message:"required",
		},
		messages: {
			yourname:{
				required: "Fullname not null!",
				minlength: "Name more than 8 character!"
			}
		}
	})
	$(".btn-quest").click(function(){
		var thisClassName = $(this).children("button").children("i").attr("class");
		if (thisClassName == "fa fa-minus") {
			$(this).children("button").children("i").removeClass("fa-minus").addClass("fa-plus");
			$(this).parent().next(".question-content").slideUp();
		} else{
			$(".btn-quest").children().children().removeClass("fa-minus").addClass("fa-plus");
			$(".question-content").slideUp();
			$(this).children("button").children("i").removeClass("fa-plus").addClass("fa-minus");
			$(this).parent().next(".question-content").slideDown();
		}
	})
	$(".bar").click(function(){
		$(this).children().toggleClass("fa-bars").toggleClass("fa-times")
		$(".hide-show").slideToggle(1000);
	})
});

