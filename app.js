// Constructor function for creating Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
  
    // Method defined within the constructor function
    this.greet = ()=> {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  // Creating instances (objects) using the constructor function
  const person1 = new Person('John', 30);
  const person2 = new Person('Alice', 25);
  
  // Using methods of the objects
  person1.greet(); // Output: Hello, my name is John and I am 30 years old.
  person2.greet(); // Output: Hello, my name is Alice and I am 25 years old.


//constructor
  function Area(length,breadth){
       this.length=length;
       this.breadth=breadth;
       
       this.area = ()=>{
        let a = length*breadth;
        console.log(`The area is : ${a}`);
       }
  }

  const area1 = new Area(10,10);

  area1.area();


//object literal
function USN(usn1,usn2,usn3,usn4){
    const CSD={usn1,usn2,usn3,usn4};
    console.log(CSD);
     
}

var newUsn1 = prompt("enter your name:");
var newUsn2 = prompt("enter your name:");
var newUsn3 = prompt("enter your name:");
var newUsn4 = prompt("enter your name:");
 USN(newUsn1,newUsn2,newUsn3,newUsn4)

//destructing object
const details ={
  Name : "anikethan",
  age : 18
}

const {Name,age} = details;
console.log(Name,age);






// destructing array
  const arr = ["anikethan","d","shetty"];
  const [firstName,middleName,lastName] = ["anikethan","d","shetty"];


  // for of loop

 
  let incomes = [62000, 67000, 75000];


for (const income of incomes) {
    console.log(income);
}
