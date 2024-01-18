$(document).ready(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    $("#searchForm").submit(function (event) {
        event.preventDefault();
        var searchTerm = $("#searchBar").val().toLowerCase();

        // vai verificar se o texto inserido coincide com algum dos nomes dos jogos no nosso site
        var gameNames = ["lol", "cs2", "RaibowSixSiege", "minecraft", "btd6", "terraria", "geometryDash", "citiesskylines", "apexLegends", "eldening"];
        var matchingGame = gameNames.find(function (game) {
            return game.includes(searchTerm);
        });

        if (matchingGame) {
            // Redireciona para a pagina com o nome correspondente à pagina
            window.location.href = matchingGame + "-page.html";
        } else {
            alert("Game not found. Please try again.");
        }
    });
});