(function($){
    $.fn.bindObjProp = (function(){
        var elements = [];

        return function(obj, property, fn) {
            var $this = this,
                curVal, i;

            elements.push($this);

            function updateHtml(val) {
                curVal = val;
                if (fn && typeof fn === 'function') {
                    val = fn(val);
                }
                for (i in elements) {
                    if (elements[i] instanceof $) {
                        $.each(elements[i], function(){
                            var $cur = $(this);
                            
                            if ($cur.is(':input')) {
                                $cur.val(val);
                            } else {
                                $cur.text(val);
                            }
                        });
                    }
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