/*
  function sum(a, b) {
    return a + b
  }

  const sum = function(a, b) {
    return a + b
}*/

const sum = (a, b) => {
  return a + b
}

console.log('sum:', sum(1,2))
// quando tem somente return
const mult = (a, b) => a * b

console.log('mult:', mult(2,2))
// não precisa de parenteses com um argumento
const plusOne = a => a + 1

console.log('plusOne:', plusOne(5))

const getReturn = () => {
  return {
    name: 'Giovanna'
  }
}

console.log('getReturn:', getReturn())

// sintaxe retornando objetos
const getObject = () => ({
	name: 'Giovanna'
})

console.log('getObject:', getObject())