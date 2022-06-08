
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