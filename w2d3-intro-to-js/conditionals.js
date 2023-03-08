// Conditionals and If statements

// Operators
// === - strictly equals, compares value and datatype 
// == - loose equals, only compares value
// greater than - >
// less than - <
// less than or equal to - <=
// greater than or equal to - >=
// AND - &&
// OR - || 
// loose NOT equal - !=
// strict NOT equaL - !==


// exercies:

//1.
let num =10

if (num > 0) {
  // this will execute if conditional is tue
  console.log("num is positive")  
} else {
    // this will execute if conditional is false
    console.log ("num is negative")

}

// 3.
let userAge = 17

if (userAge >= 18) {
    console.log("Access Granted!")
} else {
    console.log ("Access Denied!")
}

let val = 100

if (val > 0) {
if (val > 100) {
    console.log("val is greater than 100")
} else if (val === 100) {
    console.log("val is 100")
} else {
    console.log("val is less than 100")
}
}else {
    console.log("num is negative")
}


//4.

let grade = 55
if (grade >= 90) {
    console.log ("A")
} else if (grade >= 80) {
    console.log ("B")
}
    else if (grade >=70) {
        console.log ("C")
    }
    else if (grade >=55) {
        console.log ("D")
    }
    else {
        console.log ("F")
    }



    // WHILE LOOPS

    // While Loops

//Exercises

// 1.
let i = 10;

while (i >= 0) {
  //console.log(i);
  i--;
}

// 2.

// let a = 0;

// while (a < 35) {
//   console.log(a);
//   a += 3;
// }

let a = 0;

while (a < 35) {
  if (a % 3 === 0) {
    console.log(a);
  }
  a++;
}

//3.

let x = 0;

while (x < 100) {
  console.log(x);
  x += 5;
}

// while (x < 100) {
//   if (x % 5 === 0) {
//     console.log(x);
//   }
//   x++;
// }

let y = 0;

while (y < 20) {
  if (y % 2 === 0) {
    console.log(y * 3);
  }
  y++;
}

console.log('modulo: ', 10 % 3 === 0);