// - Знайти та вивести довижину настипних стрінгових значень
//
// let hello = 'hello world';
// let lorem = 'lorem ipsum';
// let java = 'javascript is cool';
// console.log(hello);
// console.log(lorem);
// console.log(java);
//

// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
//
// let toUpert = hello + lorem + java;
// console.log(toUpert.toUpperCase());
//

// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log(toUpert.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let dirty = ' dirty string   '
// console.log(dirty.replaceAll('  ', '')); 1 варіант
// console.log(dirty.substring('0', '13')); 2 варінат


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// let str= 'Jebać Putina, kurwę i skurwysyna\n' +
//        'Jebać Putina, co znów wojnę zaczyna';

// let stringToarray = str.split();
// console.log(stringToarray);


//   let str = 'Ревуть воли як ясла повні';
//   let string = str.split(' ');
// console.log(string);

// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//  let mas = [10,8,-7,55,987,-1011,0,1050,0];
//
//  let map = mas.map((a) => {
//      return a.toString();
//  })
//  console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
//    let nums = [11,21,3];
//     let sort = nums.sort((a,b)=> a - b );
// console.log(sort);



// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// let sort = nums.sort((a,b)=> b - a );
// console.log(sort);
// ==========================
// - є масив
// -- відсортувати його за спаданням за monthDuration
//  let coursesAndDurationArray = [
//      {title: 'JavaScript Complex', monthDuration: 5},
//      {title: 'Java Complex', monthDuration: 6},
//      {title: 'Python Complex', monthDuration: 6},
//      {title: 'QA Complex', monthDuration: 4},
//      {title: 'FullStack', monthDuration: 7},
//      {title: 'Frontend', monthDuration: 4}
//  ];
//
// let sort = coursesAndDurationArray.sort((a,b) =>{
//     return a.monthDuration - b.monthDuration;
// })
// console.log(sort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//   let coursesAndDurationArray = [
//       {title: 'JavaScript Complex', monthDuration: 5},
//       {title: 'Java Complex', monthDuration: 6},
//       {title: 'Python Complex', monthDuration: 6},
//       {title: 'QA Complex', monthDuration: 4},
//       {title: 'FullStack', monthDuration: 7},
//       {title: 'Frontend', monthDuration: 4}
//   ];
//
//  let filer = coursesAndDurationArray.filter((a) =>{
//      return a.monthDuration > 4;
// });
//  console.log(filer);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

//   let coursesAndDurationArray = [
//       {title: 'JavaScript Complex', monthDuration: 5},
//       {title: 'Java Complex', monthDuration: 6},
//       {title: 'Python Complex', monthDuration: 6},
//       {title: 'QA Complex', monthDuration: 4},
//       {title: 'FullStack', monthDuration: 7},
//       {title: 'Frontend', monthDuration: 4}
//   ];
//
// let map = coursesAndDurationArray.map((a, index) =>{
//     return {title: a.title, monthDuration : a.monthDuration, id : index + 1};
// });
// console.log(map);
// =========================





//     описати колоду карт (від 6 до туза без джокерів)





//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// ===========
//  let koloda = [
//      {title:6,index:'serce', kolir: 'czerwonyj'},
//      {title:7,index:'serce', kolir: 'czerwonyj'},
//      {title:8,index:'serce', kolir: 'czerwonyj'},
//      {title:9,index:'serce', kolir: 'czerwonyj'},
//      {title:10,index:'serce', kolir: 'czerwonyj'},
//      {title:'valet',index:'serce', kolir: 'czerwonyj'},
//      {title:'dama',index:'serce', kolir: 'czerwonyj'},
//      {title:'korol',index:'serce', kolir: 'czerwonyj'},
//      {title:'tuz',index:'serce', kolir: 'czerwonyj'},
//
//      {title:6,index:'buba', kolir: 'czerwonyj'},
//      {title:7,index:'buba', kolir: 'czerwonyj'},
//      {title:8,index:'buba', kolir: 'czerwonyj'},
//      {title:9,index:'buba', kolir: 'czerwonyj'},
//      {title:10,index:'buba', kolir: 'czerwonyj'},
//      {title:'valet',index:'buba', kolir: 'czerwonyj'},
//      {title:'dama',index:'buba', kolir: 'czerwonyj'},
//      {title:'korol',index:'buba', kolir: 'czerwonyj'},
//      {title:'tuz',index:'buba', kolir: 'czerwonyj'},
//
//      {title:6,index:'pika', kolir: 'czornyj'},
//      {title:7,index:'pika', kolir: 'czornyj'},
//      {title:8,index:'pika', kolir: 'czornyj'},
//      {title:9,index:'pika', kolir: 'czornyj'},
//      {title:10,index:'pika', kolir: 'czornyj'},
//      {title:'valet',index:'pika', kolir: 'czornyj'},
//      {title:'dama',index:'pika', kolir: 'czornyj'},
//      {title:'korol',index:'pika', kolir: 'czornyj'},
//      {title:'tuz',index:'pika', kolir: 'czornyj'},
//
//      {title:6,index:'chresta', kolir: 'czornyj'},
//      {title:7,index:'chresta', kolir: 'czornyj'},
//      {title:8,index:'chresta', kolir: 'czornyj'},
//      {title:9,index:'chresta', kolir: 'czornyj'},
//      {title:10,index:'chresta', kolir: 'czornyj'},
//      {title:'valet',index:'chresta', kolir: 'czornyj'},
//      {title:'dama',index:'chresta', kolir: 'czornyj'},
//      {title:'korol',index:'chresta', kolir: 'czornyj'},
//      {title:'tuz',index:'chresta', kolir: 'czornyj'},
//
//  ];
// - знайти піковий туз
// let find = koloda.find(value => value.title === 'tuz' & value.index === 'pika' );
// console.log(find);

// - всі червоні карти
// let filter = koloda.filter(value => value.kolir === 'czerwonyj' );
// console.log(filter);

// - всі шістки

// let filter = koloda.filter(value => value.title === 6 );
// console.log(filter);

// - всі буби
// let filter = koloda.filter(value => value.index === 'buba' );
// console.log(filter);

// - всі трефи від 9 та більше

 let filter = koloda.filter(value => value.index > 'chresta' && [9,10, 'valet','dama','korol','tuz'].includes(value.title)  );
 console.log(filter);

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
