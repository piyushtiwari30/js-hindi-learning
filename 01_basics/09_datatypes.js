//primitive

//7types:string,numbers,null,undefine,boolean,BigInt,symbol
const Id=Symbol('123');
const AnotherId=Symbol('123');
console.log(Id===AnotherId);
//
// console.log(AnotherId);


//non-primitive(reference)
//objects,fuctions,arrays
// const heros=["saktiman","nagraj","doga"];
// let objects{
//     name:himank;
//     age:33;
// }
// let MyFunction=function(){
//     console.log('hello world');
// }
//ALL the non premitive data type will be given function as a typeof
// array=>function;
// object=>function;
// function=>object function;


//all the primitive in typeof function use to give there respective data types expect for BigInt and null;
//null=> object;
//BigInt=>undefine;
//undefine=>undefine;
//string=>string;
//number=>number;
//symbol=>symbol;
//Boolean=>Boolean;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive) and heap(non-primitive)
let myname="hitesh";
let OtherName=myname;
//there when we will print both will give same value
OtherNmae="ganesh";
//now if we wil print both the value of myname will remain same but the OtheName has been changed to ganesh , as the value being passed here is a copy in stack;


//but in the non-primitive type the value is passed by refence, so the change in one will be reflected in other

let userone={
    name:"hitesh",
    email:"hites@bl"
}
let usertwo=userone;
console.log(userone.email)
console.log(usertwo.email)

usertwo.email="gil@bl"

console.log(userone.email)
console.log(usertwo.email)

