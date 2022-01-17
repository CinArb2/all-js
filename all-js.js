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