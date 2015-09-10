
			$(function() {
				  	$('a[href*=#]:not([href=#])').click(function() {
				   		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				      	var target = $(this.hash);
				      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				      	if (target.length) {
				        	$('html,body').animate({
				          	scrollTop: target.offset().top
				        	}, 1000);
				        return false;
					    }
					}
				});
			});

				$(function() {
					var pull 		= $('#pull');
						menu 		= $('nav ul');
						menuTop = $('.top'); 
						menuAbout = $('.about-link');
						menuProjects = $('.projects-link');
						menuContact = $('.contact-link');
						menuResume  = $('.resume-link');						
						menuHeight	= menu.height();
						menuNothing = $('.top2'); 

					$(pull).on('click', function(e) {
						e.preventDefault();
						menu.slideToggle();

					});

					$(menuTop).on('click', function(e){
						// e.preventDefault();
						var w = $(window).width();
						if(w < 700){
							menu.slideToggle(); 
						}
					}); 

					$(menuAbout).on('click', function(e){
						// e.preventDefault();
						var w = $(window).width();
						if(w < 700){
							menu.slideToggle(); 
						}
					}); 

					$(menuProjects).on('click', function(e){
						// e.preventDefault();
						var w = $(window).width();
						if(w < 700){
							menu.slideToggle(); 
						}
					}); 

					$(menuContact).on('click', function(e){
						// e.preventDefault();
						var w = $(window).width();
						if(w < 700){
							menu.slideToggle(); 
						}
					}); 

					$(menuResume).on('click', function(e){
						// e.preventDefault();
						var w = $(window).width();
						if(w < 700){
							menu.slideToggle(); 
						}
					}); 

					$(menuNothing).on('click', function(e){
						// e.preventDefault();
						var w = $(window).width();
						if(w < 700){
							menu.slideToggle(); 
						}
					}); 

					// $(menu).on('click', function(e) {
					// 	//e.preventDefault();
					// 	menu.slideToggle();
					// });

					$(window).resize(function(){
		        		var w = $(window).width();
		        		if(w > 320 && menu.is(':hidden')) {
		        			menu.removeAttr('style');
		        		}
		    		});
				});

				
				function fix()
				{
				    var el = this;
				    var par = el.parentNode;
				    var next = el.nextSibling;
				    par.removeChild(el);
				    setTimeout(function() {par.insertBefore(el, next);}, 0)
				}