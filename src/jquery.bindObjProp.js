(function($){
    'use strict';

    $.fn.bindObjProp = (function(){
        var elements = [];

        return function(obj, property, fn) {
            var $this = this,
                curVal;

            elements.push($this);

            function updateHtml(val) {
                curVal = val;
                if (fn && typeof fn === 'function') {
                    val = fn(val);
                }
                $.each(elements, function(index, $el) {
                    if ($el instanceof $) {
                        $el.each(function(){
                            var $cur = $(this);

                            if ($cur.is(':input')) {
                                $cur.val(val);
                            } else {
                                $cur.text(val);
                            }
                        });
                    }
                });
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