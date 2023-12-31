import axios from "axios";

const URL = "https://api.themoviedb.org/3/";
const API_KEY = "f38e9284b51d1fffd633993a0543994f";

const fetchTrendingMovies = async function (type = "week") {
  const res = await axios.get(`${URL}trending/movie/${type}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return res.data;
};

const fetchTrailerVideo = async function (movieID) {
  const res = await axios.get(`${URL}movie/${movieID}/videos`, {
    params: {
      api_key: API_KEY,
      id: movieID,
    },
  });

  return res.data;
};

const fetchMovieDetails = async function (movieID) {
  const res = await axios.get(`${URL}movie/${movieID}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return res.data;
};

const fetchOnSearch = async function (searchQuery) {
  if (searchQuery !== "") {
    const res = await axios.get(`${URL}search/movie`, {
      params: {
        api_key: API_KEY,
        query: searchQuery,
      },
    });

    return res.data;
  } else {
    const res = await axios.get(`${URL}trending/movie/week`, {
      params: {
        api_key: API_KEY,
      },
    });

    return res.data;
  }
};

const fetchPagination = async function (page = 1, searchQuery = "") {
  if (searchQuery !== "") {
    const res = await axios.get(`${URL}search/movie`, {
      params: {
        api_key: API_KEY,
        query: searchQuery,
        page: page,
      },
    });

    return res.data;
  } else {
    const res = await axios.get(`${URL}trending/movie/week`, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    });

    return res.data;
  }
};

export {
  fetchTrailerVideo,
  fetchMovieDetails,
  fetchOnSearch,
  fetchPagination,
  fetchTrendingMovies,
};
