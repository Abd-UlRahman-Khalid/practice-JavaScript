//year,month,day,hours,min,sec,millisec

const currenDate = new Date(2024, 2, 21, 10, 0, 0);
console.log(currenDate);

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
console.log(`Year:${year}`);
console.log(`Month:${month}`);
console.log(`Day:${day}`);
console.log(`Hour:${hours}`);
console.log(`Minutes:${minutes}`);

console.log(date.toDateString()); //convert to string
console.log(date.toISOString()); //convert to string
console.log(date.toLocaleString()); //convert to string
console.log(date);
date.setDate(date.getDate() + 1);
console.log(date);
