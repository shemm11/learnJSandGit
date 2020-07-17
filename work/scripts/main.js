'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '4');

let a,b,c,d;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for(let i = 0; i < numberOfFilms; i++){
        a = prompt('Один из последних просмотренных фильмов?', 'logan'),
        b = prompt('На сколько оцените его?', '');

        personalMovieDB.movies[a] = b;
        
}

switch (personalMovieDB.count){
    case 0,1:  alert("Просмотрено довольно мало фильмов");
                break;
    case 2,3: alert("Вы классический зритель");
                break;
    case 4: alert("Вы киноман");
                break;
    default:    alert("Произошла ошибка" + personalMovieDB.count);
                break;
}

console.log(personalMovieDB);

