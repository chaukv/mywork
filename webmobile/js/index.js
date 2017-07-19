window.onload = function(){
	//swiper.js
	var main_banner = new Swiper('#main-banner');
	
	var server_w = new Swiper('#server-w',{
		pagination:'.swiper-pagination',
		paginationClickable:true,
	
	});
	var free_swiper = new Swiper('#free-swiper',{
		slidesPerView:4,
		autoplay:4000,
	
	});
	var free_swiper = new Swiper('#free-swiper',{
		slidesPerView:4,
		autoplay:4000,
		spaceBetween:10,
	
	});
	var free_swiper2 = new Swiper('#free-swiper2',{
		slidesPerView:4,
		autoplay:4000,
		spaceBetween:10,
	
	});
	
	var feature_swiper = new Swiper('#feature-swiper',{
		slidesPerView:4,
		autoplay:4000,
		spaceBetween:10,
	
	});
	var fav_content = new Swiper('#fav-content',{
		direction:'vertical',
		height:'auto',
		slidesPerView:4,
		autoplay:4000,
	});
	

	//时钟刷新
	var time = document.querySelectorAll('#free .header .center i');
	setInterval(timeUpdate,1000);
	function timeUpdate(){
		var timer = new Date();
		var hour = timer.getHours(),			
			min = timer.getMinutes(),			
			second = timer.getSeconds();
			if(hour<10){
				hour = "0" + hour;
			}
			if(min<10){
				min = "0" + min;
			}
			if(second<10){
				second = "0" + second;
			}
		time[0].innerHTML = hour;
		time[1].innerHTML = min;
		time[2].innerHTML = second;
	};

	//搜索栏去除默认字
	(function(){
		var val = document.querySelector('.topbar .search form  input');	
		val.onfocus = clearInt;
		val.onblur = defaultInt;
		function clearInt(){
			val.value = '';
		};
		function defaultInt(){
			val.value = 'Search...';
		};
	})();

	//订单列表
	(function(){
		createBlack();
		window.onresize = reCreate;
		function createBlack(){
			var blackWidth = document.documentElement.clientWidth;
			var blackHeight = document.documentElement.clientHeight;
			var topContent = document.getElementById('topContent');
			var footer = document.getElementById('footer');
			var menuList = document.querySelectorAll('#footer ul li')[2];
			var footerHeight = footer.clientHeight;
			var leftMenu = document.querySelector('#topContent .leftMenu');	
			var blackBack = document.createElement('div');
				blackBack.style.width = blackWidth+'px';
				blackBack.style.height = blackHeight - footerHeight+'px';
				blackBack.style.background = '#000000';
				blackBack.style.opacity = 0.5;
				blackBack.style.display = 'block';
				blackBack.style.position = 'fixed';
				blackBack.style.top = 0 ;
				blackBack.style.left = 0 ;
				blackBack.style.zIndex = 99;
				blackBack.className = 'blackBack';
			var ifBtn = true;
				menuList.onclick = getMenu;
			function getMenu(){
				if(ifBtn){
					topContent.appendChild(blackBack);
					leftMenu.style.display = 'block';
					leftMenu.style.width =  blackWidth/2 + 'px';
					leftMenu.style.height = blackHeight - footerHeight+'px';
					leftMenu.style.left = blackWidth/2 + 'px';
					leftMenu.style.zIndex = 999;
					ifBtn = false;
				}else{
					topContent.removeChild(blackBack);
					leftMenu.style.display = 'none';
					ifBtn = true;
				}
			};
		}
		function reCreate(ifBtn){
			var blackWidth = document.documentElement.clientWidth;
			var blackHeight = document.documentElement.clientHeight;
			var topContent = document.getElementById('topContent');
			var footer = document.getElementById('footer');
			var menuList = document.querySelectorAll('#footer ul li')[2];
			var oldBlackBack = document.querySelector('#topContent .blackBack');
			var leftMenu = document.querySelector('#topContent .leftMenu');
			var footerHeight = footer.clientHeight;
				if(oldBlackBack){
					topContent.removeChild(oldBlackBack);
					var blackBack = document.createElement('div');
					blackBack.style.width = blackWidth+'px';
					blackBack.style.height = blackHeight - footerHeight+'px';
					blackBack.style.background = '#000000';
					blackBack.style.opacity = 0.5;
					blackBack.style.display = 'block';
					blackBack.style.position = 'fixed';
					blackBack.style.top = 0 ;
					blackBack.style.left = 0 ;
					blackBack.style.zIndex = 99;
					blackBack.className = 'blackBack';
					topContent.appendChild(blackBack);
					leftMenu.style.display = 'block';
					leftMenu.style.width =  blackWidth/2 + 'px';
					leftMenu.style.height = blackHeight - footerHeight+'px';
					leftMenu.style.left = blackWidth/2 + 'px';
					ifBtn = false;
					menuList.onclick = getMenu;
					function getMenu(){
						if(ifBtn){
							topContent.appendChild(blackBack);
							leftMenu.style.display = 'block';
							leftMenu.style.width =  blackWidth/2 + 'px';
							leftMenu.style.height = blackHeight - footerHeight+'px';
							leftMenu.style.left = blackWidth/2 + 'px';
							ifBtn = false;
						}else{
							topContent.removeChild(blackBack);
							leftMenu.style.display = 'none';
							ifBtn = true;
						}
					};
				}		
		}
	})();

	//会员中心
	(function(){
		login();
		window.onresize = resizeLogin;
		function login(){
			var enterLogin = document.querySelectorAll('#footer ul li')[3],
				theLogin =	document.querySelector('#topContent .login');
			var windowWidth = document.documentElement.clientWidth;
			var ifBtn = true;
			theLogin.style.left = (windowWidth-250)/2 +  'px';
			enterLogin.onclick = openLogin;
			function openLogin(){
				if(ifBtn){
					theLogin.style.display = 'block';
					ifBtn = false;
				}else{
					theLogin.style.display = 'none';
					ifBtn = true;
				}
			}
		}
		function resizeLogin(){
			var windowWidth = document.documentElement.clientWidth;
			theLogin =	document.querySelector('#topContent .login');
			theLogin.style.left = (document.documentElement.clientWidth - 250)/2 +  'px';
		}
	})();
}

	

	
	