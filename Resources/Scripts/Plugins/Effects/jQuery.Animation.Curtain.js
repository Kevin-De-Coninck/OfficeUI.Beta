// Make sure that our plugin is working, even with other libraries.
(function($) {
    // Provides a way to animate an element as a curtain. This function can be modified by passing options to it.
    // The options contains the following:
    //      duration:       The amount of time in milliseconds that the animation should take.
    // Another parameter to pass to the function is a parameter named 'callback'. This parameter defines a function that is executed when 
    // the animation is completed.
    $.fn.curtain = function(options, callback) {
        // provides some default values for the function.
        var settings = $.extend( {}, $.fn.curtain.defaults, options);
        var elementHeight = $(this).height();
        
        $(this).animate({height:0}, settings.duration);
        $(this).children().animate({'margin-top':'-' + elementHeight + 'px'}, settings.duration, function() {
            $(this).css({"margin-top":0});
            
            // Execute the callback function when it's defined.
            if ($.isFunction(callback)) {
                callback(this);
            }
        });
    
        return this; // Allows chaining.
    };
    
    // Plugin defaults – added as a property on our plugin function.
    $.fn.curtain.defaults = {
        duration: 250
    };
}(jQuery));