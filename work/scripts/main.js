/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


'use strict';

let numberOfFilms;
let myGenres; 

let a,b,c,d;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function start(){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '4');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    
    },

    rememberMyFilms: function rememberMyFilms(){
        for(let i = 0; i < numberOfFilms; i++){
            a = prompt('Один из последних просмотренных фильмов?', 'logan');
            b = prompt('На сколько оцените его?','2');
    
            personalMovieDB.movies[a] = b;
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }       
        }
    },

    detectMyLvl: function detectMyLvl(){
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
    },

    showMyDB: function showMyDB(){
        if (personalMovieDB.privat !== false) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function writeYourGenres() {
        //for (let i = 1; i <= 3; i++) {
        //    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        //}

        personalMovieDB.genres.forEach(function(item){
           console.log(`Ваш любимый жанр под номером ${item.indexOf}`);
        });
    },

    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat == false){ 
            personalMovieDB.privat = true;
        } else if (personalMovieDB.privat == true){
            personalMovieDB.privat = false; 
        }
        return personalMovieDB.privat;
    }
};





