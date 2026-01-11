function mouseOver(imagePath) {
    document.getElementById("ratcontainer").innerHTML = '<img src= ' + imagePath + ' class = "pfp" />';
}
function mouseOut() {
     document.getElementById("ratcontainer").innerHTML = '<img src="assets/pfp_px.png" class = "pfp" />';
}