// variable type
let playerName = "Mashrafe"; // declared and assigned a value of string, now playerName is string type
console.log(typeof(playerName), playerName);
// playerName = 34; // error, as it is string type

let x; // declared but not assigned value
console.log(typeof(x), x); // undefined, no value
x = "X"; // as undefined, any value can be assigned into it
x = 34; // as undefined, any value can be assigned into it
console.log(typeof(x), x);

let y: string; // string
let z: number; // number
// y = 34; // invalid
y = "yyyy"; // valid

let b: string | number; // string or number type (called union type)
b = 'bbbb'; // valid
b = 34; // valid
// b = true; // invalid
console.log(typeof(b), b);

let o:object; // object type, can hold any type of object
o = [1,2,3] // array is also an object
console.log(typeof(o), o);


let a2: any; // dynamic type
a2 = 'jdhk';
a2 = true;
a2 = 24;
let a3; // dynamic type , same as a2




// function type
let myFunc = (x: number, y:number) => { // myFunc is function type
    return x*y;
};
console.log(typeof(myFunc), myFunc(20,10));

let myFunc1: Function; // can declare a Function type explicitely
myFunc1 = (x: number, y:number): Number => { // myFunc1 is function type
    return x*y;
};
console.log(typeof(myFunc1), myFunc1(20,10));

// function with optional argument
const myFunc2 = (x: number, y:number, z?:string) => {  // z is optional
    console.log(z + ' is === >', x*y);
};
myFunc2(20,10); // z is undefined
myFunc2(20,10,'ZZZ'); // z is ZZZ



// array
let fruits = ['apple', 'banana', 'orange']; // string type
let fruits1 = ['apple', 12, 23.7, true]; // string, number , boolean type
let fruits2 = [];  // any type

let fruits3: string[] = []; // string
let fruits5: number[] = [];  // number
let fruits6: (string | number)[] = [];  // string or number (union type)



// plain object
let plainObject = {
    name: "Mashrafe",
    age: 40,
    height: 6.4
}
// plainObject.age = "hgdfd"; // type is number, can not assign string
console.log(typeof(plainObject), plainObject);

// class & object
class Person{
    name: String;
    age: Number

    constructor(name: String,age: Number){
        this.name = name;
        this.age = age;
    }
}
let person = new Person("Masrafe", 34); // create an object
console.log(typeof(person), person);




// dynamic type
let a: string;
let a1: boolean;
