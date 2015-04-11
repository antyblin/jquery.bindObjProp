(function($){
    'use strict';

    $.fn.bindObjProp = (function(){
        var elements = [];

        function changeValue($el, val) {
            if ($el instanceof $) {
                if ($el.is(':input')) {
                    $el.val(val);
                } else {
                    $el.text(val);
                }
            }
        }

        return function(obj, property, fn) {
            var $this = this,
                i, curVal;

            $this.each(function(){
                elements.push($(this));
            });

            function updateHtml(val) {
                curVal = val;
                if (fn && typeof fn === 'function') {
                    val = fn(val);
                }

                for (i in elements) {
                    changeValue(elements[i], val);
                }
            }

            updateHtml(obj[property]);

            Object.defineProperty(obj, property, {
                set: updateHtml,
                get: function() { return curVal; }
            });

            return this;
        };
    })();
})(jQuery);