const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const gameCards = document.querySelectorAll(".game-card");

function filterGames(){

    const keyword = searchInput.value.toLowerCase();
    const genre = genreFilter.value;

    gameCards.forEach(card => {

        const title =
            card.querySelector("h3").textContent.toLowerCase();

        const cardGenre =
            card.dataset.genre.toLowerCase();

        const matchTitle =
            title.includes(keyword);

        const matchGenre =
            genre === "all" || cardGenre === genre;

        if(matchTitle && matchGenre){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

}

searchInput.addEventListener("input", filterGames);
genreFilter.addEventListener("change", filterGames);