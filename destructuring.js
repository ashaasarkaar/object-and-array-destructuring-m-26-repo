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
console.log(name1, shreni, age, roll);  // aivabe amra access korte pari change o korte pari