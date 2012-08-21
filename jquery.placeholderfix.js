/**
 * Plug-in: placeholderFix
 * @author: jgilstrap@gmail.com
 * PolyFill for HTML5 placeholder attribute.
 * http://jonahlyn.github.com/Placeholder-Polyfill
 */
(function($){
  
    $.fn.placeholderFix = function(options) {
        
        var opts = $.extend({}, $.fn.placeholderFix.defaults, options);
        
        return this.each(function(){
            
            var $el = $(this),
                  msg = $el.attr('placeholder'),
                  origColor = $el.css('color');

            // Check if browser does not support placeholder attribute natively.
            if(!('placeholder' in document.createElement("input"))) {
              
                if ($el.val() === '') {
                  $el.val(msg).css('color',opts.color);
                }
            
                $el.focus(function(){
                    if ($el.val() === msg){
                        $el.val('').css('color',origColor);
                    }
                }).blur(function(){
                    if($el.val() === ''){
                        $el.val(msg).css('color',opts.color);
                    }
                });
            }
            
        });
        
    };
    
    $.fn.placeholderFix.defaults = { 
        'color': '#777777' // muted color for default state
    };
    
    
})(jQuery);