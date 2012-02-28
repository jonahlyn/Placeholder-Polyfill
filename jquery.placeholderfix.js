/**
 * Plug-in: placeholderFix
 * @author: jonahlyn@unm.edu
 * PolyFill for HTML5 placeholder attribute.
 */
(function($){
  
    $.fn.placeholderFix = function(options) {
        
        var opts = $.extend({}, $.fn.placeholderFix.defaults, options);
        
        return this.each(function(){
            
            var $el = $(this),
                  msg = $el.attr('placeholder')
                  origColor = $el.css('color');

            if(!('placeholder' in document.createElement("input"))) {
            
                $el.val(msg).css('color',opts.color);
            
                $el.focus(function(){
                    if ($el.val() == msg){
                        $el.val('').css('color',origColor);
                    }
                }).blur(function(){
                    if($el.val() == ''){
                        $el.val(msg).css('color',opts.color);
                    }
                });
            }
            
        });
        
    };
    
    $.fn.placeholderFix.defaults = { 
        'color': '#6C6C6C' // muted color for default state
    };
    
    
})(jQuery);