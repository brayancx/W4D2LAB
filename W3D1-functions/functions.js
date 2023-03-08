// FUNCTIONS

/
// 1. Function Declaration
sayHello('Yana');
// This will work because of function declaration hoisting.

function sayHello (name) {   
console.log("Hello " + name + "!")
}

// 2. Function Expression
const sayHello2 = function (name) {
    console.log(" Hello " + name + "!")
}
sayHello2("Brayan"); 

// Arrow Function
const add = (a, b) => a + b; // implicity returns

const add = (a, b) => {
    return a + b;
}
console.log(add(10,5));

function areBothEven(n1, n2){
    return !(n1 % 2) && !(n2 % 2);
}

console.log(areBothEven(4, 6));

//exercise 1

function computeArea(width, height);{
console.log("The area of a rectangle with a width of " + width + "and a height of "+ height + "is" + width * height + "square units");
}
console.log(computeArea(5, 5));

//exercise 2

const planetHasWater = function (planet) {
    if (planet === "earth" || planet === "mars") {
        return true
    } else {
        return false
    }
}

// extra arguments

// 1. arguments variable
function getDevObject(name) {
    let skills = [];
    // console.log(arguments[0]);
    for (let i = 1; i < arguments.length; i++) {
      skills.push(arguments[i]);
    }
    return {
      devName: name,
      jobSkills: skills,
    };
  }
  
  let maria = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');
  //console.log(maria);
  
  // 2. Rest Params
  
  function getDevObject(name, ...skills) {
    console.log(skills);
    return {
      devName: name,
      jobSkills: skills,
    };
  }
  
  getDevObject('Annson', 'coder', 'developer', 'javascript', 'HTML');
 

  // Default Params
function setColor(bicycle, color = 'purple') {
    bicycle.color = color;
  }
  const harley = {};
  
  setColor(harley, 'Black');
  console.log(harley);
  
  // Passing an Anonymous Function
  
  var colors = ['red', 'green', 'blue'];
  
  // colors.forEach(function(color) {
  //   console.log(color);
  // });
  
  colors.forEach((color) => {
    console.log(color);
  });
  
  // Scope explain
  
  // global scope
  function foo() {
    let b = 0; // fn scope
  
    //fn scope
    function bar() {
      let c = 1; //fn scope
      console.log(b);
    }
    bar();
  }
  
  foo();
  
  // Block Scope
  let c = 'hi';
  
  if (true) {
    let c = 10;
    console.log(c);
  }
  
  console.log(c);
  
  function varTest() {
    var x = 1;
    if (true) {
      var x = 2; // same variable!
      console.log(x); // 2
    }
    console.log(x); // 2
  }
  
  function letTest() {
    let x = 1;
    if (true) {
      let x = 2; // different variable
      console.log(x); // 2
    }
    console.log(x); // 1
  }
  
  //IIFE
  // Immediately Invoked Function Expression
  
  (function () {
    console.log('IM running without a proper call');
  })();



====================================================

// Objects
// * key/value pairs
// * not in order
// used to store data that can be classified as a noun
// can store any data type (even functions)

// my firt object
const car = {
    color: "blue",
    hp: 4000,
    year: 1989
};
console.log(car);
console.log(car.color)// to call a specific thing

// adding properties to an object

const house = {
    doors: 9

}
//adding to a property
house.windows = 30;

house.hasGarden = true;

console.log(house);

// changing a property
const bicycle = {
    isATrycicle: false
}

bicycle.isATricycle = true;

console.log(bicycle);

// using sqare bracket notation on object 
// you can use a variable.
const key = "isATricycle"

bicycle[key]
console.log(bicycle[key]);
===========================
// you can do this

const mogwai = {};

mogwai.name = 'Gizmo';

console.log(mogwai);

// Cannot do this
const mogwai2 = {};

//mogwai2 = { name: 'Gizmo' }; //Throws an error becuase variable is const

// Uniques Keys

const borough = {
  name: 'Brooklyn',
  name: 'The Bronx',
};
console.log(borough);

//=> Object { name: "The Bronx" }
// The last key will override because node read JS from top to bottom

const obj = {
  salutation: 'hi',
  count: 4,
  something: '',
};

if (obj.salutation === 'hi') {
  console.log('ok');
}

for (let i = 0; i < obj.count; i++) {
  console.log(i);
}

// Checking if this property has value
if (obj.something) {
  console.log('ok');
} else {
  console.log('no go i dont have that property');
}

==================================================
==================================================

/// Classes

// Defining a Class

class Vehicle {
    constructor(vinParam, makeParam, modelParam = 'car') {
      this.vin = vinParam;
      this.make = makeParam;
      this.model = modelParam;
      this.running = false;
      this.speed = 0;
      // console.log('Vehicle');
      // console.log(this.vin);
      // console.log(this.make);
      // console.log(this.model);
    }
  
    start() {
      this.running = true;
      console.log('running...');
      //console.log(this);
    }
  
    stop() {
      this.running = false;
      console.log('stopped...');
    }
  
