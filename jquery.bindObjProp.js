(function($){
    $.fn.bindObjProp = function(obj, property, fn) {
        var $this = this,
            curVal;

        function updateHtml(val) {
            curVal = val;
            $this.each(function(){
                var $cur = $(this);
                if (fn && typeof fn === 'function') {
                    val = fn(val);
                }
                if ($cur.is(':input')) {
                    $cur.val(val);
                } else {
                    $cur.text(val);
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
})(jQuery);