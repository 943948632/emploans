$(function(){
	//借款无缝滚动
	function move(){
		$("#news").animate({"margin-top":"-30px"},600,function(){
			var first=$("#news li:first-child");//找到ul的第一个子元素
			$("#news").append(first);//插入到ul的里面最后后面
				$("#news").css("margin-top",0);//ulmargin-top归0
		});
	}
	var id=setInterval(move,3000);
	$("#news").hover(function(){clearInterval(id);},function(){id=setInterval(move,1000);})
	//还款
	if($(".surplus .num").text()==0){
		var rehtml=''
		    rehtml+='<div class="noRepay">'
			rehtml+='<img src="../images/repayment/norepay.png" style="width: 12%;margin-top: 20px;" />'
			rehtml+='<p class="ptext" >暂无还款计划</p>'
			rehtml+='</div>'
		$(".repayPlan").html(rehtml);
		$(".colAccount").hide();
	}
})
