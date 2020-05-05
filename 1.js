$(document).ready(function() {
	let btn = document.getElementsByClassName('post');
	let access = document.getElementById('form-access');
	let frame = document.getElementsByClassName('frame');
	$(btn).on('click',function(event) {

		event.preventDefault();
		var content = ("<div class='content-access'><i class='far fa-thumbs-up'></i><p class='thanks'>Thanks for feedback</p></div><div class='btn-getback'><button id='getback'>Back</button></div>");
		$('.wrapper').addClass('no-bg');
		$(frame).addClass('no-display');
		if($(access).hasClass('no-display')){
			$(access).removeClass('no-display');
		}else{
			$(access).toggleClass('display-access').append(content);
		}

		let backBtn = document.getElementById('getback');
		$(backBtn).on('click', function(event){
			event.preventDefault();
			if($(frame).hasClass('no-display')){
				$(frame).removeClass('no-display');
				$(access).addClass('no-display');
			}
			$('.wrapper').removeClass('no-bg');
		});

	});
});