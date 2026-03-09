/**
 * ikwilmee.html: notify button form handler
 */
document.querySelectorAll(".notify-button").forEach(function(button) {
    button.addEventListener("click", function() {
        var form = this.closest(".interest-form");
        var userName = form.querySelector(".user-name").value.trim();
        var movieTitle = form.getAttribute("data-movie");
        var messageBox = form.querySelector(".message");

        if (userName === "") {
            messageBox.textContent = "Vul je naam in, debiel!";
            messageBox.className = "message error";
            messageBox.style.display = "inline";
            return;
        }

        fetch("https://n8n.cinematen.be/webhook/ikgamee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: userName, movie: movieTitle })
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Fout bij het verzenden.");
            }
            return response.json();
        })
        .then(function() {
            messageBox.textContent = "Gelukt! Yorrick zal iets laten.";
            messageBox.className = "message success";
            messageBox.style.display = "inline";
            form.querySelector(".user-name").value = "";
        })
        .catch(function() {
            messageBox.textContent = "Foutje!";
            messageBox.className = "message error";
            messageBox.style.display = "inline";
        });
    });
});
