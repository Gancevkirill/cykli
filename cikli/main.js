// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }


// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }


// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);


// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }


// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result += arr[i];
// }
// console.log(result);


// let obj = {green: 'зеленный', red: 'красный', blue: 'голубой'};
// for (let key in obj) {
//   console.log(key + ': ' + obj[key]);
// }


// let obj = {Коля: '200', Вася: '300', Петя: '400'};
// for (let key in obj) {
//   console.log(key + ' - зарплата ' + obj[key] + ' долларов.');
// }


// let arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }


// let arr = [2, -5, 9, -15, 0, 4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);


// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     console.log('Есть!');
//     break;
//   }
// }


// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].toString()[0] === '1' || arr[i].toString()[0] === '2' || arr[i].toString()[0] === '5') {
//     console.log(arr[i]);
//   }
// }


// let str = '';
// for (let i = 1; i <= 9; i++) {
//   str += '-' + i;
// }
// console.log(str);


// let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// for (let i = 0; i < days.length; i++) {
//   if (i === 5 || i === 6) {
//     console.log(days[i]);
//   } else {
//     console.log(days[i]);
//   }
// }


// let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let day = 'Суббота';
// for (let i = 0; i < days.length; i++) {
//   if (days[i] === day) {
//     console.log('<i>' + days[i] + '</i>');
//   } else {
//     console.log(days[i]);
//   }
// }


// let n = 1000;
// let num = 0;
// while (n >= 50) {
//   n /= 2;
//   num++;
// }
// console.log(n);
// console.log(num);