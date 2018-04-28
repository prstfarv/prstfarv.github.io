<html>
<head>
	<link href="anim_style.css" rel="stylesheet" type="text/css">
	<script type='text/javascript' src='./utils/jquery-2.1.4.js'></script>
    </script>
	<script type='text/javascript'>
	$(document).ready(function(){
	console.log("start");
	 	var imgHeight = 360;
		var numImgs = 67;
		var cont = 0;
		var img = $('#container').find('img');

		var animation = setInterval( moveSprite,100);

		function moveSprite(){
			img.css('margin-top', -1 * (cont*imgHeight));
			cont++;
			console.log("update "+cont);
			if(cont == numImgs){
				clearInterval(animation);
			}
		}
	console.log("end");	
	});
	</script>
</head>
<body>
	<div id="container">
		<img src="http://d3ckw5pamzrtgd.cloudfront.net/assets/animations/care/animation.png"/>
	</div>
</body>
</html>