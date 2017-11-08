var token = window.localStorage.getItem("token");
if(token==null) {
	var url=encodeURIComponent(''+emploan.config.emploan+'main.html');
	window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+emploan.config.appid+"&redirect_uri="+url+"&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect"
}

//shifou 绑定
$.ajax({
	type: "POST",
	url: emploan.config.basePath + "oauth/hasBind.do",
	contentType: "application/json",
	dataType: "json",
	headers: {
		'token': token,
	},
	data: "",
	success: function(data) {
		if(data.data == false) {
			window.location.href = "login.html";
		}
	},
	error: function(err) {
		console.log(err);
	}
});
