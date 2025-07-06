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
