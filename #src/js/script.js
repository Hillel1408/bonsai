$(document).ready(function(){

	$('.reviews__columns').slick({
		dots: true,
		arrows : false,
		slidesToShow:2,
		responsive:[
			{
				breakpoint: 730,
				settings:{
					slidesToShow:1
				}
			}
		]
	});
	$('.recent-posts__list').slick({
		slidesToShow:3,
		
	})

	$('.work__tabs-tab').on('click', function(){
		var $this = $(this);
		if (!$this.is('.work__tabs-tab_active'))
		{
			$('.work__tabs-tab').removeClass('work__tabs-tab_active');
			$this.addClass('work__tabs-tab_active');
			$('.work__content').removeClass('flex');
			$('.work__content[data-id='+$this.data('id')+']').addClass('flex');
		}
		return false;
	});

});