const movielist1 = document.querySelector(".movielist1");
const panel = document.querySelector(".panel");
const $nowPlaying = document.getElementsByClassName("nowPlaying");
const title = document.getElementsByClassName("title");
const overview = document.getElementsByClassName("overview");
const $popular = document.getElementsByClassName("popular");

const config = {
  method: "get",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGQ2MWYwZDgxNGEzMGFlMzUyZjVmMTQ3ZDMzNjYzYSIsInN1YiI6IjYyNTUxNDk2YWFlYzcxMDA1MDVjOWQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B3ZLR_H04I-uJfITGKv8S0bVoPqtxdNvdnDyZ-NnqG0",
  },
};

let nowmovies;
let popularmovies;
fetch(
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  config
)
  .then((response) => response.json())
  .then((data) => {
    nowmovies = data.results.slice(0, 10);
    panel.style.background = `
  linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0)),
  url('https://image.tmdb.org/t/p/original/${nowmovies[0].backdrop_path}  ') 
`;
    panel.style.backgroundSize = "cover";
    title[0].innerHTML = nowmovies[0].title;
    overview[0].innerHTML = nowmovies[0].overview;
    for (let i = 0; i < $nowPlaying.length; i++) {
      $nowPlaying[
        i
      ].src = `https://image.tmdb.org/t/p/original/${nowmovies[i].poster_path}`;
    }
  })
  .catch((error) => console.log(error));

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  config
)
  .then((response) => response.json())
  .then((data) => {
    popularmovies = data.results.slice(0, 10);
    for (let i = 0; i < $popular.length; i++) {
      $popular[
        i
      ].src = `https://image.tmdb.org/t/p/original/${popularmovies[i].poster_path}`;
    }
  })
  .catch((error) => console.log(error));
