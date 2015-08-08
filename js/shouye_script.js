
window.onload=function(){
	var sec_div=document.getElementById('sec_list_content');
	var smh=document.getElementById('smh');
	var lis=sec_div.getElementsByTagName('li');
	for(var i=0;i<lis.length;i++){
		smh.onmouseover=lis[i].onmouseover=function(){
			smh.style.display='block';
			
		}
		smh.onmouseout=lis[i].onmouseout=function(){
			smh.style.display='none';
		}
	}

}