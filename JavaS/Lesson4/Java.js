// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function field (a,b) {
//     let result = a * b;
//     console.log(result);
//     return result;
//
// }
// field(4,5);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function pole (g,r){
//
//     let hiehg = 2*g*r;
//     return hiehg;
//
// }
//
// console.log(pole(2,3.14));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylindr (p,r,h){
//
//     let cyl = 2*p*r*h;
//     return cyl;
// }
// console.log(cylindr(5,6,7));


// - створити функцію яка приймає масив та виводить кожен його елемент


// let coursesTitleArray = [
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex',
//     'Fullstack',
//     'Frontend'];
//
//
// function loop (arr){
//     for (const element of arr) {
//         console.log(element);
//     }
//
// }
// loop(coursesTitleArray);
//

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент



// function looper () {
//     document.write(`<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p></div>`);
// }
// looper();


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function lol () {
//
//     document.write(`<ul>
// <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, vitae.</li>
// <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, officia?</li>
// <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ipsam.</li>
// </ul>`)
//
// }
// lol();

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function lal(arg, slilky) {
//
// document.write(`<ul>`);
//     for (let i = 0; i < slilky; i++) {
//       document.write(`<li>${arg}</li>`);
//     }
//
//  document.write(`</ul>`);
//
// }
// lal('lorem lorem lorem',3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// let masyw = [
//     'JavaScript Complex',
//     'Java Complex',
//     5475,
//     'Python Complex',
//     'QA Complex',
//     54748,
//     'Fullstack',
//     'Frontend',
//     435];
//
// function mos(arr) {
//
//     for (let arrElement of arr) {
//         document.write(`${ arrElement} `);
//     }
//
// }
// mos(masyw);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {name: 'vasya', age: 31, id: 1},
//     {name: 'petya', age: 30, id: 2},
//     {name: 'kolya', age: 29, id: 3},
//     {name: 'olya',  age: 28, id: 4},
//     {name: 'max',   age: 30, id: 5},
//     {name: 'anya',  age: 31, id: 6},
//     {name: 'oleg',  age: 28, id: 7},
//     {name: 'andrey',age: 29, id: 8},
//     {name: 'masha', age: 30, id: 9},
//     {name: 'olya',  age: 31, id: 10},
//     {name: 'max',   age: 31, id: 11}
// ];
//
// function user (use) {
//
//     for (let useElement of use) {
//         document.write(`${useElement.name} `);
//         document.write(`${useElement.age} `);
//         document.write(`${useElement.id} `);
//     }
//
// }
// user(users);

// - створити функцію яка повертає найменьше число з масиву



function number (numb) {
    let ruka = numb[0];
    for (let numbElement of numb) {
        if (ruka>numbElement){
            ruka = numbElement
        }

    }
    return ruka;
}
number([10,20,30,34]);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах



// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)



// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250