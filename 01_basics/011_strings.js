let name=`hitesh`
let repCount=50;
console.log(`My name is ${name} and my repCount is ${repCount}`)


const gameName= new String('piyush')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('s'));


const newname= gameName.substring(0,4);
console.log(newname);

const othername= gameName.slice(-2,-4);
console.log(othername);

const newName="   hitesh   ";
console.log(newName.trim());

const url= `https://hiteshchoudary.com/hitesh%20choudary`;
console.log(url.replace("20","-"));


const newstring="hitesh-choudary-good";
console.log(newstring.split('-'));