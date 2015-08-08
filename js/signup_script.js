window.onload=function(){
	var user_in=document.getElementById('user_in');

	user_in.onblur=function(){
		var use=user_in.value;
		ajax('../json/login_json.js',function(str){
			var arr=JSON.parse(str);
			if(use==arr.user)
				alert("该用户名已被注册！");
			else
				alert("用户名可用");
		},function(){
			alert("失败");
		})
	}
	var user_pwd=document.getElementById('user_pwd');
	var user_rpwd=document.getElementById('user_rpwd');
	
	user_rpwd.onblur=function(){
		if(user_rpwd.value!=user_pwd.value)
			alert("两次输入密码不一致，请重新输入");


	}

}