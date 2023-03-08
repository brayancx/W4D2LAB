/*
==================
For loops
=======
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}
// what is the value of i outside of the loop
console.log(i);// this wil throw a reference error

exercises:

1.
for (let i =1; i < 10; i+=2) {
    console.log (i);
}

console.log ('+++++++++++++');

for (let i = 6; i <= 60; i ++) {
if ((i % 3) === 0) {
    console.log (i)
}
}


// // excercise 3.

let str = '#';

for (let i = 0; i < 7; i++) {
    console.log(str);
    str += "#";
}

    
