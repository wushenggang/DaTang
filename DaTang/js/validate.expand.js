jQuery.validator.addMethod("isEmail",function(){
	var tel=document.getElementById("e-mail").value;
	var a=tel.indexOf("@");
	var b=tel.lastIndexOf(".");
	if(a<1||b-a<2)
	{
		return false;
	}
	else
	{
		return true;
	}
},"填写邮箱的格式不对");