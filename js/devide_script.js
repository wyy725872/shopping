window.onload=function(){
	var pd_1=document.getElementById('pd_1');
	var pd_2=document.getElementById('pd_2');
	var div=new Array(8);
	/*for(var i=0;i<div.length;i++){
			
			alert(this.className);
	}
	alert(div[1].className);*/
	ajax("../../json/product_json.js",function(str){
		var arr=JSON.parse(str);
		for(var i=0;i<div.length;i++)
		{	
			div[i]=document.createElement('div');
			div[i].className='creatediv';
		
			div[i].innerHTML='<img class=\'ppic\' src=\"images/'+arr.img+'\"><p class=\"csp\">'+arr.p+'</p><span class=\"cspan\">'+arr.sp+'</span><br><span class=\"cping\">评论：<img src=\"images/'+arr.ping+'\"><span class="cnum\">('+arr.num+'条）</span></span>';
			pd_1.appendChild(div[i]);
	}

	for(var i=0;i<div.length;i++)
		{	
			div[i]=document.createElement('div');
			div[i].className='creatediv';
		
			div[i].innerHTML='<img class=\'ppic\' src=\"images/'+arr.img+'\"><p class=\"csp\">'+arr.p+'</p><span class=\"cspan\">'+arr.sp+'</span><br><span class=\"cping\">评论：<img src=\"images/'+arr.ping+'\"><span class="cnum\">('+arr.num+'条）</span></span>';
			pd_2.appendChild(div[i]);
	}
	},function(){
		alert("请求信息失败");
	});
	
}