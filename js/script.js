"use strict";

let numberOfFilms;

function start() {
    while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == undefined || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const films = prompt("Один из последних просмотренных фильмов?", ""),
              ball = prompt("На сколько оцените его?", "");
        if (films != "" && ball != "" && films != null && ball != null && films.length < 50) {
            personalMovieDb.movies[films] = ball;
        } else {
            i--;
        }
        
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDb.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDb.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Вы классический зритель");
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const answer = prompt(`Ваш любимый жанр под номером ${i}:`);
        personalMovieDb.genres.push(answer);
    }
}

writeYourGenres();

function showMyDB() {
    if (!personalMovieDb.privat) {
        console.log(personalMovieDb);
    }
}

showMyDB();