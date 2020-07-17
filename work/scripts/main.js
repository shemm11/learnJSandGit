'use strict';

let numberOfFilms;
let myGenres; 

let a,b,c,d;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '4');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}
start();

function rememberMyFilms(){
    for(let i = 0; i < numberOfFilms; i++){
        a = prompt('Один из последних просмотренных фильмов?', 'logan'),
        b = prompt('На сколько оцените его?', '');

        personalMovieDB.movies[a] = b;

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }       
    }
}
rememberMyFilms();

function detectMyLvl(){
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
}
detectMyLvl();

function showMyDB(){
    if (personalMovieDB.privat !== false) {
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();


console.log(personalMovieDB);

