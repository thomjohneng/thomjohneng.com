window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

var scroll1 = $(document).ready(function() {
	$(window).scroll(function() {
		if ($(document).scrollTop() > 180) {
			$('#header').addClass('scrolled');
		} else {
			$('#header').removeClass('scrolled');
		};
	});
});

var scroll2 = $(document).ready(function() {
	$(window).scroll(function() {
		if ($(document).scrollTop() > 1500) {
			$('#info').addClass('scrolled');
			if ($('#aboutBox').hasClass('fadeIn')) {
				$('#aboutBox').toggleClass('fadeIn').toggleClass('fadeOut');
				$('#about').toggleClass('clicked');
				$('#work, #passions, #values').toggleClass('transparent');
				setTimeout(function() {
					$('#aboutBox').css('display', 'none');
				},800);
			};
			if ($('#workBox').hasClass('fadeIn')) {
				$('#workBox').toggleClass('fadeIn').toggleClass('fadeOut');
				$('#work').toggleClass('clicked');
				$('#about, #passions, #values').toggleClass('transparent');
				setTimeout(function() {
					$('#workBox').css('display', 'none');
				},800);
			};
			if ($('#passionsBox').hasClass('fadeIn')) {
				$('#passionsBox').toggleClass('fadeIn').toggleClass('fadeOut');
				$('#passions').toggleClass('clicked');
				$('#about, #work, #values').toggleClass('transparent');
				setTimeout(function() {
					$('#passionsBox').css('display', 'none');
				},800);
			};
			if ($('#valuesBox').hasClass('fadeIn')) {
				$('#valuesBox').toggleClass('fadeIn').toggleClass('fadeOut');
				$('#values').toggleClass('clicked');
				$('#about, #work, #passions').toggleClass('transparent');
				setTimeout(function() {
					$('#valuesBox').css('display', 'none');
				},800);
			};
		} else {
			$('#info').removeClass('scrolled');
		};
	});
});

