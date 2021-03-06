/* home javascript*/

window.onload = function(){
	//第一页
	(function(){
		var $black = $('#black').children(),
		$enterBtn = $('#enter-btn'),
		$logo = $('#logo'),
		$qrcode = $('#qrcode'),
		windowHeight = document.documentElement.clientHeight,
		left1 = document.documentElement.clientWidth,
		$indexQuyu = $('#index'),
		$header = $('#header'),
		$nav = $('#header .nav ul ol p');

		var $clickqrcode = $qrcode.find('h1'),
		ifQrHide = true;
	
		blackHeight = windowHeight/$black.length;
		blackTop = $black*blackHeight;
		$black.each(function(){
			$index = $(this).index();
			$(this).css({
				'top' : $index * blackHeight,
				'height' : blackHeight
			});
		});
		$black.eq(1).animate({
			'left' : left1 + 'px'
		},2000,function(){
			$(this).css({
				'display':'none'
			});
		});
		$black.eq(2).animate({
			'right' : left1 + 'px'
		},2000,function(){
			$(this).css({
				'display':'none'
			});
		});
		$black.eq(0).delay(2000).animate({
			'right' : left1 + 'px'
		},2000,function(){
			$(this).css({
				'display':'none'
			});
		});
		$black.eq(3).delay(2000).animate({
			'left' : left1 + 'px'
		},2000,everyShow);

		function everyShow(){
			$black.eq(3).css({
				'display':'none'
			});
			$enterBtn.css({
					'display':'block'
				}).animate({
				'opacity' : 1
			},2000);
			$logo.animate({
				'left' : 100 + 'px',
				'opacity' : 1
			},2000);
			$qrcode.animate({
				'right' : -160 + 'px'
			},2000);
		}
		
		$clickqrcode.click(function(){
			if(ifQrHide){
				$qrcode.animate({
					'right': 0 
				},1000,function(){
					$clickqrcode.find('img').attr('src','img/home/r-arrow.png');
				});
				ifQrHide = false;
			}else{
				$qrcode.animate({
					'right': -160 + 'px' 
				},1000,function(){
					$clickqrcode.find('img').attr('src','img/home/l-arrow.png');
				});
				ifQrHide = true;
			}
			
		});

		$enterBtn.click(function(){
			$(this).parent().slideUp(1000,function(){
				$indexQuyu.slideDown(1000);
				$header.css({
				'display':'block'
				});
				$nav.eq(0).css({
					'color':'#6699cc'
				});
			});	
		});
	})();
	

	//主页区域
	(function(){
		//轮播
		var $banner = $('#index .banner .b-main ul ol'),
			$tab = $('#index .banner .b-tab ul ol'),
			$index = 0,
			timer = '';

		$tab.click(function(){
			$this = $(this);
			$index = $this.index();
			$this.addClass('on').siblings().removeClass('on');
			$banner.eq($index).fadeIn(1000).siblings().stop().hide();
		});

		
		autoplay();
		

		$banner.hover(function(){
			clearInterval(timer);
		},function(){
			autoplay();
		});
		

		function autoplay(){
			timer = setInterval(function(){
				if($index < 3){
					$banner.eq($index).fadeIn(1000).siblings().stop().hide();
					$tab.eq($index).addClass('on').siblings().removeClass('on');
					$index++;
				}else{
					$banner.eq(0).fadeIn(1000).siblings().stop().hide();
					$tab.eq(0).addClass('on').siblings().removeClass('on');
					$index = 1 ;
				}
			},3000);	
		}
	})();

	//导航区
	(function(){
		var $nav = $('#header .nav ul ol');
			$header = $('#header');
			$indexQuyu = $('#index'),
			$project = $('#project'),
			$share = $('#share'),
			$contact = $('#contact'),
			

		$nav.eq(0).click(function(){
			$(this).siblings().children().css({
					'color':'#ffffff'
				});
			$(this).children().css({
					'color':'#6699cc'
				});
			$indexQuyu.siblings().slideUp(1000,function(){
				$indexQuyu.slideDown(1000,function(){
					$header.slideDown();
				});
				
			});
		});	

		$nav.eq(1).click(function(){
			$(this).siblings().children().css({
					'color':'#ffffff'
				});
			$(this).children().css({
					'color':'#6699cc'
				});
			$project.siblings().slideUp(1000,function(){
				$project.slideDown(1000,function(){
					$header.slideDown();
				});
				
			});
		});

		$nav.eq(2).click(function(){
			$(this).siblings().children().css({
					'color':'#ffffff'
				});
			$(this).children().css({
					'color':'#6699cc'
				});
			$share.siblings().slideUp(1000,function(){
				$share.slideDown(1000,function(){
					$header.slideDown();
				});
				
			});
		});

		$nav.eq(3).click(function(){
			$(this).siblings().children().css({
					'color':'#ffffff'
				});
			$(this).children().css({
					'color':'#6699cc'
				});
			$contact.siblings().slideUp(1000,function(){
				$contact.slideDown(1000,function(){
					$header.slideDown();
				});
				
			});
		});
	})();

	//实战项目
    (function () {

        var $project = $("#project"),
            $picLi = $project.find(".pic ul li"),
            $btn = $project.find(".btn p"),
            index = 0,
            length = $picLi.length;

        $picLi.click(function () {
            if ( $(this).index() !== index ){
                index = $(this).index();
                change();
            }
        });

        $btn.click(function () {
            if ( $(this).index() ){
                index ++;
                index %= length;
            }else{
                index --;
                if(index<0)index=length-1;
            }
            change();
        });

        function change() {
            var lIndex = index - 1,
                rIndex = index + 1;
            if ( lIndex < 0 )lIndex = length-1;
            if (rIndex >= length)rIndex = 0;
            $picLi.removeClass("left mid right");
            $picLi.eq(lIndex).addClass("left");
            $picLi.eq(index).addClass("mid");
            $picLi.eq(rIndex).addClass("right");
        }

    })();

	/* 学习分享 */
	(function(){
		$share = $('#share');
		$part = $share.find('.box ul li'),
		$bigBox = $share.find('.bigbox'),
		$close = $bigBox.find('.close'),
		$bigMain = $bigBox.find('.main');

		$part.click(function(){
			$bigBox.fadeIn(500);
		});

		$close.click(function(){
			$bigBox.fadeOut(500);
			//$bigMain.text('');
		});

	})();
}