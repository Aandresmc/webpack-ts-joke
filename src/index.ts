// DEMO JOKE APP
import generateJoke from "./api/generateJoke";
import "./shared/styles/main.scss";
import laughing from "./shared/assets/laughing.svg";

const laughImg = document.getElementById("laughImg") as HTMLImageElement;
laughImg.src = laughing;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
