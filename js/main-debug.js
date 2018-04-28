angular.module('app', ['ngMaterial'])

.controller('MainCtrl', function($scope, $mdToast, $mdBottomSheet, $mdDialog) {
  var last = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };
	$scope.site_name = "Дизайн и верстка";
	$scope.site_description="Верстка и дизайн";
	$scope.site_color="#292a2d";
	$scope.site_url = "Дизайн и верстка";
	$scope.site_title="Верстка и дизайн";
	$scope.site_image="#292a2d";
	angular.element(document).ready(function () {
        $scope.showAlert();
    });
	
$scope.showAlert = function() {
  $mdDialog.alert({
        title: 'Attention',
        textContent: 'This is an example of how easy dialogs can be!',
        ok: 'Close'
      });
	  };
  $scope.openBottomSheet = function() {
    $mdBottomSheet.show({
      template: '<md-bottom-sheet>Hello!</md-bottom-sheet>',
	  parent: '.footer-panel'
    });
  };
  $scope.toastPosition = angular.extend({},last);

  $scope.getToastPosition = function() {
    sanitizePosition();

    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };

  function sanitizePosition() {
    var current = $scope.toastPosition;

    if ( current.bottom && last.top ) current.top = false;
    if ( current.top && last.bottom ) current.bottom = false;
    if ( current.right && last.left ) current.left = false;
    if ( current.left && last.right ) current.right = false;

    last = angular.extend({},current);
  }
	
  $scope.showSimpleToast = function() {
    var pinTo = $scope.getToastPosition();

    $mdToast.show(
      $mdToast.simple()
        .textContent('Simple Toast!')
        .position(pinTo )
        .hideDelay(3000)
    );
  };

  $scope.showActionToast = function() {
    var pinTo = $scope.getToastPosition();
    var toast = $mdToast.simple()
      .textContent('Marked as read')
      .action('UNDO')
      .highlightAction(true)
      .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
      .position(pinTo);

    $mdToast.show(toast).then(function(response) {
      if ( response == 'ok' ) {
        alert('You clicked the \'UNDO\' action.');
      }
    });
  };

})

