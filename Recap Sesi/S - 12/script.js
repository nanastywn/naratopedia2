const API_KEY = "9108ac8f9cc7b6c2000e0daa804d8e7f";

let page = 1;

const API_URL = () =>
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`;
const API_IMAGE_URL = "https://image.tmdb.org/t/p/w1280";

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function nextPage() {
  if (page >= 1) {
    page += 1;
    gerMovies(API_URL());
  }
}

function prevPage() {
  if (page > 1) {
    page = 1;
    getMovies(API_URL());
  }
}

next.addEventListener("click", () => {
  nextPage();
});

prev.addEventListener("click", () => {
  prevPage();
});

function showMovies(movies) {
  moviesElement.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, overview, popularity, vote_average } = movie;
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie");
    movieCard.innerHTML = `
    <img src="${API_IMAGE_URL + poster_path}" alt="HTML THE MOVIE IMAGE" />
    <div class="detail">
        <h3>${title}</h3>
        <p>${overview.substring(0, 200)}...</p>
        <p>${popularity} ⭐ | ${vote_average} 👍</p>
    </div>`;
    moviesElement.appendChild(movieCard);
  });
}

getMovies(API_URL());
