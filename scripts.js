function mouseOver(imagePath) {
        document.getElementById("ratcontainer").innerHTML = '<img src= ' + imagePath + ' class = "pfp" />';
}
function mouseOut(imagePath) {
    document.getElementById("ratcontainer").innerHTML = '<img src='+ imagePath +' class = "pfp" />';
}