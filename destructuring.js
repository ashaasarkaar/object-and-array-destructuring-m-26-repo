//amra object ar property r value gulo ba keys r value gulo sohoje access korar jonno, object ar namer poriborte, somosto keys gulo kei variable hisebe bampashe declare korte pari, r acceess korte pari, r jodi same keys ar name mile jai, tahole oi keys ar name por por : colon diye oi keys ba property’r value change kore dite pari. r same vabe key ar value o change kore dite pari. jodi amra amon kono property'r value chai ja object ar moddhe nai, tahole undefiend asbe, amra default vabe sei property'r value o set kore dite pari, jodi kono value thake tahole default value asbe na, r jodi na thake tahole asbe

// jodi dan pashe array thake tahole desturing korbo bam pashe array diye r jodi object thake tahole korbo object diye

//Advance Array And Object Destructuring


//Normal method for access without destructuring
const product ={name: 'samsang s21', price: 1000, camera: '64mp'}
const name  = product.name = 'iphone';
const price = product.price;
const camera = product.camera;
// console.log(product);
// console.log(price);  // aivabe amra object ar key ar value gulo k access korar jonno, variable a same namer value access ar code likhe store korte pari, jate bar bar likhte na hoi.

//object destructuring
const {name1, shreni, age, roll} = {name1: 'salaat', shreni: 12, age: 17, roll: 1}; 
// console.log(name1, shreni, age, roll);  // aivabe amra access korte pari change o korte pari

//object destructuring method a notun key & value add kora
const {name3, position, age1, salary1 = 10, extra: extra,} = {name3: 'Azaan', position: 'programmar', age1: 23, salary1: 20};
console.log(name3, position,age1, salary1, extra);   // amra default value set korte parbo but main value na

// array destructuring
const[fn, sn, tn, four, fifth = 3] = [1, 2, 3];
console.log(fn, sn, tn, four, fifth);

// Use object destructuring in loops
const employees = [
    {
        'name': 'Rijik',    
        'address': '15th Park Avenue',
        'age': 3
    },
    {
        'name': 'Azaan',
        'address': 'USA',
        'age': 33
    },
    {
        'name': 'Salaat',
        'address': 'London',
        'age': 16
    }
];

for(let {name, age} of employees) {
    // console.log(`${name} is ${age} years old!!!`);
}
// Object এর property গুলো কেন 'name' এইভাবে single quote এ লেখা?
//  name: 'Rijik' এইভাবে কেন লেখা হয় নাই?
//দুইভাবেই লেখা যায়।
//'name' লেখা বাধ্যতামূলক না।
//When We will use Quatation in Property
//Quote লাগে যখন property name:
//1. Space থাকে
//2. Special character থাকে
//3. Number দিয়ে শুরু হয় 


//Destructuring Array?
//Assign variables with a default value:
let a, b, c;
[a=0, b=5, c=7] = [1, 2]
// console.log(a)
// console.log(b)
// console.log(c)

//Swapping Value:
let num1 = 1;
let num2 = 2;

[num1, num2] = [num2, num1] //swap
// console.log(num1)
// console.log(num2)

//Destructuring with functions
function numbers(){
    return[1, 2, 3, 4]
}
let [num3, num4] = numbers();
// console.log(num3);
// console.log(num4);

//Rest(...)operator:
let [num5, ...num6] = [1, 2, 3,4,5,6];
console.log(num5)
console.log(num6)