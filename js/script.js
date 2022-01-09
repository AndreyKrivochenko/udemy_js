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
    privat: false,
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const films = prompt("Один из последних просмотренных фильмов?", ""),
                  ball = prompt("На сколько оцените его?", "");
            if (films != "" && ball != "" && films != null && ball != null && films.length < 50) {
                this.movies[films] = ball;
            } else {
                i--;
            }
            
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Вы классический зритель");
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const answer = prompt(`Ваш любимый жанр под номером ${i}:`);
            if (answer != "" && answer != null && answer != undefined) {
                this.genres.push(answer);
            } else {
                i--;
            }
        }
        this.genres.forEach(function(item, i, arr) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
    showMyDB: function() {
        if (!this.privat) {
            console.log(this);
        }
    },
    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    }
};

// personalMovieDb.rememberMyFilms();

// personalMovieDb.detectPersonalLevel();

// personalMovieDb.writeYourGenres();

// personalMovieDb.toggleVisibleMyDB();

personalMovieDb.showMyDB();