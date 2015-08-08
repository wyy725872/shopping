window.onload=function(){
	var color=document.getElementsByClassName('box');
	for(var i=0;i<color.length;i++){

		color[i].onclick=function(){
			for(var j=0;j<color.length;j++){
			/*color[j].className='';*/
			color[j].className=' box';
			}
			this.className+=' addboder';
		}
	}


	var pox=document.getElementsByClassName('pox');
	for(var i=0;i<pox.length;i++){

		pox[i].onclick=function(){
			for(var j=0;j<pox.length;j++){
			/*color[j].className='';*/
			pox[j].className=' pox';
			}
			this.className+=' addpox';
		}
	}

	var add=document.getElementById('jia');
	var mul=document.getElementById('jian');
	var number=document.getElementById('special_num');
	var num=number.firstChild.data;
	add.onclick=function(){
		if(num==9){
			alert("超过最大限购数量");
		}
		else{


			num++;
			number.innerHTML='';
			number.innerHTML+=num;	
		}

	}
	mul.onclick=function(){
		if(num<=1){
			alert("不合法购买");
		}
		else{
			num--;
			number.innerHTML='';
			number.innerHTML+=num;	
		}

	}
	
	var leftmid=document.getElementById('leftmid');
	var leftbottom=document.getElementById('leftbottom');
	ajax("./../json/detailed_json.js",function(str){
		var arr=JSON.parse(str);
		for(var i=0;i<arr.mlt.length;i++){
			var div=document.createElement('div');
			div.className='ctdiv';
			div.innerHTML='<img src=\"images/'+arr.mlt[i].img+'\" class=\"ctimg"><p class=\"ctp\">'+arr.mlt[i].p+'</p><span class=\"ctspan\">¥'+arr.mlt[i].price+'</span>';
		leftmid.appendChild(div);

		}

		for(var i=0;i<arr.mlb.length;i++){
			var div=document.createElement('div');
			div.className='ctdiv';
			div.innerHTML='<img src=\"images/'+arr.mlb[i].img+'\" class=\"ctimg"><p class=\"ctp\">'+arr.mlb[i].p+'</p><span class=\"ctspan\">¥'+arr.mlb[i].price+'</span>';
		leftbottom.appendChild(div);

		}


		/*产品介绍动态生成*/
	var product=document.getElementById('product_intro');
	var introduced=document.createElement('div');
	var intro=document.getElementById('introduce');
	intro.style.backgroundColor='#0479ca';
	introduced.className='introduced';
	introduced.innerHTML='<img src=\"images/'+arr.introduce.img+'\" class=\"inimg\"><span class=\"inspan\">'+arr.introduce.sp1+'</span><span class=\"ins\">'+arr.introduce.sps1+'</span><img src=\"images/'+arr.introduce.line+'\" class=\"lineimg\"><p class=\"inp\">'+arr.introduce.p1+'</p><span class=\"inspan\">'+arr.introduce.sp2+'<img class="\lineimg\" src=\"images/'+arr.introduce.line+'\"><p class=\"inp\">'+arr.introduce.p2+'</p><img src=\"images/'+arr.introduce.bigpic+'\" class=\"inbigpic\">';
	product_intro.appendChild(introduced);
	/*评论部分*/
	var talk_content=document.getElementById('talk_content');
	
	for (var i =0;i<arr.pinglun.length;i++) {
	var talk=document.createElement('div');
	talk.className='talk_text';
	talk.innerHTML='<img src=\"images/'+arr.pinglun[i].head+'\" class=\"plhead\"><span class=\"plspan\">'+arr.pinglun[i].zhanghao+'</span><span class=\"pljibie\">'+arr.pinglun[i].jibie+'<img src=\"images/'+arr.pinglun[i].img+'\" class=\"plimg\"><p class=\"plp\">'+arr.pinglun[i].p+'</p><span class=\"pltime\">'+arr.pinglun[i].timer+'</p>';
	talk_content.appendChild(talk);
	}
	/*咨询部分*/
	var all=document.getElementById('all');
	for(var i=0;i<arr.zixun.length;i++){
		var wen=document.createElement('div');
		wen.className='talk_text';
		wen.innerHTML='<img src=\"images/'+arr.zixun[i].head+'\" class=\"plhead\"><span class=\"plspan\">'+arr.zixun[i].zhanghao+'</span><span class=\"pljibie\">'+arr.zixun[i].jibie+'<p class=\"plp\">'+arr.zixun[i].question+'<p class=\"pl\">慕课网回复：'+arr.zixun[i].answer+'</p><span class=\"pltime\">'+arr.zixun[i].timer+'</p>';
		all.appendChild(wen);
	}

	
	},function(){
		alert("加载失败");
	})

	

}