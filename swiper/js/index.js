var oneMoveModelNew;
$(function(){
	//	创建新的轮播插件  floatShuff  对象
	oneMoveModelNew = new oneMoveModel();
	//	启用轮播特效
	oneMoveModelNew.startRunn();
})
//	底部
	function exchange(obj){
		oneMoveModelNew.exchangee(obj);//底部托盘切换的调用方法
	}
//	左切换
	function leftMove(){
		oneMoveModelNew.leftMovee();//左按钮切换方法
	}
//	右切换
	function rightMove(){
		oneMoveModelNew.rightMovee();//右按钮切换方法
	}
//	停止
	function stopRun(){
		oneMoveModelNew.stopRunn();//停止轮播方法
	}
//	开始
	function startRun(){
		oneMoveModelNew.startRunn();//开始轮播方法
	}
