'use strict';

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const film1 = prompt("Один из последних просмотренных фильмов?", ""),
//       val1  = prompt("На сколько оцените его?", ""),
//       film2 = prompt("Один из последних просмотренных фильмов?", ""),
//       val2  = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[film1] = val1;
// personalMovieDB.movies[film2] = val2;
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b  = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done'); 
//     } else {
//         console.log('error');
//         i--; 
//     }
// }
let i = 0;
while (i <= 1) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        i++;
    } else {
        console.log('error');
    }
}
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//     }
// } while (i < 2 );

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);