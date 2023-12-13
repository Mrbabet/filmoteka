import { fetchTrailerVideo } from "./api";
import { refs } from "../main";
import { toggleBackdrop } from "../js/backdrop";
const TRAILER_URL = "https://www.youtube.com/embed/";

const getTrailerKey = async function (id) {
  const data = await fetchTrailerVideo(id);
  const isOffical = data.results.find((result) => result.official === true);

  if (isOffical.official === true) {
    return isOffical.key;
  }
};

export const renderPlayer = async function (id = "") {
  const trailerKey = await getTrailerKey(id);
  if (trailerKey) {
    refs.backdrop.innerHTML = `
        <iframe
          class="trailer-player"
          src="${TRAILER_URL}${trailerKey}"
          width="100%"
          height="100%"
        >
          ></iframe
        >
     `;
  }
  toggleBackdrop();
};
