$(document).ready(function(){
	// setTimeout(() => {
		$(".searchform").submit(function(event){
			event.preventDefault();
			var number = $(this).find("input[name='search']").val();
			window.location.href = base_url+"number/"+number;
		});
	// }, 500);
});