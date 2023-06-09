import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const modalCardMovieDescription = document.querySelector(
  '.modal-card__movie-description'
);
const modalCardPoster = document.querySelector('.modal-card__poster');
const modalCardDescriptionWrapper = document.querySelector(
  '.modal-card__movie-description-wrapper'
);

export const renderModal = (
  {
    genres,
    id,
    original_title,
    overview,
    popularity,
    poster_path,
    title,
    vote_average,
    vote_count,
  },
  movieTrailerUrl
) => {
  if (!poster_path) {
    if (movieTrailerUrl) {
      const markupPoster = `    
    <div class="modal-card__no-img"></div>`;
      const markupMovieDescription = `
    <h2 class="modal-card__movie-title uppercase">${title}</h2>
    <ul class="movie-data-list">
      <li class="movie-data-list__item">
        <p class="movie-data-list__item-description">Vote / Votes</p>
        <p class="movie-data-list__item-value">
          <span class="rating--orange"> ${vote_average.toFixed(
            2
          )} </span> / <span class="rating--grey"> ${vote_count}</span>
        </p>
      </li>
      <li class="movie-data-list__item">
        <p class="movie-data-list__item-description">Popularity</p>
        <p class="movie-data-list__item-value">${popularity}</p>
      </li>
      <li class="movie-data-list__item">
        <p class="movie-data-list__item-description">Original Title</p>
        <p class="movie-data-list__item-value uppercase">
          ${original_title}
        </p>
      </li>
      <li class="movie-data-list__item">
        <p class="movie-data-list__item-description">Genre</p>
        <p class="movie-data-list__item-value">${genres
          .map(g => g.name)
          .join(', ')}</p>
      </li>
      <li class="movie-data-list__item">
        <p class="movie-data-list__item-description">Trailer</p>
        <div><a class="modal-card__yt-link link" href="${movieTrailerUrl}" data-fancybox>
        <p><span class="yt-logo"></span>Watch the trailer</p></a></div>
      </li>
    </ul>
    <h3 class="modal-card__about uppercase">About</h3>
    <p class="modal-card__about-description">${overview}</p>
  `;
      modalCardPoster.insertAdjacentHTML('afterbegin', markupPoster);
      modalCardDescriptionWrapper.insertAdjacentHTML(
        'afterbegin',
        markupMovieDescription
      );
    } else {
      const markupPoster = `    
      <div class="modal-card__no-img"></div>`;
      const markupMovieDescription = `
      <h2 class="modal-card__movie-title uppercase">${title}</h2>
      <ul class="movie-data-list">
      <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Vote / Votes</p>
      <p class="movie-data-list__item-value">
      <span class="rating--orange"> ${vote_average.toFixed(
        2
      )} </span> / <span class="rating--grey"> ${vote_count}</span>
        </p>
        </li>
        <li class="movie-data-list__item">
        <p class="movie-data-list__item-description">Popularity</p>
        <p class="movie-data-list__item-value">${popularity}</p>
        </li>
        <li class="movie-data-list__item">
        <p class="movie-data-list__item-description">Original Title</p>
        <p class="movie-data-list__item-value uppercase">
        ${original_title}
        </p>
        </li>
        <li class="movie-data-list__item">
        <p class="movie-data-list__item-description">Genre</p>
        <p class="movie-data-list__item-value">${genres
          .map(g => g.name)
          .join(', ')}</p>
          </li>
          </ul>
          <h3 class="modal-card__about uppercase">About</h3>
          <p class="modal-card__about-description">${overview}</p>
          `;
      modalCardPoster.insertAdjacentHTML('afterbegin', markupPoster);
      modalCardDescriptionWrapper.insertAdjacentHTML(
        'afterbegin',
        markupMovieDescription
      );
    }
  } else {
    if (movieTrailerUrl) {
      const markupPoster = `    
  <img 
    class="modal-card__img"
    src="https://image.tmdb.org/t/p/w500${poster_path}"
    srcset="https://image.tmdb.org/t/p/original${poster_path} 2x"
    width="375"
    alt="${original_title}"
    loading="lazy"
  />`;
      const markupMovieDescription = `
  <h2 class="modal-card__movie-title uppercase">${title}</h2>
  <ul class="movie-data-list">
    <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Vote / Votes</p>
      <p class="movie-data-list__item-value">
        <span class="rating--orange"> ${vote_average.toFixed(
          2
        )} </span> / <span class="rating--grey"> ${vote_count}</span>
      </p>
    </li>
    <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Popularity</p>
      <p class="movie-data-list__item-value">${popularity}</p>
    </li>
    <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Original Title</p>
      <p class="movie-data-list__item-value uppercase">
        ${original_title}
      </p>
    </li>
    <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Genre</p>
      <p class="movie-data-list__item-value">${genres
        .map(g => g.name)
        .join(', ')}</p>
    </li>
    <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Trailer</p>
      <div><a class="modal-card__yt-link link" href="${movieTrailerUrl}" data-fancybox>
      <p><span class="yt-logo"></span>Watch the trailer</p></a></div>
    </li>
  </ul>
  <h3 class="modal-card__about uppercase">About</h3>
  <p class="modal-card__about-description">${overview}</p>
`;
      modalCardPoster.insertAdjacentHTML('afterbegin', markupPoster);
      modalCardDescriptionWrapper.insertAdjacentHTML(
        'afterbegin',
        markupMovieDescription
      );
    } else {
      const markupPoster = `    
    <img 
    class="modal-card__img"
    src="https://image.tmdb.org/t/p/w500${poster_path}"
    srcset="https://image.tmdb.org/t/p/original${poster_path} 2x"
    width="375"
    alt="${original_title}"
    loading="lazy"
    />`;
      const markupMovieDescription = `
    <h2 class="modal-card__movie-title uppercase">${title}</h2>
    <ul class="movie-data-list">
    <li class="movie-data-list__item">
    <p class="movie-data-list__item-description">Vote / Votes</p>
    <p class="movie-data-list__item-value">
    <span class="rating--orange"> ${vote_average.toFixed(
      2
    )} </span> / <span class="rating--grey"> ${vote_count}</span>
      </p>
      </li>
      <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Popularity</p>
      <p class="movie-data-list__item-value">${popularity}</p>
      </li>
      <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Original Title</p>
      <p class="movie-data-list__item-value uppercase">
      ${original_title}
      </p>
      </li>
      <li class="movie-data-list__item">
      <p class="movie-data-list__item-description">Genre</p>
      <p class="movie-data-list__item-value">${genres
        .map(g => g.name)
        .join(', ')}</p>
        </li>
        </ul>
        <h3 class="modal-card__about uppercase">About</h3>
        <p class="modal-card__about-description">${overview}</p>
        `;
      modalCardPoster.insertAdjacentHTML('afterbegin', markupPoster);
      modalCardDescriptionWrapper.insertAdjacentHTML(
        'afterbegin',
        markupMovieDescription
      );
    }
  }
  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  });
  modalCardMovieDescription.setAttribute('data-movie-id', `${id}`);
};
