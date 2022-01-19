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
