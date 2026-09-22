const gameSelect = document.getElementById("gameSelect");

const gameImage = document.getElementById("gameImage");
const gameTitle = document.getElementById("gameTitle");
const gameGenre = document.getElementById("gameGenre");
const gamePlatform = document.getElementById("gamePlatform");
const gamePrice = document.getElementById("gamePrice");

gameSelect.addEventListener("change", function(){

    if(gameSelect.value == "cyberpunk"){

        gameImage.src = "assets/images/CBPUNK.jpg";
        gameTitle.innerHTML = "Cyberpunk 2077";
        gameGenre.innerHTML = "Genre : RPG";
        gamePlatform.innerHTML = "Platform : PC / PS5";
        gamePrice.innerHTML = "Price : $49.99";

    }

    else if(gameSelect.value == "elden"){

        gameImage.src = "assets/images/ELDENRING.jpg";
        gameTitle.innerHTML = "Elden Ring";
        gameGenre.innerHTML = "Genre : RPG";
        gamePlatform.innerHTML = "Platform : PC / PS5";
        gamePrice.innerHTML = "Price : $59.99";

    }

    else if(gameSelect.value == "gta"){

        gameImage.src = "assets/images/GTAV.png";
        gameTitle.innerHTML = "Grand Theft Auto V";
        gameGenre.innerHTML = "Genre : Action";
        gamePlatform.innerHTML = "Platform : PC / PS5";
        gamePrice.innerHTML = "Price : $39.99";

    }

    else if(gameSelect.value == "nba"){

        gameImage.src = "assets/images/NBA2K.webp";
        gameTitle.innerHTML = "NBA 2K25";
        gameGenre.innerHTML = "Genre : Sports";
        gamePlatform.innerHTML = "Platform : PS5 / Xbox";
        gamePrice.innerHTML = "Price : $59.99";

    }

    else if(gameSelect.value == "fc25"){

        gameImage.src = "assets/images/EASPORT.png";
        gameTitle.innerHTML = "EA Sports FC 25";
        gameGenre.innerHTML = "Genre : Sports";
        gamePlatform.innerHTML = "Platform : PC / PS5";
        gamePrice.innerHTML = "Price : $69.99";

    }

    else if(gameSelect.value == "rdr"){

        gameImage.src = "assets/images/RDR.jpg";
        gameTitle.innerHTML = "Red Dead Redemption 2";
        gameGenre.innerHTML = "Genre : Adventure";
        gamePlatform.innerHTML = "Platform : PC / PS5";
        gamePrice.innerHTML = "Price : $49.99";

    }

});

const params = new URLSearchParams(window.location.search);

const selectedGame = params.get("game");

if(selectedGame){

    gameSelect.value = selectedGame;

    gameSelect.dispatchEvent(
        new Event("change")
    );

}