var about = $(document).ready(function() {
	$('#about').click(function() {
		$(this).toggleClass('clicked');
		$('#work, #passions, #values').toggleClass('transparent');
		if ($('#aboutBox').hasClass('fadeIn')) {
			$('#aboutBox').toggleClass('fadeIn').toggleClass('fadeOut');
			setTimeout(function() {
				$('#aboutBox').css('display','none');
			},800);
		} else if ($('#aboutBox').hasClass('fadeOut')) {
			setTimeout(function() {
				$('#aboutBox').toggleClass('fadeOut').toggleClass('fadeIn').css('display','block');
			},800);
		} else {
			setTimeout(function() {
				$('#aboutBox').toggleClass('fadeIn').css('display','block');
			},800);
		};
		if ($('#work').hasClass('clicked')) {
			$('#about, #passions, #values').toggleClass('transparent');
			$('#work').toggleClass('clicked');
			if ($('#workBox').hasClass('fadeIn')) {
				$('#workBox').toggleClass('fadeIn').toggleClass('fadeOut');
				setTimeout(function() {
					$('#workBox').css('display','none');
				},500);
			};
		};
		if ($('#passions').hasClass('clicked')) {
			$('#about, #work, #values').toggleClass('transparent');
			$('#passions').toggleClass('clicked');
			if ($('#passionsBox').hasClass('fadeIn')) {
				$('#passionsBox').toggleClass('fadeIn').toggleClass('fadeOut');
				setTimeout(function() {
					$('#passionsBox').css('display','none');
				},500);
			};
		};
		if ($('#values').hasClass('clicked')) {
			$('#about, #work, #passions').toggleClass('transparent');
			$('#values').toggleClass('clicked');
			if ($('#valuesBox').hasClass('fadeIn')) {
				$('#valuesBox').toggleClass('fadeIn').toggleClass('fadeOut');
				setTimeout(function() {
					$('#valuesBox').css('display','none');
				},500);
			};
		};
	});
});
var work = $(document).ready(function() {
	$('#work').click(function() {
		$(this).toggleClass('clicked');
		$('#about, #passions, #values').toggleClass('transparent');
		if ($('#workBox').hasClass('fadeIn')) {
			$('#workBox').toggleClass('fadeIn').toggleClass('fadeOut');
			setTimeout(function() {
				$('#workBox').css('display','none');
			},800);
		} else if ($('#workBox').hasClass('fadeOut')) {
			setTimeout(function() {
				$('#workBox').toggleClass('fadeOut').toggleClass('fadeIn').css('display','block');
			},800);
		} else {
			setTimeout(function() {
				$('#workBox').toggleClass('fadeIn').css('display','block');
			},800);
		};
		if ($('#about').hasClass('clicked')) {
			$('#work, #passions, #values').toggleClass('transparent');
			$('#about').toggleClass('clicked');
			if ($('#aboutBox').hasClass('fadeIn')) {
				$('#aboutBox').toggleClass('fadeIn').toggleClass('fadeOut');
				setTimeout(function() {
					$('#aboutBox').css('display','none');
				},500);
			};
		};
		if ($('#passions').hasClass('clicked')) {
			$('#about, #work, #values').toggleClass('transparent');
			$('#passions').toggleClass('clicked');
			if ($('#passionsBox').hasClass('fadeIn')) {
				$('#passionsBox').toggleClass('fadeIn').toggleClass('fadeOut');
				setTimeout(function() {
					$('#passionsBox').css('display','none');
				},500);
			};
		};
		if ($('#values').hasClass('clicked')) {
			$('#about, #work, #passions').toggleClass('transparent');
			$('#values').toggleClass('clicked');
			if ($('#valuesBox').hasClass('fadeIn')) {
				$('#valuesBox').toggleClass('fadeIn').toggleClass('fadeOut');
				setTimeout(function() {
					$('#valuesBox').css('display','none');
				},500);
			};
		};
	});
});
var passions = $(document).ready(function() {
	$('#passions').click(function() {
		$(this).toggleClass('clicked');
		$('#about, #work, #values').toggleClass('transparent');
		if ($('#passionsBox').hasClass('fadeIn')) {
			$('#passionsBox').toggleClass('fadeIn').toggleClass('fadeOut');
			setTimeout(function() {
				$('#passionsBox').css('display','none');
			},800);
		} else if ($('#passionsBox').hasClass('fadeOut')) {
			setTimeout(function() {
				$('#passionsBox').toggleClass('fadeOut').toggleClass('fadeIn').css('display','block');
			},800);
		} else {
			setTimeout(function() {
				$('#passionsBox').toggleClass('fadeIn').css('display','block');
			},800);
		};
		if ($('#about').hasClass('clicked')) {
			$('#work, #passions, #values').toggleClass('transparent');
			$('#about').toggleClass('clicked');
			if ($('#aboutBox').hasClass('fadeIn')) {
				$('#aboutBox').toggleClass('fadeIn').toggleClass('fadeOut');
				setTimeout(function() {
					$('#aboutBox').css('display','none');
				},500);
			};
		};
		if ($('#work').hasClass('clicked')) {
			$('#about, #passions, #values').toggleClass('transparent');
			$('#work').toggleClass('clicked');
			if ($('#workBox').hasClass('fadeIn')) {
				$('#workBox').toggleClass('fadeIn').toggleClass('fadeOut');
				setTimeout(function() {
					$('#workBox').css('display','none');
				},500);
			};
		};
		if ($('#values').hasClass('clicked')) {
			$('#about, #work, #passions').toggleClass('transparent');
			$('#values').toggleClass('clicked');
			if ($('#valuesBox').hasClass('fadeIn')) {
				$('#valuesBox').toggleClass('fadeIn').toggleClass('fadeOut');
				setTimeout(function() {
					$('#valuesBox').css('display','none');
				},500);
			};
		};
	});
});
var values = $(document).ready(function() {
	$('#values').click(function() {
		$(this).toggleClass('clicked');
		$('#about, #work, #passions').toggleClass('transparent'); 
		if ($('#valuesBox').hasClass('fadeIn')) {
			$('#valuesBox').toggleClass('fadeIn').toggleClass('fadeOut');
			setTimeout(function() {
				$('#valuesBox').css('display','none');
			},800);
		} else if ($('#valuesBox').hasClass('fadeOut')) {
			setTimeout(function() {
				$('#valuesBox').toggleClass('fadeOut').toggleClass('fadeIn').css('display','block');
			},800);
		} else {
			setTimeout(function() {
				$('#valuesBox').toggleClass('fadeIn').css('display','block');
			},800);
		};
		if ($('#about').hasClass('clicked')) {
			$('#work, #passions, #values').toggleClass('transparent');
			$('#about').toggleClass('clicked');
			if ($('#aboutBox').hasClass('fadeIn')) {
				$('#aboutBox').toggleClass('fadeIn').toggleClass('fadeOut');
				setTimeout(function() {
					$('#aboutBox').css('display','none');
				},500);
			};
		};
		if ($('#work').hasClass('clicked')) {
			$('#about, #passions, #values').toggleClass('transparent');
			$('#work').toggleClass('clicked');
			if ($('#workBox').hasClass('fadeIn')) {
				$('#workBox').toggleClass('fadeIn').toggleClass('fadeOut');
				setTimeout(function() {
					$('#workBox').css('display','none');
				},500);
			};
		};
		if ($('#passions').hasClass('clicked')) {
			$('#about, #work, #values').toggleClass('transparent');
			$('#passions').toggleClass('clicked');
			if ($('#passionsBox').hasClass('fadeIn')) {
				$('#passionsBox').toggleClass('fadeIn').toggleClass('fadeOut');
				setTimeout(function() {
					$('#passionsBox').css('display','none');
				},500);
			};
		};
	});
});

