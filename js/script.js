$(document).ready(function() {
	$("#start").click(function() {
		$(this).parents('.jumbotron').hide().next().show();
		start_timer();
		start_game();
	});

	$(".avocado").click(function(e) {
		add_score(this);
	});

	function start_timer() {
		time=25;
		var timer = setInterval(function() {
			time--;
			if(time>0)
				$("#time").html("00:"+time);
			else {
				clearInterval(timer);
				end_game();
			}
			if(time<10) {
				$("#time").css('color','red');
				setTimeout(function() {
					$("#time").toggle();
				},500);
			}
		},1000);
	}

	function start_game() {
		var game = setInterval(function() {
			$(".avocado").hide();
			let rand = Math.floor(Math.random() * 5) + 1;
			$(".avocado").eq(rand).show();
		},800);
	}

	function end_game() {
		$("#final_score").html($("#score").html());
		$("#game").hide().next().show();
	}

	function add_score(element) {
		$(element).attr('src','./img/guac.png');
		$("#score").html(+$("#score").html()+5);
		setTimeout(function() {
			$(element).hide().attr('src','./img/avocado.png');
		},400);
	}
});