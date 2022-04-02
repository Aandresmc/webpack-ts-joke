import axios from "axios";
import { JokeResponse } from "./interface/joke_response";

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios.get<JokeResponse>("https://icanhazdadjoke.com", config).then((res) => {
    document.getElementById("joke").innerHTML = res.data.joke;
  });
}

export default generateJoke;
