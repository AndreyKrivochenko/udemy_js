"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < numberOfFilms; i++) {
    const films = prompt("Один из последних просмотренных фильмов?", ""),
          ball = prompt("На сколько оцените его?", "");
    if ((films === "" || ball === "" || films === null || ball === null) || (films.length > 50)) {
        i--;
        continue;
    }
    personalMovieDb.movies[films] = ball;
}

if (personalMovieDb.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDb.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Вы классический зритель");
}

console.log(personalMovieDb);