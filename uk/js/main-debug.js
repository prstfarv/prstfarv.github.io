	/*var screens = document.getElementsByTagName("img");
	screens.style.display = "none";
	function ShowScreen(n)
	{
	console.log("start");
	var screens = document.getElementsByTagName("img");
	screens.style.display = "none";
	}*/

//1. set ul width 
//2. image when click prev/next button
var ul;
var liItems;
var imageNumber;
var imageWidth;
var prev, next;
var currentPostion = 0;
var currentImage = 0;
var delta=0;
var moving = false;

window.onload = init;

function init()
{
var iphone_width = parseInt(document.querySelectorAll('.offer-iphone-screen')[0].getBoundingClientRect().right) - parseInt(document.querySelectorAll('.offer-iphone-screen')[0].getBoundingClientRect().left);
var id = setInterval(function()
	{
	console.log("delta: "+delta+" iphone:"+iphone_width);
	if(delta == 0)
	{
		slide(1);
	}
	else if(delta == -iphone_width)
	{
		slide(2);
	}
	else if(delta == -iphone_width*2)
	{
		slide(0);
	}
},8000);
}

/*function animate()
{
//document.getElementsByClassName('offer-iphone-screen')[0].style.visibility = 'hidden';
document.querySelectAll('.offer-iphone-screen>img').style.visibility = 'hidden';
}*/

function animate(vars)
{
var iphone_width = parseInt(document.querySelectorAll('.offer-iphone-screen')[0].getBoundingClientRect().right) - parseInt(document.querySelectorAll('.offer-iphone-screen')[0].getBoundingClientRect().left);
//console.log(iphone_width);
	var id = setInterval(function()
	{
				if(vars.opt == 2)
				{
				    if(delta > -(iphone_width*2))
				    {
					delta--;
					console.log("delta: "+delta);
					moving = true;
					}
					else 
					{
					clearInterval(id);
					moving = false;
					}
				}
				else if(vars.opt == 1)
				{
				    if(delta > -iphone_width)
				    {
					delta--;
					console.log("delta: "+delta);
					moving = true;
					}
					else if(delta < -iphone_width && delta < 0)
				    {
					delta++;
					console.log("delta: "+delta);
					moving = true;
					}
					else 
					{
					clearInterval(id);
					moving = false;
					}
				}
				else if(vars.opt == 0)
				{
				    if(delta >= -iphone_width*2 && delta < 0)
				    {
					delta++;
					console.log("delta: "+delta);
					moving = true;
					}
					else 
					{
					clearInterval(id);
					moving = false;
					}
				}
		vars.step(delta);
	},1);
}
function slide(note)
{
	var vars = {
		opt:note,
		selector:-1,
		step:function(delta)
		{
			for(var i=0; i<3;i++)
			{		
				this.selector = i;
				//console.log(i);
				document.querySelectorAll('.offer-iphone-screen>img')[i].style.left = delta+i*280+"px";
			}
		}
	};
	if(moving == false ) animate(vars);
}