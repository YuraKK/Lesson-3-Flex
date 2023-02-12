
// Масиви та об'єкти:





// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let names = ['yura', 'kolya', 'ifpat', 'bob','petro','an','alla','byk','kit'];
// console.log(names);
//
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let objectFirst = {   title:true, pageCount:true, gente:true,autors:[name,16] }; // об'єкт
// let objectSecond = { title:true,  pageCount:true, gente:true,autors:[name,16]  }; // об'єкт
// let object = {
//     title:true,
//     pageCount:true,
//     gente:true,
//     autors:[name,16]
//     }; // об'єкт
//
// console.log(object);
//
// console.log()

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// let client = [
//     {
//       name:'Anton',
//       userName:'Sausage',
//         password:'dodo'
// },
//     {
//         name:'Poli',
//         userName:'Saus',
//         password:'dodo'
//     },
//     {
//         name:'Anto',
//         userName:'Saus',
//         password:'odo'
//    },
//     {
//         name:'Anto',
//         userName:'Saus',
//         password:'dodo'
//     },
//     {
//         name:'Anto',
//         userName:'Saus',
//         password:'dodo'
//     },
//     {
//         name:'Anto',
//         userName:'Saus',
//         password:'dodo'
//     },
//     {
//         name:'Anto',
//         userName:'Saus',
//         password:'dodo'
//     },
//     {
//         name:'Anto',
//         userName:'Sausage',
//         password:'dodo'
//     },
//     {
//         name:'Anto',
//         userName:'Sausage',
//         password:'dodo'
//     },
//     {
//         name:'Anto',
//         userName:'Sausage',
//         password:'dodo'
//     }
// ]
// console.log(client.password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// (в першу, другу, третю или четверту частину години).
// let x = -3;
//
// if (x!==0){
//     console.log('Єсссс');
// }
// else  {
//     console.log('Не вірно');
// }
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число

// let time = 61;
// if (time<=3)
// {
//     console.log('Перша частина');
// }
// else if  (time>=4 && time<=6)
// {
//     console.log('Друга група');
// }
// else if (time>=7 && time<=9)
// {
//     console.log('Третя група');
// }
// else if (time>=10 && time<=12) {
//     console.log("Четверта група");
// }
// else {
//     console.log('Забагато');
// }



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = 32;
//
// if (day<=10) {
//
//     console.log('Першу');
// }
// else if (day <=20) {
//     console.log('Другу');
// }
// else if (day<=31) {
//     console.log('Третю');
// }
// else {
//     console.log('Завелике число');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let week = 'Sunday'
// switch (week){
//
//     case "Monday":
//         console.log("Рома прийшов");
//         break;
//     case 'Thusday':
//         console.log('Чистити зубки');
//         break;
//     case 'Wednesday':
//         console.log('Мити ноги');
//         break;
//     case 'Thursday':
//         console.log('Чистити вуха');
//         break;
//     case 'Friday':
//         console.log('Прати речі');
//         break;
//     case 'Saturday':
//         console.log('Допомогти мамі');
//         break;
//     case 'Sunday':
//         console.log('Допомогти татові');
//         break;
//
//
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x = 'fff'


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4} ]
//
// if (coursesAndDurationArray[0].monthDuration<=5) {
//     console.log('Not bad');
//
// }
//
// else {
//     console.log('Супер');
// }
// if (coursesAndDurationArray[1].monthDuration<=5) {
//     console.log('Not bad');
//
// }
// else {
//     console.log('Супер');
// }
// if (coursesAndDurationArray[2].monthDuration<=5) {
//     console.log('Not bad');
//
// }
// else {
//     console.log('Супер');
//
// }
// if (coursesAndDurationArray[3].monthDuration<=5) {
//     console.log('Not bad');
// }
// else {
//     console.log('Супер');
// }
//
// if (coursesAndDurationArray[4].monthDuration<=5) {
//     console.log('Not bad');
//
// }
// else {
//         console.log('Супер');
//     }
// if (coursesAndDurationArray[5].monthDuration<=5) {
//     console.log('Not bad');
//
//
// }
// else {
//     console.log('Супер');
// }