    zeroToSixty() {
      for (let i = 0; i <= 60; i++) {
        console.log('Speed: ' + this.speed);
        this.speed += 1;
      }
    }
  }
  
  // const v1 = new Vehicle('X123Y', 'Boeing');
  
  const car = new Vehicle('832746', 'Nissian', 'Maxima');
  
  // console.log(v1);
  
  car.start();
  console.log(car);
  car.stop();
  console.log(car);
  
  car.zeroToSixty();
  
  ======================
  ======================
  ======================

  //OBJECTS - CLASSES CONTINUED**

  const adventurer = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"]
    companion: {
        name: "Velma",
        type: "Bat",
        companion: {
            name: "Pepe",
            type: "Parasite",
            belongings: ["Scuba tank", "Rogan josh", "health insurance"]

        }
    }
  }

  // accessing an array within an object

console.log(adventurer.belongings);

// Accessing an element from an array within an object

console.log(adventurer.belongings[1]); // accessing potion

//Iterate over an array that is within an object
for(let i = 0; i < adventurer.belongings.length; i++){
console.log(adventurer.belongings[i]);
}

//Accessing an object/object property within an object
console.log(adventurer.companion.name);
console.log(adventurer.companion.type);

  //Using an object within an object
  console.log(adventurer.companion.companion.name)
  
  //Use an array within an object within an object within an object
  console.log(adventurer.companion.companion.belongings[2]);
  for (let i = 0; i < adventurer.companion.companion.belongings.length; i++) {
    console.log(adventurer.companion.companion.belongings[i]);
  }
  
  // USING AN ARRAY OF OBJECTS

  
  
==========================================
==========================================
==========================================

// CLASSES CONTINUED

/// ====================
// Classes Continued...
/// ====================

//Character
class Character {
    constructor(
      nameParam,
      ageParam,
      eyesParam,
      hairParam,
      lovesCats = false,
      loveDogs
    ) {
      this.legs = 2;
      this.arms = 2;
      this.eyes = eyesParam;
      this.hair = hairParam;
      this.name = nameParam;
      this.age = ageParam;
      this.lovesCats = lovesCats;
      this.lovesDogs = loveDogs || false;
    }
  
    greet(otherCharacter) {
      console.log('hi ' + otherCharacter + '!');
    }
  
    classyGreeting(otherClassyCharacter) {
      console.log('Greetings ' + otherClassyCharacter.name + '!');
    }
  
    setHair(hairColor) {
      this.hair = hairColor;
    }
  
    smite() {
      console.log('I smite thee you vile person');
    }
  }
  //=======================
  // child class for Hobbit. Inherits from Character class
  class Hobbit extends Character {
    constructor(name, age, eyes, hair) {
      super(name, age, eyes, hair);
      this.skills = ['thievery', 'speed', 'willpower'];
    }
  
    steal() {
      console.log('lets get away! gotcha stuff haha!');
    }
  
    greet(otherCharacter) {
      console.log(`Hello ${otherCharacter}`);
    }
  
    smite() {
      super.smite(); // how to access parents properties and methods
      // ^ running the original smite method from the Character class
      this.steal();
    }
  }
  
  const josh = new Character('Josh the Great', 30, 'brown', 'maroon', true, true);
  const bowser = new Character('Bowser the Tort', 2, 'green', 'Shell');
  console.log(josh);
  console.log(bowser);
  // console.log(typeof josh);
  // console.log(typeof bowser);
  
  josh.greet('bowser');
  josh.smite();
  josh.setHair('short');
  console.log(josh);
  bowser.greet('josh');
  bowser.smite();
  
  // interacting with another character
  josh.classyGreeting(bowser);
  bowser.classyGreeting(josh);
  
  const bilbo = new Hobbit('Bilbo Baggins', 120, 'brown', 'brown');
  console.log(bilbo);
  bilbo.smite();
  bilbo.steal();
  bilbo.greet('Gandalf');
  bilbo.smite();
  
  /// ====================
  // Factories
  /// ====================

  class Car {
    constructor(maker, serialNumber) {
        this.serialNumber = serialNumber;
        this.maker = maker;
    }

drive() {
    console.log('Vroom Vroom');
    const newCar = new car('Mazda', 12345);
}
  }

  =============================
  =============================
  =============================

  // Stack and Queues

/*
Queues - follow FIFO (first in, first out) behavior
*/

class Queue {
    constructor() {
      this.data = [];
    }
  
    getQueue() {
      return this.data;
    }
  
    // Adds to the front of the array
    enqueue(dataToQueue) {
      this.data.unshift(dataToQueue);
    }
  
    // Removes from the end of the array
    dequeue() {
      return this.data.pop();
    }
  
    // Will return the piece of data that is up next to be dequeued
    peek() {
      return this.data[this.data.length - 1];
    }
  
