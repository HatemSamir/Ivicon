// search filters
$(document).ready(function(){
		$(".filter-btn").click(function(){
			$(".filters").slideToggle("slow");
			$(this).toggleClass('active');
		});
});
