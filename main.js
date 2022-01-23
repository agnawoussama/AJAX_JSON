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
        htmlString += `<p> ${dt[i].name} is a ${dt[i].species} that likes to eat `;
        //likes
        for (let j = 0; j < dt[i].foods.likes.length; j++) {
            if (j == 0) 
                htmlString += dt[i].foods.likes[j];
            else 
                htmlString += " and " +dt[i].foods.likes[j];                 
        }
        //dislikes
        htmlString += " and hates to eat ";
        for (let j = 0; j < dt[i].foods.dislikes.length; j++) {
            if (j == 0) 
                htmlString += dt[i].foods.dislikes[j];
            else 
                htmlString += " and " +dt[i].foods.dislikes[j];                 
        }
        htmlString += ".</p>"
    }

    showAnm.innerHTML = htmlString;
}