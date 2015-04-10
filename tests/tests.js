function getValue($el) {
    return $el.is(':input') ? $el.val() : $el.text();
}

QUnit.test( "Single entity bind test", function(assert) {
    var $entities = $('.group'),
        obj = {a: 1};

    QUnit.expect($entities.length * 2);
    
    $entities.each(function(){
        var $this = $(this);
        $this.bindObjProp(obj, 'a');
        assert.equal(getValue($this), obj.a, 'Checking ' + this.nodeName + ' after bind');
    });

    obj.a = 2;

    $entities.each(function(){
        assert.equal(getValue($(this)), obj.a, 'Checking ' + this.nodeName + ' after property value change');
    });
});

QUnit.test( "Multiple entities bind test", function(assert) {
    var $entities = $('.group'),
        obj = {a: 1};

    QUnit.expect($entities.length * 2);

    $entities.bindObjProp(obj, 'a');
    $entities.each(function(){
        assert.equal(getValue($(this)), obj.a, 'Checking ' + this.nodeName + ' after bind');
    });

    obj.a = 2;

    $entities.each(function(){
        assert.equal(getValue($(this)), obj.a, 'Checking ' + this.nodeName + ' after property value change');
    });
});