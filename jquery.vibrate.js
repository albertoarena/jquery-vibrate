/*
 * jquery.vibrate.js
 * jQuery Vibrating Button Plugin
 *
 * Author:  Alberto Arena <arena.alberto@gmail.com>
 * Version: 1.2
 * Date:    16/03/2013
 * Demo:    http://www.dev4web.eu/projects/jquery.vibrate
 * Support: https://github.com/albertoarena/jQuery-Vibrate
 * 
 * Changelog
 * 1.2    16 mar 2013: optimized code and improved speed
 * 1.1    29 oct 2011: added vibrateClass and overClass parameters
 * 1.0.1  17 dec 2010: removed "overflow:hidden" attribute to both wrapping DIVS (to allow transparency outside the vibrating box); added overEffect parameter
 * 1.0    14 dec 2010: released first version
 */
(function($) {
	$.fn.vibrate = function(options){

		$(this).each(function(){
			var $this = $(this);
			if ( $.type($this.attr('id')) == "undefined" ) {
				$this.attr('id','vibrate_'+Math.round(Math.random()*100000000000000000));
			}
			$this.id = $this.attr('id');
	
			// Default options
			$this.defaults = {
				reverse: false,
				speed: 50,
				trigger: "mouseover",
				overEffect: "stop",
            overClass: "",
            vibrateClass: ""
			}; 
			$this.defaults = $.extend($this.defaults, options);
			$this.defaults.speedBackup = $this.defaults.speed;
			$this.data('vibrate',$this);
			$this.data('vibrate.status',false);
			
			// Cached variables
			var outerWidth = $this.outerWidth();
			var outerHeight = $this.outerHeight();
			
			// Applies wrap
			var css1 = {
				'float': $this.css("float"),
				'margin': $this.css("margin-top")+' '+$this.css("margin-right")+' '+$this.css("margin-bottom")+' '+$this.css("margin-left"),
				'display': $this.css("display"),
				'width': outerWidth,
				'height': outerHeight,
				'padding': '0',
				'border': '0'
			}
			var css2 = {
				'width': outerWidth,
				'height': outerHeight,
				'padding': '0',
				'margin': '0',
				'border': '0',
				'display': 'block'
			}
			$this.wrap('<div><div></div></div>');
			$this.parent().css( css2 );
			$this.parent().parent().css( css1 );
			$this.css({ "margin": "0" });
			
			// Normalizes trigger
			var triggerStop = "";
			if ( $this.defaults.trigger == "mouseover" )
				triggerStop = "mouseout";
			else if ( $this.defaults.trigger == "focus" )
				triggerStop = "blur";
				
			// Normalizes over effect
			if ( $this.defaults.overEffect != "stop" && $this.defaults.overEffect != "invert" )
				$this.defaults.overEffect = "";
			
			if ( $this.defaults.reverse ) {
				if ( $this.defaults.overEffect != "" ) {
					$this.bind($this.defaults.trigger,function(){
                  $this.addClass($this.defaults.overClass);
						if ( $this.defaults.overEffect == "stop" )
							$this.vibrationStop();
						else if ( $this.defaults.overEffect == "invert" ) {
							$this.defaults.speed = Math.round( $this.defaults.speed / 3 );
						}
					}).bind(triggerStop,function(){
                  $this.removeClass($this.defaults.overClass);
						if ( $this.defaults.overEffect == "invert" ) {
							$this.defaults.speed = $this.defaults.speedBackup;
						} else {
							$this.vibrationStart();
						}
					});
				}
				setTimeout(function(){$this.vibrationStart();},Math.round(Math.random*100));
			} else {
				$this.bind($this.defaults.trigger,function(){
					$this.vibrationStart();
				}).bind(triggerStop,function(){
					$this.vibrationStop();
				});
			}
			
		})

		$.fn.vibrationStart = function() {
			var $$this = $(this);
			if ( $.type($$this.data("vibrate")) !== "undefined" ) {
				$$this.data("vibrate.status",true);
				$$this.css({margin:"0 0 0 0"});
            $$this.addClass( $$this.data('vibrate').defaults.vibrateClass );
				$$this.vibrationLoop();
			}
		}

		$.fn.vibrationStop = function() {
			var $$this = $(this);
			if ( $.type($$this.data("vibrate")) !== "undefined" ) {
				$$this.stop(false,true);
            $$this.removeClass( $$this.data('vibrate').defaults.vibrateClass );
				$$this.data("vibrate.status",false);
			}
		}

		$.fn.vibrationLoop = function() {
			var $$this = $(this);
			if ( $.type( $$this.data("vibrate")) !== "undefined" ) {
				//var $this = $$this.data("vibrate");
				if ( $$this.data("vibrate.status") == true ) {
					var css = { marginTop: 0, marginLeft: 0 }
					var position = $$this.position();

					if ( parseInt($$this.css("marginTop")) > 0 ) {
						css.marginTop = "-1px";
						css.marginLeft = "-1px";
					} else {
						css.marginTop = "1px";
						css.marginLeft = "1px";
					}
					$$this.animate(css, $$this.data("vibrate").defaults.speed,function(){
						$$this.vibrationLoop();
					});
				} else {
					$$this.css({margin:"0 0 0 0"});
				}
			}
		}

	}
})(jQuery);