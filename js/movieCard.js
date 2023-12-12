import "../main.js";
import { refs } from "../main.js";

const genreIDName = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const renderMovieCard = function (data) {
  refs.card.innerHTML = data.results
    .map(({ id, poster_path, name, title, release_date, genre_ids }) => {
      return `
    <li class="film__item" id=${id}>
        <a class="film__item__link">
        ${getMarkupImgPoster(poster_path, name, title)}
            <h2>${title}</h2>
            <p> ${getGenreName(genre_ids)} | ${release_date}</p>
            <button class="film__trailer-btn" type="button">Trailer<span class="film__trailer-btn">▶</span></button>
        </a>
    </li>`;
    })
    .join("");
};

const getGenreName = function (genreIDs) {
  const newArr = [];
  genreIDName.map((genreName) => {
    for (const id of genreIDs) {
      if (genreName.id === id) {
        newArr.push(genreName.name);
      }
    }
  });
  return newArr.join(", ");
};

function getMovieImgPath(path) {
  return `https://www.themoviedb.org/t/p/w500${path}`;
}
export function getMarkupImgPoster(poster_path, name, title) {
  return `
<img src=" ${getMovieImgPath(poster_path)}" alt="${
    name || title
  }" loading="lazy" />`;
}
