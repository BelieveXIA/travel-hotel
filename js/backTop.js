//页面加载完触发
window.onload =function () {
	var backbtn= document.getElementById('back-Top-btn');
	//获取可视区的高度，一屏高度
	var clientHeight = document.documentElement.clientHeight;
	var backtoptime = null;
	var isTop = true;

	//滚动条滚动时，用户滚动鼠标滚轮触发
	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;//兼容IE和普通浏览器
		if (osTop >= clientHeight) {
			backbtn.style.display = 'block';//超出一屏范围显示
		}else{
			backbtn.style.display = 'none';//一屏内隐藏
		}

		if (!isTop) {
			clearInterval(backtoptime);
		}
		isTop = false;
	};

	backbtn.onclick = function(){
		//alert(clientHeight);
		//设置定时器
		backtoptime = setInterval(function(){
			//获取滚动条距离顶部的高度
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;//兼容IE和普通浏览器
			//alert(osTop);
			//使ispeed的值不断减小，之值为零，（-osTop，才可使最终归零，目的让ispeed为负数）
			var ispeed = Math.floor(-osTop/5);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			
			isTop = true;
			//console.log(osTop);
			if (osTop == 0) {
				clearInterval(backtoptime);
			}
		},30);
	};
};