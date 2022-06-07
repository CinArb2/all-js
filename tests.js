

// func("abc", "bc") //returns true

function checkWordEnd(a, b) {
  
  const secondWordLength = b.length

  const final = a.slice(-secondWordLength)

  return final === b
}

const checkWordEnd1 = (a, b) => a.slice(-b.length) === b

const checkWordEnd2 = (a, b) => a.endsWith(b)


