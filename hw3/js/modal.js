(function($){
	$('a[dataName]').live('click', function(e){
		e.preventDefault();
		var modalLocation = $(this).attr('dataName');
		$('#'+modalLocation).reveal($(this).data());
	});
    $.fn.reveal = function(options){
        var init = {
		    animationspeed: 300,
		    closeonbackgroundclick: true,
		    dismissmodalclass: 'closeModal',
    	}; 

        var options = $.extend({}, init, options); 
	
        return this.each(function() {
        	var modal = $(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = $('.modal_background');
			if(modalBG.length == 0)
			{
				modalBG = $('<div class="modal_background" />').insertAfter(modal);
			}

			modal.bind('reveal:open', function () {
			  modalBG.unbind('click.modalEvent');
				$('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
					modalBG.fadeIn(options.animationspeed/2);
					modal.delay(options.animationspeed/2).animate({
						"top": $(document).scrollTop()+topMeasure + 'px',
						"opacity" : 1
					}, options.animationspeed,unlockModal());		
				}
				modal.unbind('reveal:open');
			});

			modal.bind('reveal:close', function () {
			  if(!locked) {
					lockModal();
					modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
					modal.animate({
						"top":  $(document).scrollTop()-topOffset + 'px',
						"opacity" : 0
					}, options.animationspeed/2, function() {
						modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
						unlockModal();
					});	
				}
				modal.unbind('reveal:close');
			});
    	modal.trigger('reveal:open')
			var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
			  modal.trigger('reveal:close')
			});
			
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent', function () {
				  modal.trigger('reveal:close')
				});
			}
			$('body').keyup(function(e) {
				var closeKey = 27;
        		if(e.which === closeKey)
        		{
        			modal.trigger('reveal:close');
        		}
			});

			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });
    }
})(jQuery);
        
