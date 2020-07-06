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

// deleteMiddleLetters -> deletes the middle letter(s) from a string, returning the remaining string
const deleteMiddleLetters = function(str) {
  let deleted = "";
  const len = str.length;
  
  const isEvenLength = str.length % 2 === 0 ? true : false;
  const isOddLength = isEvenLength ? false : true;


  let middleIndex = Math.floor(len / 2);

  if(isEvenLength) {
    for(let i = 0; i < len; i++) {
      if(i !== middleIndex - 1 && i !== middleIndex) {
        deleted += str[i];
      }
    }
  }

  if(isOddLength) {
    for(let i = 0; i < len; i++) {
      if(i !== middleIndex) {
        deleted += str[i];
      }
    }
  }

  return deleted;
}

// lastIndexOfSpace -> returns the last appearance of a space character within the given string, and -1 if none is found
const lastIndexOfSpace = function(str) {
  let spaceIndex = -1;
  
  for(let i = 0; i < str.length; i++) {
    let curr = str[i];
    if(curr === " ") {
      spaceIndex = i;
    }
  }

  return spaceIndex;
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
