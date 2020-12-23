var elems = document.getElementsByClassName('no-cache');
for (var i = 0; i < elems.length; i++) {
    elems[i].attributes['src'].value += "?a=" + Math.random();
}

function swapImage() {
    var card = document.getElementById("card");
    if (card.src.endsWith("christmas-title.jpg")) {
        card.src = "images/christmas-boons.jpg";
    } else {
        card.src = "images/christmas-title.jpg";
    }
}