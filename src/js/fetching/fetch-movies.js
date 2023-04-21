import { saveMovieGenresToStorage } from '../rendering/render-genres';
import { renderMovies, renderLibraryCard } from '../rendering/render-movies';
import { showLoader } from '../utils/loader';
import { renderModal } from '../rendering/render-modal';
// ------> CONSTANTS USED IN THE PROJECT:
const API_KEY = '11f568ee70218bec08ad7368f7bb3250';
const apiUrl = 'https://api.themoviedb.org/3/search/movie';
const searchPopularUrl = 'https://api.themoviedb.org/3/movie/popular';
const searchGenresUrl = 'https://api.themoviedb.org/3/genre/movie/list';
const searchByMovieIdUrl = 'https://api.themoviedb.org/3/movie/';
const NO_HIT_INFO_DIV_DOM = document.querySelector('.header-no-hit-info');
let page = 1;
//  1. --- Function fetch - get movies genres array ---
export const getMovieGenresAndSaveToStore = async () => {
  try {
    const response = await fetch(`${searchGenresUrl}?api_key=${API_KEY}`);
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data.genres);
    saveMovieGenresToStorage(data);
    return;
  } catch (error) {
    console.error(error);
  }
};
//  2. --- Function fetch - get popular movies ---
export const getPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${searchPopularUrl}?api_key=${API_KEY}&page=${page}`
    );
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
    // TODO function here!
    renderMovies(data.results);
  } catch (error) {
    console.error(error);
  }
};
//  3. --- function fetch - get movies by title ---
// movieTitle is a .value from header input
export const getMoviesByTitle = async movieTitle => {
  try {
    NO_HIT_INFO_DIV_DOM.textContent = '';
    const response = await fetch(
      `${apiUrl}?api_key=${API_KEY}&query=${movieTitle}&page=${page}`
    );
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    if (!data.total_results) {
      NO_HIT_INFO_DIV_DOM.textContent =
        'Search result not successful. Enter the correct movie name and search again.';
      console.log('pusta tablica');
      return;
    }
    console.log(`Poniżej przykladowy console.log dla filmu "${movieTitle}"`);
    console.log(data);
    showLoader();
    renderMovies(data.results);
  } catch (error) {
    console.error(error);
  }
};
//  4. --- Function fetch - get movie (details object) by movie ID ---
export const getMovieById = async movieId => {
  try {
    //getting movieId and its videos object at once
    const response = await fetch(
      `${searchByMovieIdUrl}${movieId}?api_key=${API_KEY}&append_to_response=videos`
    );
    // response Status:404 handling
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    const videosObject = data.videos.results;
    // getting trailer url for movieId
    const movieTrailerUrl = getTrailerUrlFromObjectVideos(videosObject);
    console.log(`movie trailer url` + movieTrailerUrl);
    //return object with movie's details
    return renderModal(data, movieTrailerUrl);
  } catch (error) {
    console.error(error);
  }
};
//  5. --- Function get trailer's url from returned object in function getMovieById (from sub-object Videos) ---
const getTrailerUrlFromObjectVideos = videosObject => {
  const findIndexOfKeyTrailer = videosObject.findIndex(
    youtubeKey => youtubeKey.type === 'Trailer'
  );
  if (findIndexOfKeyTrailer === -1) {
    //do usunięcia console.log()
    console.log(`There's no trailer`);
    return;
  } else {
    const youtubeKey = videosObject[findIndexOfKeyTrailer].key;
    const movieTrailerUrl = `https://www.youtube.com/watch?v=${youtubeKey}`;
    //do usunięcia console.log()
    console.log(` oraz url do trailera: ${movieTrailerUrl}`);
    return movieTrailerUrl;
  }
};

// //  6. --- Function fetch - get movie (details object) by movie ID for array of IDs ---
// export const getMoviesByIds = movieIds => {
//   movieIds.map(async id => {
//     try {
//       //getting movieId and its videos object at once
//       const response = await fetch(
//         `${searchByMovieIdUrl}${id}?api_key=${API_KEY}`
//       );
//       // response Status:404 handling
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       const data = await response.json();
//       const videoObject = data;
//       // getting trailer url for movieId
//       console.log(`response for id from getMoviesByIds for id ${id}`);
//       console.log(videoObject);
//       //return object with movie's details
//       return renderLibraryCard(videoObject);
//     } catch (error) {
//       console.error(error);
//     }
//   });
// };