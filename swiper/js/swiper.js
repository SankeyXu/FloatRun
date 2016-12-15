	//	封装内容如下   使用时无需更改内部内容
	function oneMoveModel(){
		//	托盘 nodeArc and nodeArc's num 的全局变量
			var btnMove = $("li.smallArc");
			var btnMoveLength = btnMove.length;
		//	轮播图  pictureArry and pic's num 的全局变量
			var spanName = $(".title-big span");
			var swiperLigLth = spanName.length;
		//	小托盘当前的下标  now nodeArc Index 的全局变量,默认设0
			var redBtnIndex=0;
		//	定义轮播规则 seeting interval 的全局变量
			var interval;
		
		this.oneMove = function(num){
			if(num){
				redBtnIndex = redBtnIndex-1;
				if(redBtnIndex==-1){redBtnIndex=btnMoveLength-1}
			}else{
				redBtnIndex += 1;
				if(redBtnIndex >= swiperLigLth){
					redBtnIndex = 0;
				}
			}
			spanName.eq(redBtnIndex).css('z-index',6).siblings('span').css('z-index',1);
			spanName.eq(redBtnIndex).stop().fadeIn(1000).siblings('span').stop().fadeOut(1100);
			btnMove.eq(redBtnIndex).addClass("smallArcActive").siblings().removeClass("smallArcActive");
		}
		//	点击底部切换
		this.exchangee = function(obj){
			redBtnIndex = $(obj).index()-1;
			this.oneMove();
		}
		//	左切换
		this.leftMovee = function(){
			this.oneMove(-1);
		}
		//	右切换
		this.rightMovee = function(){
			this.oneMove();
		}
		//	停止轮播
		this.stopRunn = function(){
			clearInterval(interval);
		}
		//	开始轮播
		this.startRunn = function(){
			interval = setInterval(this.oneMove,2000);
		}
	}
