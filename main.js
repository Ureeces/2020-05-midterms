/*********************************
My Code Here
 ********************************/

 // capitalizeSentences - capitalizes every sentence after the first in the given paragraph
const capitalizeSentences = function(paragraph) {
  let capitalized = paragraph[0].toUpperCase() + paragraph[1].toLowerCase();
  
  for(let i = 2; i < paragraph.length; i++) {
    let prev = paragraph[i - 2];
    prev += paragraph[i - 1];
    
    let curr = paragraph[i];

    if(prev === ". ") {
      capitalized += curr.toUpperCase();
    }

    else {
      capitalized += curr.toLowerCase();
    }
  }

  return capitalized;
}

// isValidPassword - returns false if there is a space in the given string or its length is less than 12 characters,
// and true otherwise--in other words, a valid password has no spaces and is at least 12 characters, 
// and this function tells you if the string passed in follows those rules
const isValidPassword = function(password) {
  if(password.length < 12) {
    return false;
  }

  for(let i = 0; i < password.length; i++) {
    if(password[i] === " ") {
      return false;
    }

  }
  return true;
}

// makeHalfSquares - returns a new array where every number in the given array has been squared and then halved (divided by two)
const makeHalfSquares = function(numbers) {
  const halfSquares = [];
  
  for(let i = 0; i < numbers.length; i++) {
    let currNum = numbers[i];
    let square = currNum ** 2;
    let halfSquare = square / 2;

    halfSquares.push(halfSquare);
  }

  return halfSquares;
} 

// countAs - returns the number of grades that are at least 90 in the given array
const countAs = function(grades) {
  let aCount = 0;
  
  for(let i = 0; i < grades.length; i++) {
    let currGrade = grades[i];
    if(currGrade >= 90) {
      aCount++;
    }
  }

  return aCount;
}


if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
