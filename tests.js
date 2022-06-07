
//replace letters by numbers

// func("abc def") // returns 123456

// const sentence = "J"
// const sentence2 = "a"

// sentence.charCodeAt(0)

// console.log(sentence.charCodeAt(0) - 64)
// console.log(sentence2.charCodeAt(0))

const lettersToNumbers = (sentence) => {

  const arrayLetters = sentence.split('')
  
  const mapArray = arrayLetters.map(el => el.toUpperCase().charCodeAt(0) - 64)

  return mapArray.filter(el => el > 0 && el < 27).join(' ')
}



const lettersToNumbers2 = (sentence) => {
  const arrayLetters = sentence.split('')
  
  const reduceArray = arrayLetters.reduce((acc, letter) => {
    let a = letter.toUpperCase().charCodeAt(0) - 64
    
    return a > 0 && a < 27 ? acc+= a : acc
  }, "")
  
  return reduceArray
}

console.log(lettersToNumbers2('abc dēf'))