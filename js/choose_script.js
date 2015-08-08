window.onload=function(){
	var sw=document.getElementById('sw');
	ajax("../../json/choose_json.js",function(str){
		var arr=JSON.parse(str);
		var liang=document.getElementById('liang');
		liang.innerHTML=arr.phone.length;
		
		for(var i=0;i<arr.phone.length;i++){	
				var div=document.createElement('div');
				div.className='ctdiv';
				div.innerHTML='<a href="detailed.html"><img class=\'ct_img\' src=\"images/'+arr.phone[i].img+'\"></a><p class=\"ct_p\">'+arr.phone[i].dec+'</p><span class=\"ct_span\">¥'+arr.phone[i].price+'</span><span class=\"ct_ping\">评论：('+arr.phone[i].ping+'）条</span><a href=\"#\"><img src="images/gouwuche.png"></a>';
				sw.appendChild(div);
		}
		/*有货无货*/
		var bt_huo=document.getElementById('huo');
		bt_huo.onclick=function(){
			sw.innerHTML='';
			for(var i=0;i<arr.phone.length;i++){
				if(bt_huo.checked==true){
				if(arr.phone[i].if=='yes'){
				var div=document.createElement('div');
				div.className='ctdiv';
				div.innerHTML='<a href="detailed.html"><img class=\'ct_img\' src=\"images/'+arr.phone[i].img+'\"></a><p class=\"ct_p\">'+arr.phone[i].dec+'</p><span class=\"ct_span\">¥'+arr.phone[i].price+'</span><span class=\"ct_ping\">评论：('+arr.phone[i].ping+'）条</span><a href=\"#\"><img src="images/gouwuche.png"></a>';
				sw.appendChild(div);
			}
				
		}
		else
			{
				var div=document.createElement('div');
				div.className='ctdiv';
				div.innerHTML='<a href="detailed.html"><img class=\'ct_img\' src=\"images/'+arr.phone[i].img+'\"></a><p class=\"ct_p\">'+arr.phone[i].dec+'</p><span class=\"ct_span\">¥'+arr.phone[i].price+'</span><span class=\"ct_ping\">评论：('+arr.phone[i].ping+'）条</span><a href=\"#\"><img src="images/gouwuche.png"></a>';
				sw.appendChild(div);
}
}
		}		
	},function(){
		alert("加载信息失败");
	})









}