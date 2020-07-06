/*********************************
My Code Here
 ********************************/
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
