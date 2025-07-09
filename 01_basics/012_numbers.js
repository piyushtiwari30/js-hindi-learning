const score=400;
console.log(score);

const balance = new Number(300);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othernumber=12.4532;
console.log(othernumber.toPrecision(3));
console.log(othernumber.toPrecision(2));

const hundreds=200000;
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++math+++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(-4.3));
console.log(Math.ceil(-4.3));
console.log(Math.floor(5.3));

console.log(Math.random());//random use to give values form 0 to 1;
console.log((Math.random()*10)+1);//this will never give the value start with 0, always 1 and so on;
console.log(Math.floor(Math.random()*10)+1);

//for gettin in the range of 10 t0 20
let max=20;
let min=10;
console.log(Math.floor(Math.random()*(max-min +1))+min);