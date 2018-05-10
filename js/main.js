var paragraf = document.getElementById("tekst");
var napisz = document.querySelector('#dodaj');
var wymaz = document.querySelector('#usun');
function napis() {
    paragraf.textContent = "Akademia 108";
}
function kasuj() {
paragraf.textContent = "";
}
napisz.onclick = napis;
wymaz.onclick = kasuj;