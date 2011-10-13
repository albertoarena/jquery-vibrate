/*
 * jquery.vibrate.js
 * jQuery Vibrating Button Plugin
 *
 * Author:  NextCode.it <info@nextcode.it>
 * Version: 1.0.1 
 * Date:    17 dec. 2010
 * Support: http://www.nextcode.it/demo/vibrate/
 * 
 * Changelog
 * 1.0.1  17 dec 2010: removed "overflow:hidden" attribute to both wrapping DIVS (to allow transparency outside the vibrating box); added overEffect parameter
 * 1.0    14 dec 2010: released first version
 */
(function($) {
	$.fn.vibrate = function(options){

		$(this).each(function(){
			var $this = $(this);
			if ( $.type($this.attr('id')) == "undefined" ) {
				$this.attr('id') = 'vibrate_'+Math.round(Math.random()*100000000000000000);
			}
			$this.id = $this.attr('id');
	
			// Default options
			$this.defaults = {
				reverse: false,
				speed: 50,
				trigger: "mouseover",
				overEffect: "stop"
			}; 
			$this.defaults = $.extend($this.defaults, options);
			$this.defaults.speedBackup = $this.defaults.speed;
			$this.data('vibrate',$this);
			$this.data('vibrate.status',false);
			
			// Applies wrap
			var css1 = {
				'float': $this.css("float"),
				'margin': $this.css("margin-top")+' '+$this.css("margin-right")+' '+$this.css("margin-bottom")+' '+$this.css("margin-left"),
				'display': $this.css("display"),
				'width': $this.outerWidth(),
				'height': $this.outerHeight(),
				'padding': '0',
				'border': '0'
			}
			var css2 = {
				'width': $this.outerWidth(),
				'height': $this.outerHeight(),
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
						if ( $this.defaults.overEffect == "stop" )
							$this.vibrationStop();
						else if ( $this.defaults.overEffect == "invert" ) {
							$this.defaults.speed = Math.round( $this.defaults.speed / 3 );
						}
					}).bind(triggerStop,function(){
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
			if ( $.type($(this).data("vibrate")) !== "undefined" ) {
				$(this).data("vibrate.status",true);
				$(this).css({margin:"0 0 0 0"});
				$(this).vibrationLoop();
			}
		}

		$.fn.vibrationStop = function() {
			if ( $.type($(this).data("vibrate")) !== "undefined" ) {
				$(this).stop(false,true);
				$(this).data("vibrate.status",false);
			}
		}

		$.fn.vibrationLoop = function() {
			if ( $.type($(this).data("vibrate")) !== "undefined" ) {
				var $this = $(this).data("vibrate");
				if ( $(this).data("vibrate.status") == true ) {
					var css = { marginTop: 0, marginLeft: 0 }
					var position = $(this).position();

					if ( parseInt($(this).css("marginTop")) > 0 ) {
						css.marginTop = "-1px";
						css.marginLeft = "-1px";
					} else {
						css.marginTop = "1px";
						css.marginLeft = "1px";
					}
					$(this).animate(css,$this.defaults.speed,function(){
						$(this).vibrationLoop();
					});
				} else {
					$(this).css({margin:"0 0 0 0"});
				}
			}
		}

	}
})(jQuery);