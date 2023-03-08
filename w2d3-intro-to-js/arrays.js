// Arrays


let movies = [
"50 first dates", 
"Mad Max Fury", 
"The Matrix", 
"Interstellar", 
"Rio Bravo"
];

let firstMovie = movies[0]
console.log(firstMovie);

// Push
movies.push("Lord of the Rings", "The Hobbit")
//console.log(movies);

movies.unshift('Star Wars')
//console.log(movies);

movies.pop();


console.log(movies);

movies.shift();
console.log (movies);

movies.splice(3, 1, "Spaceballs", "Alien");
console.log(movies);

movies.splice(4,3);
console.log(movies);

// Looping over Array with For Loop

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i])
}

// for each method
movies.forEach((movie, idx) => {
console.log(idx, movie);
});


// slice
const copyArr = movies.slice(1, 3)
console.log(copyArr);
console.log(movies);


// spread operator

let moviesCopy = [...movies]


// Arrays

const movies = [
    '50 First Dates',
    'Mad Max Fury',
    'The Matrix',
    'Interstellar',
    'Rio Bravo',
  ];
  
  let firstMovie = movies[0];
  console.log(firstMovie);
  console.log(movies[3]);
  
  // Push
  movies.push('Lord of the Rings', 'The Hobbit');
  
  //console.log(movies);
  
  movies.unshift('Star Wars');
  
  // console.log(movies);
  
  movies.pop();
  
  // console.log(movies);
  
  movies.shift();
  
  //console.log(movies);
  
  const removedElements = movies.splice(3, 1, 'Spaceballs', 'Alien');
  
  //console.log(removedElements);
  //console.log(movies);
  
  movies.splice(4, 3);
  
  //console.log(movies);
  
  console.log('=============');
  // Looping over Array with For Loop
  
  for (let i = 0; i < movies.length; i++) {
    //console.log(movies[i]);
  }
  
  // forEach Method
  movies.forEach((movie, idx) => {
    //console.log(idx, movie);
  });
  
  // For of Loop
  for (let movie of movies) {
    if (movie === 'The Matrix') break;
    //console.log(movie);
  }
  // Slice
  const copyArr = movies.slice(3);
  // console.log(copyArr);
  // console.log(movies);
  
  // Spread Operator
  
  let moviesCopy = [...movies];
  
  moviesCopy.push('Saw');
  console.log(movies);
  console.log(moviesCopy);
  
  // Create a string from array
  
  const moviesStr = movies.join(' ');
  console.log(moviesStr);
  
  const str = 'Hello world its a good friday';
  const number = '999-999-9999';
  
  const strArr = str.split('o');
  console.log(strArr);
  
  const numArr = number.split('-');
  console.log(numArr);
  
  const combined = [...strArr, ...numArr];
  console.log(combined);
  
  const names = ['Ramya', 'candra', 'Devin', 'Gino', 'Devin', 'arwa', 'ramya'];
  
  // indexOf
  console.log(names.lastIndexOf('Devin'));
  
  console.log(names.includes('Christina'));
  
  console.log(names.reverse());
  
  const nums = [6, 3, 4, 10];
  
  console.log(nums.sort());
  
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i].toUpperCase();
  }
  
  console.log(names);