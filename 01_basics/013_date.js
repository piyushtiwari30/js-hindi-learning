let mydate= new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof (mydate));

// let newdate= new Date(3045,0,31);
// console.log(newdate.toDateString());
let newdate = new Date("2021-05-07");
console.log(newdate.toLocaleString());

let TimeStamp= Date.now();
console.log(TimeStamp);// this willl give the time in mille second form 1-1-1970
console.log(newdate.getTime())// this will also give the time in mille second form 1-1-1970,but till newdate

//for getting the time in seconds
console.log(Math.floor(Date.now()/1000));


//for getting day ,date ,month saperately can use get function
let findDate= new Date();
console.log(findDate.getDay()); 
console.log(findDate.getMonth()+1);  // here +1 is because month here starts with 0
console.log(findDate.getDate());  
console.log(findDate.getFullYear()); 

let be=findDate.toLocaleString('default',{
    weekday:'long'
})
console.log(be);