window.onload=function(){
	var come=document.getElementById('come');
	var mmy=document.getElementById('mmy');
	ajax("../../json/sell_json.js",function(str){
		var arr=JSON.parse(str);
		var pp=parseFloat(arr.price-arr.re);
		var pt=pp.toFixed(2);
		var div=document.createElement('div');
		div.innerHTML='<img class=\"cimg\" src=\"images/'+arr.img+'\"><p>'+arr.name+'</p><span class=\"cspan\">'+arr.price+'</span><span class=\"return\">'+arr.re+'</span><span class=\"shu\">1</span>';
		div.innerHTML+='<span class=\"total\">'+pt+'</span>'
		come.appendChild(div);
		
		mmy.innerHTML=pt;

	},function(){
		alert("加载信息失败！");
	})



}