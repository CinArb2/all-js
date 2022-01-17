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

