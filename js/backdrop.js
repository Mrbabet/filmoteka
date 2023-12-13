import { refs } from "../main";

export const toggleBackdrop = function () {
  refs.backdrop.classList.toggle("is-hidden");
  !refs.backdrop.classList.contains("is-hidden")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");
};
