import { renderGenresToGallery } from './render-genres';

const gallery = document.querySelector('.gallery');

// ------> RENDERING POPULAR/SEARCH GALLERY:

export const renderMovies = movies => {
  const markupMovies = movies
    .map(movie => {
      const genres = renderGenresToGallery(movie.genre_ids);
      if (movie.poster_path !== null) {
        return `<div class="movie-card" data-movie-id="${movie.id}">
          <div class="movie-card-poster">
          <img class="movie-img" src="https://image.tmdb.org/t/p/original${
            movie.poster_path
          }" width=280 alt="${movie.original_title}" loading="lazy" />
              </div>
            <div class="movie-card-description">
              <p class="movie-title">${movie.original_title}</p>
              <div class="movie-subtitle">
              <span class="movie-genre">${genres}  |</span>
              <span class="movie-year">${parseInt(movie.release_date)}</span>
            </div>
          </div>
          </div>`;
      } else {
        return `<div class="movie-card" data-movie-id="${movie.id}">
        <div class="movie-card-poster"></div>
        <div class="movie-card-description">  
          <p class="movie-title">${movie.original_title}</p>
          <div class="movie-subtitle">
            <span class="movie-genre">${genres}  |</span>
            <span class="movie-year">${parseInt(movie.release_date)}</span>
          </div>
        </div>
        </div>`;
      }
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markupMovies);
};

// -----> RENDERING USER'S QUEUED/WATCHED LIBRARY:

export const renderLibrary = movies => {
  const markupLibrary = movies
    .map(movie => {
      // const genres = renderGenresToGallery(movie.genre_ids);
      if (movie.poster_path !== null) {
        return `<div class="movie-card" data-movie-id="${Object.keys[movie]}">
          <div class="movie-card-poster">
            <img class="movie-img" src="https://image.tmdb.org/t/p/original${
              movie.poster_path
            }" width=280 alt="${movie.original_title}" loading="lazy" />
            </div>
            <div class="movie-card-description">
              <p class="movie-title">${movie.title}</p>
              <div class="movie-subtitle">
                <span class="movie-genre">${movie.genres
                  .map(g => g.name)
                  .join(', ')}  |</span>
                <span class="movie-year">${parseInt(movie.release_date)}</span>
                <span class="movie-vote">${movie.vote_average.toPrecision(
                  2
                )}</span>
              </div>
            </div>
            </div>`;
      } else {
        return `<div class="movie-card" data-movie-id="${Object.keys[movie]}">
          <div class="movie-card-poster"></div>
          <div class="movie-card-description">  
            <p class="movie-title">${movie.original_title}</p>
            <div class="movie-subtitle">
              <span class="movie-genre">${movie.genres
                .map(g => g.name)
                .join(', ')}  |</span>
              <span class="movie-year">${parseInt(movie.release_date)}</span>
              <span class="movie-vote">${movie.vote_average.toPrecision(
                2
              )}</span>
            </div>
          </div>
          </div>`;
      }
    })
    .join('');
  markupLibrary = `<div class="movie-card" data-movie-id="76600">
          <div class="movie-card-poster">
          <img class="movie-img" src="https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" width="280" alt="Avatar: The Way of Water" loading="lazy">
              </div>
            <div class="movie-card-description">
              <p class="movie-title">Avatar: The Way of Water</p>
              <div class="movie-subtitle">
              <span class="movie-genre">Science Fiction, Adventure, Action  |</span>
              <span class="movie-year">2022</span>
            </div>
          </div>
          </div>`;
  gallery.insertAdjacentHTML('beforeend', markupLibrary);
};