    // Checking if data array is empty, returns boolean
    isEmpty() {
      return !this.data.length;
    }
  }
  
  const myFirstQueue = new Queue();
  
  myFirstQueue.enqueue('someItem');
  // myFirstQueue.enqueue('second');
  //myFirstQueue.dequeue();
  
  console.log(myFirstQueue.isEmpty());
  
  console.log(myFirstQueue.getQueue());
  
  /**
   * Stacks - follow LIFO (last in, first out) behavior
   */
  
  // Example of call stack
  
  function a() {
    console.log('a');
    b();
  }
  
  function b() {
    console.trace('the end of the stack');
    //c(); this will cause an infinite loop and eventually reach stack overflow
  }
  
  function c() {
    a();
  }
  
  //c();

  =========================
  =========================

/**
 * Linked Lists
 */

// Example of O(N^2), Nested for loops
// In total, this will run 25 times (5x5)
// for (let i = 0; i < 5; i++) {
//   console.log('outer loop: ' + i);
//   for (let j = 0; j < 5; j++) {
//     console.log('innner loop: ' + j);
//   }
// }

class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  const n = new Node('someData');
  const n2 = new Node('hii', n);
  
  // console.log(n2);
  
  /**
   * Methods
   * - insertFirst()
   * - getSize()
   * - getFirst()
   * - getLast()
   * - clear()
   * - removeFirst()
   * - removeLast()
   * - insertLast()
   * - getAt()
   * - removeAt()
   * - insertAt()
   *
   */
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    //O(1)
    insertFirst(data) {
      const newNode = new Node(data, this.head);
      this.head = newNode;
      this.size++;
    }
  
    // O(1)
    getSize() {
      return this.size;
    }
  
    //O(1)
    getFirst() {
      return this.head;
    }
  
    // O(N)
    getLast() {
      if (!this.head) {
        return null;
      }
  
      let walker = this.head;
      while (walker.next) {
        walker = walker.next;
      }
  
      return walker;
    }
  
    //O(1)
    clear() {
      this.head = null;
      this.size = 0;
    }
  
    // O(1)
    removeFirst() {
      this.head = this.head.next;
      this.size--;
    }
  
    removeLast() {
      if (!this.head) {
        return;
      }
  
      if (!this.head.next) {
        this.head = null;
        this.size--;
        return;
      }
  
      let previous = this.head;
      let walker = this.head.next;
      while (walker.next) {
        previous = walker;
        walker = walker.next;
      }
      previous.next = null;
      this.size--;
    }
  }

  insertLast(data) {
const last = this.getLast()
if (last) {
last.next = new Linkedlist();
}
this.size++; 
  }

  getAt(index){
    let counter = 0
    let walker = this.Head
    while (walker){
    if (counter == index){
        return walker
    }
    
    counter ++ 
    walker = walker.next
}
    return null 
  }
  
  const linkedList = new LinkedList();
  
  //Insert First
  linkedList.insertFirst('someData');
  linkedList.insertFirst('node');
  linkedList.insertFirst('node1');
  
  //getSize method
  //console.log(linkedList.getSize());
  
  //getFirst
  //console.log(linkedList.getFirst());
  
  //getLast
  console.log(linkedList.getLast());
  
  console.log('=========LinkedList Below=========');
  
  console.log(linkedList);



========================================


  class Person {
    constructor(name, age, height) {
      this.name = name;
      this.age = age;
      this.height = height;
    }
  
    introduce() {
      console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old and I measure in at ${this.height}.`);
    }
  
    greet() {
      console.log("Hello, nice to meet you!");
    }
  
    eat(food) {
      console.log(`I'm eating ${food}.`);
    }
  }
  
  class PostalWorker extends Person {
    constructor(name, age, height, route) {
      super(name, age, height);
      this.route = route;
    }
  
    deliverMail() {
      console.log(`Delivering mail on route ${this.route}.`);
    }
  
    sortMail() {
      console.log("Sorting mail.");
    }
  }
  
  class Chef extends Person {
    constructor(name, age, height, dish) {
      super(name, age, height);
      this.dish = dish;
      console.log(Chef);
    }
  
    cook(food) {
      console.log(`Cooking ${food} the ${this.dish} style.`);
    }
  
    taste(food) {
      console.log(`Tasting ${food} to make sure it's perfect.`);
    }
  }

  const postalWorker1 = new PostalWorker("Brayan", 35, "6'4", 1);
postalWorker1.introduce(); // logs "Hi, my name is Alice, I'm 35 years old and I identify as female."
postalWorker1.deliverMail(); // logs "Delivering mail on route 1."

const postalWorker2 = new PostalWorker("Josh", 25, "6'5", 2);
postalWorker2.greet(); // logs "Hello, nice to meet you!"
postalWorker2.sortMail(); // logs "Sorting mail."

const chef1 = new Chef("Charlie", 27, "non-binary", "Italian");
chef1.eat("pasta"); // logs "I'm eating pasta."
chef1.cook("pizza"); // logs "Cooking pizza in the Italian style."

const chef2 = new Chef("Cameron", 18, "6'0", "French");
chef2.taste("sauce"); // logs "Tasting sauce to make sure it's perfect."
chef2.introduce(); // logs "Hi, my name is Dave, I'm 50 years old and I identify as male."

  