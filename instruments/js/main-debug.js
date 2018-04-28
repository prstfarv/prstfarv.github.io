
	/*function HideDialog()
	{
	var dialog = document.getElementById("dialog");
	dialog.style.border = "10px solid black"; 
	}
	window.onload = function(){var dialog = document.getElementById("dialog");
	dialog.style.cssText = "visibility:hidden"; };*/
	
	function HideDialog()
	{
	var dialog = document.getElementById("dialog");
	dialog.style.cssText = "visibility:hidden";
	}
	
	function SendJsonQuery(cmd,data)
	{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST","http://localhost/json-handler");
	xmlhttp.setRequestHeader("Content-Type","application/json");
	xmlhttp.send(JSON.stringify({command:cmd,parameters:data}));
	}
	
	function Delete()
	{	
	HideDialog();
	SendJsonQuery("error","data");
	}