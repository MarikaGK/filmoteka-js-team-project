var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var n=r("aTIOK");n=r("aTIOK");const a=document.querySelector(".gallery"),d=document.querySelector(".header-input__text-box"),l=document.querySelector(".header-no-hit-info");r("4Cu73");var i=r("aVGVk"),c=r("1KQvo");const s=document.querySelector(".scroll-up-arrow");var u=r("a8AVW"),v=r("4Cu73");n=r("aTIOK");var m=r("6ghLp");const p=document.querySelector(".header-input__form"),g=document.querySelector(".gallery"),y=document.querySelector(".header-nav__browse"),h=document.querySelector(".header-nav__selectButton"),f=document.querySelector(".header-nav__categoriesBox");p.addEventListener("submit",(function(e){e.preventDefault();const t=d.value.trim();l.textContent="",t?(a.textContent="",(0,n.getMoviesByTitle)(t)):l.textContent="Type your movie title here"})),g.addEventListener("click",(e=>{const t=e.target.parentElement.parentElement;t.classList.contains("movie-card")&&((0,v.toggleModal)(),(0,n.getMovieById)(t.dataset.movieId),(0,v.onShowModal)())})),h.addEventListener("click",m.discoveryHandler),y.addEventListener("click",(e=>{e.preventDefault(),f.classList.toggle("is-hidden")})),(0,n.getMovieGenresAndSaveToStore)(),(0,i.startLoader)(),(0,n.getPopularMovies)(),(()=>{const e=localStorage.getItem("movieGenresIdsArray"),t=JSON.parse(e),o=document.querySelector(".header-nav__categoriesBox"),r=t.map((e=>`<label class="header-nav__label" for="${e.id}">${e.name}\n    <input type="checkbox" class="header-nav__checkbox" id="${e.id}">\n    </label>`)).join("");o.insertAdjacentHTML("beforeend",r)})(),(0,u.renderPagination)();const S=document.querySelector(".scroll-up-arrow");window.addEventListener("scroll",(()=>{window.scrollY>800?s.classList.remove("is-hidden"):s.classList.add("is-hidden")})),S.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),(0,c.setDarkOrNormalModeOnPageLoadFromLocalStorageState)();
//# sourceMappingURL=index.8190bf6d.js.map
