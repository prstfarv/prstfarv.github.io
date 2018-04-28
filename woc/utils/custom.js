$(document).load(function() {
        });
        $(document).ready(function() {
			var menu_toggle = false;
			var animation_started=false;
			var button = [2];
			for(i=0;i<2;i++)
			{
			button[i]=false;
			}
		$(".animation").hide();
		$(".animation2").hide();
			function getOffsetSum(elem) {
				var top=0, left=0
				while(elem) {
					top = top + parseFloat(elem.offsetTop)
					left = left + parseFloat(elem.offsetLeft)
					elem = elem.offsetParent        
				}
				
				return {top: Math.round(top), left: Math.round(left)}
			}
			function printMousePos(event) {
				console.log("clientX: " + event.clientX);
				$("#mouse_click").css(
				{
				"top":event.clientY-70,
				"left":event.clientX-60
				});
				//$(".animation").offset({left:event.clientX,top:event.clientY});
				PlayAnimation("#mouse_click",152,5,animation_started);
			}

			document.addEventListener("click", printMousePos);
			
			$( "#mobile-btn" ).click(function() {
				if(menu_toggle == false)
				{
				menu_toggle=true;
				   $( "#mobile-menu" ).css({
                                    position: "fixed"
                                }).animate({
                                    left: "+=300px"
                                }, 800, function() {});
				}
				else
				{
					menu_toggle=false;
				   $( "#mobile-menu" ).css({
                                    position: "fixed"
                                }).animate({
                                    left: "-=300px"
                                }, 800, function() {});
				}
				});
				
				$(document).click(function(e) {

				  // check that your clicked
				  // element has no id=info

				  if( e.target.id != "mobile-btn" && menu_toggle==true) {
					menu_toggle=false;
					$( "#mobile-menu" ).css({
                                    position: "fixed"
                                }).animate({
                                    left: "-=300px"
                                }, 800, function() {});
				  }
				});
				
			$("#btn1").on({
			   mouseenter: function () {
				   PlayAnimation("#button_one",152,5,button[0]);
				   console.log("btn1 "+getOffsetSum(this).top);
					$("#button_one").css({
					position: "absolute",
					top:"60%",
					left:"30%"
					});
									   $( this ).css({
                                    position: "relative",
                                }).animate({
                                    top: "-=10"
                                }, 100, function() {
										 $( this ).css({
										position: "relative",
										top:"0"
									});
								});
			   },

			   mouseleave: function () {
				  
			   }
			});	
			$("#btn2" ).on({
			   mouseenter: function () {
				   PlayAnimation("#button_two",152,5,button[1]);
					$("#button_two").css({
					position: "absolute",
					top:"60%",
					left:"56%"
					});
									   $( this ).css({
                                    position: "relative",
                                }).animate({
                                    top: "-=10"
                                }, 100, function() {
										 $( this ).css({
										position: "relative",
										top:"0"
									});
								});
			   },

			   mouseleave: function () {
				  
			   }
			});	
			/*$( ".logo-btn" ).hover(function() {
					PlayAnimation("#button_one",152,5,button[0]);
					$("#button_one").css({
					position: "absolute",
					top:"65%",
					left:"32%"
					});
				   $( this ).css({
                                    position: "relative",
                                }).animate({
                                    top: "-=10"
                                }, 100, function() {
										 $( this ).css({
										position: "relative",
										top:"0"
									});
								});
					});*/
			$(".navigation-menu > a" ).on({
			   mouseenter: function () {
				   $(this).css({
                                    'border': '0px solid #ffffff'
                                }).animate({
                                    'border-bottom-width': '10px'
                                }, 100);
			   },

			   mouseleave: function () {
				   $(this).css({
                                    'border-bottom-width': '20px'
                                }).animate({
                                    'border-bottom-width': '0px'
                                }, 100);
			   }
			});
			$("#nav-btn-1" ).on({
			   mouseenter: function () {
				   $(".animation1").show();
				   PlayAnimation(".animation1");
			   },

			   mouseleave: function () {
				   $(".animation1").hide();
			   }
			});
			$(".nav-buttons" ).click(function() {
					console.log("#main-content");
					$('html, body').stop().animate({
                        scrollTop: $("#main-content").offset().top
                    }, 1000);
			});
			$(".nav-links" ).click(function() {
					
					$('html, body').stop().animate({
                        scrollTop: $(".footer").offset().top
                    }, 1000);
			});
			/*$( ".navigation-menu > a" ).hover(function() {	
				   $(this).css({
                                    'border': '0px solid #ffffff'
                                }).animate({
                                    'border-bottom-width': '20px'
                                }, 100, function() {
									$(this).css({
                                    'border-bottom-width': '20px'
                                }).animate({
                                    'border-bottom-width': '0px'
                                });	 
								});
					});	*/	
					function PlayAnimation(id,imgHeight,numImgs,value) {	
					if(value == false)
					{
					value=true;
					console.log("start");
					/*var imgHeight = 152;
					var numImgs = 5;*/
					var cont = 0;
					var img = $(id).find('img');
					
					var animation = setInterval( function(){ moveSprite(id); },100);
					$(id).show();
					function moveSprite(id){
					
						img.css('margin-top', -1 * (cont*imgHeight));
						cont++;
						console.log("update "+cont+" "+id);
						if(cont == numImgs){
							$(id).hide();
							value=false;
							clearInterval(animation);
						}
					}
				console.log("end");	
				}
				}
				
        });