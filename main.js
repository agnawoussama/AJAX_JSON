var btn = document.getElementById("btn");
var showAnm = document.getElementById("id-show");

btn.addEventListener("click", function () {
    var request = new XMLHttpRequest();
    request.open('GET', "https://raw.githubusercontent.com/agnawoussama/AJAX_JSON/main/animals.json");
    request.onload = function () {
        var data = JSON.parse(request.responseText);
        afficher(data);
    }
    request.send();
})

function afficher(dt) {
    var htmlString = "";
    for (let i = 0; i < dt.length; i++) {
        htmlString += `<p> ${dt[i].name} is a ${dt[i].species} </p>`;
    }

    showAnm.innerHTML = htmlString;
}