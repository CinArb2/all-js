//isograma

const isograma = (sentence) => new Set([...sentence]).size === sentence.length

console.log(isograma('ga to'))


