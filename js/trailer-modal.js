import { fetchTrailerVideo } from "./api";
const TRAILER_URL = "https://www.youtube.com/embed/";

const body = document.querySelector("body");
const trailerBtn = document.querySelectorAll(".film-trailer-btn");

const getTrailerKey = async function (id) {
  const data = await fetchTrailerVideo(id);

  const isOffical = data.results.find((result) => result.official === true);

  if (isOffical.official === true) {
    return isOffical.key;
  }
};

const renderPlayer = async function (id = "") {
  const key = await getTrailerKey(id);
  if (key) {
    body.innerHTML = `<div class="container trailer__container">
        <iframe
          class="trailer__player"
          src="${TRAILER_URL}${key}"
          width="100%"
          height="100%"
        >
          ></iframe
        >
      </div>`;
  }
};
console.log(trailerBtn);
