"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", 1);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies = a;
personalMovieDB.movies = b;

console.log(personalMovieDB);