window.onload=function(){
	var lg_bt=document.getElementById('lg_button');
	lg_bt.onclick=function(){
	
	var usenm=document.getElementById('user_in').value;
	var usepwd=document.getElementById('user_pwd').value;
	ajax('../json/login_json.js',function(str){
		var arr=JSON.parse(str);
			if(arr.user==usenm){
				if(arr.password==usepwd)
					window.open('www.imooc.com');
				else
					alert("密码错误");
			}
			else
				alert("该用户没有注册！");

	},function(){
		alert("获取用户信息失败！");
	});
};
	var now=document.getElementById('now');
	now.onclick=function(){
		window.open('sign_up.html');
	}
}
