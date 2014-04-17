function getElementByClassName (className, element) {
    var list = element.childNodes
    var len = list.length
    var elem = null;
    for (var i = 0; i < len; i++) {
        elem = list[i];
        if (elem.className){
            var classes = elem.className.split(" ");
            if (classes.indexOf(className) >= 0) {
                return list[i]
            }
        }
        elem = getElementByClassName(className, elem);
        if (elem){
            return elem;
        }
    }
    return null;
}
