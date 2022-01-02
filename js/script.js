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
    personalMovieDb.movies[films] = ball;
}

console.log(personalMovieDb);