import { refs } from "../main";
import { toggleBackdrop } from "./backdrop";

export function renderModal(data) {
  toggleBackdrop();
  refs.backdrop.innerHTML = `
      <div class="js-movie-modal__content">
          <button class = "js-movie-modal__close-btn">X</button>
          <div class="js-movie-modal__poster">
            
          </div>
          <div class="movie-modal__info-about">
              <h1 class="js-movie-modal__title"></h1>
      <div class="movie-modal__info">
          <div class="movie-modal__info-name">
              <p class="info-name">Vote / Votes</p>
              <p class="info-name">Popularity</p>
              <p class="info-name">Original Title</p>
              <p class="info-name">Genre</p>
          </div>
          <div class="movie-modal__info-value">
              <p class="js-info-value">
                  <span class="js-info-value__vote"></span>&ensp;/&ensp; 
  
                  <span class="js-info-value__votes"></span>
              </p>
              <p class="js-info-value"></p>
              <p class="js-info-value"></p>
              <p class="js-info-value"></p>
          </div>
      </div>
      <h2 class="movie-modal__about">About </h2>
      <p class="js-movie-modal__about-text"></p>
      <ul class = "movie-modal__btn-list">
          <li class = "movie-modal__btn-list-item">
              <button class="js-movie-modal__btn add-watched" type = "button">add to Watched</button>
          </li>
          <li class = "movie-modal__btn-list-item">
              <button class="js-movie-modal__btn add-queue" type = "button">add to queue</button>
          </li>
      </ul>
          </div>
      </div>`;
}
