//press "PLAY" button triggered function
function play(){
	var len = $('.game-mode-button').length;
	if($('.game-mode').attr('style') == 'opacity:0')
	{
		$('.game-mode').attr('style', 'opacity:1');

		var interval = 100;
		// to make easy-normal-hard sequencely appear
		$($('.game-mode-button')[0]).attr('style', 'opacity:1');
		$($('.game-mode-button')[0]).addClass('animated fadeInRight');
		setTimeout(function(){
			$($('.game-mode-button')[1]).attr('style', 'opacity:1');
			$($('.game-mode-button')[1]).addClass('animated fadeInRight');
		}, interval * 1);
		setTimeout(function(){
			$($('.game-mode-button')[2]).attr('style', 'opacity:1');
			$($('.game-mode-button')[2]).addClass('animated fadeInRight');
		}, interval * 2);

		setTimeout(function(){
			for(var i = 0; i < len; i++)
			{
				$($('.game-mode-button')[i]).removeClass('fadeInRight');
			}
		}, 1500);

		setTimeout(function(){
			for(var i = 0; i < len; i++)
			{
				$($('.game-mode-button')[i]).attr('style', 'cursor:pointer');
			}
			$($('.game-mode-button')[0]).attr('onclick', "window.location.href='hangman-easy-mode.html';");
			$($('.game-mode-button')[1]).attr('onclick', "window.location.href='hangman-normal-mode.html';");
			$($('.game-mode-button')[2]).attr('onclick', "window.location.href='hangman-hard-mode.html';");
		}, 500);
	}
	else
	{
		// disappear
		$('.game-mode').addClass('animated fadeOut');

		setTimeout(function(){
			$('.game-mode').attr('style','opacity:0');
			$('.game-mode').removeClass('fadeOut');
			for(var i = 0; i < len; i++)
			{
				$($('.game-mode-button')[i]).attr('style','opacity:0;cursor:default');
				$($('.game-mode-button')[i]).attr('onclick', "") ;
			}
		}, 300);

	}
}
$('#play-button').attr('onclick', "play()");