// Changer le compteur :
var messagesCount = document.querySelectorAll("p").length;
document.querySelector("#count").textContent = messagesCount;


// Suppression des messages + compteur a jour
for (var i = 0; i < document.querySelectorAll(".trash").length; i++) {
    document.querySelectorAll(".trash")[i].addEventListener("click", function() {
      this.parentNode.remove();
      var messagesCount = document.querySelectorAll("p").length;
      document.querySelector("#count").textContent = messagesCount;
    });
}

// Ajout d'un message quand on clique sur le bouton Add
document.querySelector("#btn-add").addEventListener("click", function () {
    var message = document.querySelector("#add-message").value;

    if (message.trim().length > 0) {
        // Create div with class row and append to body
        var mainDiv = document.createElement("div");
        mainDiv.className = "row";
        document.body.appendChild(mainDiv);

        // Create img with class and src and append to mainDiv
        var image = document.createElement("img");
        image.className = "avatar";
        image.src = "avatar-1.jpg";
        mainDiv.appendChild(image);

        //  Create div and append to mainDiv
        var nameMessageDiv = document.createElement("div");
        mainDiv.appendChild(nameMessageDiv);

        var h6 = document.createElement("h6");
        h6.textContent = "Machin chouette";
        nameMessageDiv.appendChild(h6);

        var content = document.createElement("p");
        content.textContent = document.querySelector("#add-message").value;
        nameMessageDiv.appendChild(content);

        var trash = document.createElement("img");
        trash.src = "trash.png";
        trash.className = "trash";
        mainDiv.appendChild(trash);

        document.querySelector("#add-message").value = "";

        var messagesCount = document.querySelectorAll("p").length;
        document.querySelector("#count").textContent = messagesCount;
    }

    trash.addEventListener("click", function () {
        this.parentNode.remove();
        var messagesCount = document.querySelectorAll("p").length;
        document.querySelector("#count").textContent = messagesCount;
    });
});