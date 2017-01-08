function validateFloat(el, evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    var number = el.value.split(',');
    if (charCode != 44 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    if (number.length>1 && charCode == 46) {
        return false;
    }
    var caratPos = getSelectionStart(el);
    var dotPos = el.value.indexOf(",");
    if (caratPos > dotPos && dotPos>-1 && (number[1].length > 1)) {
        return false;
    }
    return true;
}

function getSelectionStart(o) {
    if (o.createTextRange) {
        var r = document.selection.createRange().duplicate()
        r.moveEnd('character', o.value.length)
        if (r.text == '') return o.value.length
            return o.value.lastIndexOf(r.text)
    } else { 
        return o.selectionStart 
    }
}
