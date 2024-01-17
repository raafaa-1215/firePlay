$(document).ready(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    $("#searchForm").submit(function (event) {
        event.preventDefault();

        // Get the search term
        var searchTerm = $("#searchBar").val().toLowerCase();

        // Check if the search term matches any game name
        var gameNames = ["lol", "cs2", "game", "minecraft", "btd6", "terraria", "gd", "cities-skylines", "apex-legends", "elden-ring"];
        var matchingGame = gameNames.find(function (game) {
            return game.includes(searchTerm);
        });

        if (matchingGame) {
            // Redirect to the page with the matching game
            window.location.href = matchingGame + "-page.html";
        } else {
            alert("Game not found. Please try again.");
        }
    });
});