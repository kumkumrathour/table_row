
//  object enteries in array form code
const person={
    name:"neha",
    age:34,
    subject:'science',
    marks: 43
}


// method 1
// console.log(Object.entries(person));


// method 2
// for(const [key,value] of Object.entries(person)){
//     console.log(` ${key} | ${value}`)
// }


// method 3
const value= new URLSearchParams(Object.entries(person))
console.log(value.toString())







// normal code to print the value of person

// const person1 ={
//     name1 :"hellan",
//     age:65
// };
// console.log(person1)