function minimumDistances(a) {
    let objeto = [];
    a.forEach((el, index)=>{
      if(a.lastIndexOf(el) !== index){
        objeto.push(a.lastIndexOf(el) - index);
      }
    })
    return  objeto[0]? Math.min(...objeto): -1;
  }

//================================
function findRepeatedAge(students) {

  const objetoContar = students.reduce((newObject, item) => {
    if (newObject[item['age']]) {
      newObject[item['age']] += 1;
    } else {
      newObject[item['age']] = 1;
    }
    return newObject;
  }, {})
    
  return Number(Object.keys(objetoContar).reduce((a, b) => objetoContar[a] > objetoContar[b] ? a : b));
}

//================================

function countStudents(students, countries, countryName) {
    return students.map(el=>{
        for(let parametros of countries){
            if (el['country_id'] === parametros['id']) return parametros['name'];
        }
    }).reduce((contador, item)=> (item === countryName)? contador + 1 : contador, 0)
}

//==================================

function sumEvens(start, end) {
  let contador = 0;
  let ini = start
  if(start % 2 !== 0){
    ini = start - 1
  }
  for ( let i = ini + 2 ; i < end; i+=2){
    contador += i;
  }
  return contador;
}

//==================================

function plusMinus(arr) {
  let positivos = 0, negativos = 0, ceros = 0;
  
  arr.forEach(item => {
    if (item > 0) {
      positivos++
    } else if (item < 0) {
      negativos++
    } else {
      ceros++
    }
  })
  const newArray = [positivos, negativos, ceros];
  
  newArray.forEach(el => console.log((el / arr.length).toFixed(6)))
}

//==================================

function miniMaxSum(arr) {
  const sumaSinItem = arr.map(el => arr.reduce((a, b) => a + b) - el)
  
  console.log(`${Math.min(...sumaSinItem)} ${Math.max(...sumaSinItem)}`);
}

//==================================

function timeConversion(s) {
  let hora = s.slice(0,2);
  let nuevoFormato = s.slice(2, -2)
  let horaTarde = hora * 1 + 12;
  
  return hora === '12' && s.includes('AM')
  ? '00' + nuevoFormato
  : hora === '12' && s.includes('PM') || s.includes('AM')
  ? hora + nuevoFormato
  : horaTarde + nuevoFormato;
}

//==================================

function lonelyinteger(a) {
  return a.find(el => a.indexOf(el) === a.lastIndexOf(el));
}

//==================================

function diagonalDifference(arr) {
    let sumaD1 = 0,
        sumaD2 =0;
    for(let i = 0; i < arr.length; i++){
      sumaD1 += arr[i][i];
      sumaD2 += arr[i][arr.length - 1 - i];
    }
    return Math.abs(sumaD1- sumaD2);
}

//==================================

function countingSort(arr) {
  let newArray = new Array(100).fill(0);
  for (let item of arr) {
    newArray[item]++
  }
  return newArray;
}

//==================================
// Sum of Digits / Digital Root

function digital_root(n) {
  if (n <= 9) return n;
  return digital_root(n.toString().split('').reduce((a, b) => a + b * 1, 0))
}

//==================================

// Multiples of 3 or 5

function solution(number) {

  let suma = 0;
  if (number < 0) return 0;
  for (let i = 0; i < number; i++){
    if (i % 5 === 0 || i % 3 === 0) {
      suma += i;
    }
  }
  return suma;
}

//==================================

function findOdd(A) {
  let objetoConteo = A.reduce((objeto, b) => {
    if (objeto[b]) {
      objeto[b]++;
    } else {
      objeto[b] = 1;
    }

    return objeto;
  }, {});
  for (let item in objetoConteo) {
    if (objetoConteo[item] % 2 !== 0) {
      return item * 1;
    }
  }

}

//==================================

// Devolver los elementos de un arreglo en bloques de 2, cada bloque representa una página

function paginateUsers(users, page) {
    if (page === 0) { return [] }
    return [users[(page * 2) - 2], users[(page * 2)-1]]
}

//==================================

//Cuenta los estudiantes que han enviado su aplicación por cada canal

function countApplicationsByChannel(users) {
    return users.reduce((objeto, b) => {
        if (b.application !== null) {
            if (objeto[b.channel]) {
                objeto[b.channel]++
            } else {
                objeto[b.channel] = 1;
            }
        }
        return objeto;
    }, {})
}

// return the name of the top-paid person

function topSalary(salaries) {
  let valuePaid = 0;
  let topPaid = null;
  for (let [key, value] of Object.entries(salaries)) {
    if (value > valuePaid) {
      valuePaid = value;
      topPaid = key;
    }
  }
  return topPaid;
}
function topSalary(salaries) {
  return Object.keys(salaries).reduce((a,b)=> salaries[a] > salaries[b] ? a : b)
}

//calculates the sum of numbers
function sumTo(n) {
  
  return n > 1? n + sumTo(n - 1): n;

}

//calculate factorial
function factorial(n) {
  
  return n > 1 ? n * factorial(n - 1) : n;

}

// Write a function fib(n) that returns the n-th Fibonacci number.

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2)
} // too slow

// Fibonacci number with a for loop // its faster than the previous one

function fib(n) {
  let masAnterior = 0;
  let anterior = 1;

  if (n <= 1) return n;

  for (let i = 2; i <= n; i++){
   
    let suma = anterior + masAnterior;
    masAnterior = anterior;
    anterior = suma;
  }
  return anterior;
}

//// func("abc", "bc") //returns true

function checkWordEnd(a, b) {
  
  const secondWordLength = b.length

  const final = a.slice(-secondWordLength)

  return final === b
}

const checkWordEnd1 = (a, b) => a.slice(-b.length) === b

const checkWordEnd2 = (a, b) => a.endsWith(b)

//replace letters with numbers

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

//isograma

const isograma = (sentence) => new Set([...sentence]).size === sentence.length

// return elements that are repeated an even number of times

const evenRepetition = (ar) => {
  const checkRepetition = ar.reduce((acc, curr) => {
    if (!acc[curr]) acc[curr] = 0
    acc[curr] ++
    return acc
  }, {})

  return Object.keys(checkRepetition).filter(el => checkRepetition[el] % 2 === 0)
}

// transform

const input = { nombres: ["Bruno", "Andrea"], edades: [20, 19]}

const transform = (names, ages) => {
  return input.nombres.reduce((result, nombre, index) => {
    return [...result, {
      id: String(index + 1),
      nombre,
      edades: input.edades[index]
    }]
  }, [])
}

console.log(transform(input))