var elems = document.getElementsByClassName('no-cache');
for (var i = 0; i < elems.length; i++) {
    elems[i].attributes['src'].value += "?a=" + Math.random();
}