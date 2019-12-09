$(function(){

    $('#slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		arrows: false,
		draggable: false,
		dots: true
		
	});

	/* form */
	const login = $(".js-login")[0];

	
	$('.js-sub').on('click', function(){
		console.log(123);
		if(login.validity.valid === false) {
			login.setCustomValidity("Логин может содержать только латинские буквы и должен состоять минимум из 5 символов");
		}
	});
	$('.js-login').on('input', function () {
		login.setCustomValidity('');		
	});

	/* li */
	

});