.controller('ToastCtrl', function($scope, $mdToast) {
  $scope.closeToast = function() {
    $mdToast.hide();
  };
});

	var animation_started=false;
	
	function StopAnimation(started,animvar,text)
	{
	started=false;
	clearInterval(animvar);
	console.log("stop "+text);
	}
	function PlayAnimation(id,imgHeight,numImgs,value,infinite) {	
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
							if(infinite==false)
							{
							$(id).hide();
							StopAnimation(animation_started,animation,"selfclose");
							}
							else cont=0;
						}
					}
				console.log("end");	
				return animation;
				}
				}
	$(window).on('load', function() {
	console.log("loading...");
	var a = PlayAnimation("#icon",152,16,animation_started,true);
	 $.ready.then(function(){
      console.log( "ready!" );
		/*StopAnimation(animation_started,a,"close");*/
		$("#load").hide();
		$( ".wrapper" ).fadeIn(2000);
		$( ".logo-pages" ).delay(2000).fadeIn(3000);
		Screen();
		$("#twisted-eye").delay(10000).queue(function () { $(this).fadeOut(100); $(this).dequeue();}).delay(100).queue(function () { $(this).fadeIn(100); $(this).dequeue();});
		  /*$( ".logo-fio" ).fadeIn(4000, function() {
			$( ".logo" ).fadeIn(7000);
		  });*/
		$('div[data-type="scroll"]').each(function(){
			  var $divobj = $(this); // создаем объект
			  $(window).scroll(function() {
				var j = $(window).scrollTop() / $divobj.data('speed'); // вычисляем коэффициент 
				// Присваиваем значение background-position
				// Создаем эффект Parallax Scrolling	
				j+=$divobj.data('defaulttop');
				var opac=$divobj.data('opacity');
				var scrollstart=$divobj.data('scrollstart');
				$divobj.css({ top: j+"%"});
				newopac = ($(window).scrollTop()-scrollstart)/1000;
				$divobj.css({ opacity: opac-Math.abs(newopac)});
				//if(opac-newopac < 0) { $divobj.hide(); } else { $divobj.show();} 
				console.log("start: "+scrollstart+" opacity: "+(opac-Math.abs(newopac))+" scrolltop: "+$(window).scrollTop());
				//console.log("opacity: "+opac-newopac);
			  });
		});
		$(".social" ).on({
			   mouseenter: function () {
									   $( this ).css({
                                    position: "relative",
                                }).animate({
                                    top: "-=10",
									fontSize: "+=100%"
                                }, 100, function() {
										 $( this ).css({
										position: "relative",
										top:"0",
										
									});
								});
			   },

			   mouseleave: function () {
					$( this ).animate({
									fontSize: "-=100%"
                                }, 100, function() {
								});
			   }
			});	
			$("#nav-romb1,#nav-romb2,#nav-romb3" ).on({
			   mouseenter: function () {
									   $( this ).animate({
									width: "+=50px",
									height: "+=50px"
                                }, 100, function() {
								});
			   },

			   mouseleave: function () {
					$( this ).animate({
									width: "-=50px",
									height: "-=50px"
                                }, 100, function() {
								});
			   }
			});	
		$(window).scroll(function() {
                $.fn.isOnScreen = function() {
                    var win = $(window);
                    var viewport = {
                        top: win.scrollTop(),
                        left: win.scrollLeft()
                    };
                    viewport.right = viewport.left + win.width();
                    viewport.bottom = viewport.top + win.height();

                    var bounds = this.offset();
                    bounds.right = bounds.left + this.outerWidth();
                    bounds.bottom = bounds.top + this.outerHeight();
                    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
                };	
				for(i=1; i<=3; i++)
				{
				$("#nav-romb"+i).attr("src", "img/main_romb_empty.png");
				}
				
				if ($("#header").isOnScreen()) {
                    $("#nav-romb1").attr("src", "img/main_romb.png");
					} 
				 else if ($("#content").isOnScreen()) {
                    $("#nav-romb2").attr("src", "img/main_romb.png");
					} 
				 else  {
                    $("#nav-romb3").attr("src", "img/main_romb.png");
					} 
		});
			
		$( window ).resize(function() {
		Screen();
		});
		function Screen()
		{
		if($( window ).width() < "750") { $(".logo").css({ "background-image": "none"}); console.log("fire"); } else { $(".logo").css({ "background-image": "url('img/logo_shine_small.png'),url('img/logo_rombs.png'),url('img/logo_rombs_clouds.png')"}); console.log("unfire");  }
		}
			/*$('.main, example').each(function(){
				var $divobj = $(this); // создаем объект
			  $(window).scroll(function() {
				var j = $(window).scrollTop() / 10; // вычисляем коэффициент 	
				j-=$divobj.data('defaulttop');
				$divobj.css({ "background-position": "50% "+j+"%"});
				console.log("bg: "+j);
				//console.log("opacity: "+opac-newopac);
			  });
			  });*/
		$('a[href^="#"]').on('click', function(event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top+11
                    }, 1000);
                }
        });
		

		
		function telephone_opacity(step,opac,str) {
		if(step=="1"){
			$('.logo-telephone').html(str).delay("6000").animate ({
				opacity: '+='+opac,
			}, 2000, 'linear', function() {
				$('.logo-telephone').css({"opacity": "1", "letter-spacing": "-1.0px"});
				telephone_opacity("2","0.9","89634600942");
			});
		  }
		  else if(step=="2"){
			$('.logo-telephone').html(str).delay("6000").animate ({
				opacity: '-='+opac,
			}, 2000, 'linear', function() {
				$('.logo-telephone').css({"opacity": "1", "letter-spacing": "-3.0px"});
				telephone_opacity("3","0.9","prostoalmer@gmail.com");	
				$('.logo-telephone').html('<a href="mailto:prostoalmer@gmail.com?subject=Дизайн и верстка">prostoalmer@gmail.com</a>');
				
			});
		  }
		  else if(step=="3"){
			$('.logo-telephone').html(str).delay("6000").animate ({
				opacity: '+='+opac,
			}, 2000, 'linear', function() {
				$('.logo-telephone').css({"opacity": "1", "letter-spacing": "-3.0px"});
				telephone_opacity("4","0.9","prostoalmer@gmail.com");
				$('.logo-telephone').html('<a href="mailto:prostoalmer@gmail.com?subject=Дизайн и верстка">prostoalmer@gmail.com</a>');
			});
		  }
		  else if(step=="4"){
			$('.logo-telephone').html(str).delay("6000").animate ({
				opacity: '-='+opac,
			}, 2000, 'linear', function() {
				$('.logo-telephone').css({"opacity": "1", "letter-spacing": "-1.0px"});
				telephone_opacity("1","0.9","89634600942");
			});
		  }/*else {
			$('.logo-telephone').animate ({
				opacity: '+='+opac,
			}, 5000, 'linear', function() {
				$('.logo-telephone').html(str);
				telephone_opacity("1","0.9","89634600942");
			});
		  }*/
		}
		telephone_opacity("1","0.1","89634600942");
   });
});

/*$(window).scroll(function() {
                $.fn.isOnScreen = function() {
                    var win = $(window);
                    var viewport = {
                        top: win.scrollTop(),
                        left: win.scrollLeft()
                    };
                    viewport.right = viewport.left + win.width();
                    viewport.bottom = viewport.top + win.height();

                    var bounds = this.offset();
                    bounds.right = bounds.left + this.outerWidth();
                    bounds.bottom = bounds.top + this.outerHeight();
                    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
                };

                for (var i = 1; i < 7; i++) {
                    if ($("#slide_text" + i).isOnScreen()) {
                        $("#btn" + i).focus();
                        if (showed[i] == false) {
                            showed[i] = true;
                            console.log(this + "" + i);
                            if (i == 2 || i == 4) {
                                $("#slide_text" + i).hide().fadeIn(3000);
                            } else if (i == 3) {
                                $("#slide_text" + i).css({
                                    visibility: "visible",
                                    position: "relative",
                                    left: "-=80",
                                    opacity: "0"
                                }).animate({
                                    opacity: "1",
                                    left: "0"
                                }, 2000, function() {});
                            } else {
                                $("#slide_text" + i).css({
                                    visibility: "visible",
                                    position: "relative",
                                    top: "-=120",
                                    opacity: "0"
                                }).animate({
                                    opacity: "1",
                                    top: "+=100"
                                }, 2000, function() {});
                            }
                        }
                    }
                }
});*/