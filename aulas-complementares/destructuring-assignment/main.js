// Destructuring de objetos
const person = {
  identification: 'Giovanna',
  age: 18,
}

const { identification } = person
console.log('o nome é', identification)
// convencional
const age = person.age
console.log('a idade é', age)

const doors = 4
const color = 'blue'

// utiliza quando as variáveis tiverem o mesmo nome
const car = { 
  doors,
  color }
// renomeia as props
const { 
  doors: doorsRenamed,
  color: colorRenamed 
} = car

console.log('car', car)
console.log('doors:', doorsRenamed)
console.log('color:', colorRenamed)

// ===================================================

// Destructuring de arrays
const coords = ['Coordenadas', 100, 200]
// const x = coords[0]
// const y = coords[1]

// const [, y] = coords
// ignorando valores e suas posições
const [title, x, y] = coords

console.log('Titulo:', title)
console.log('valor de y:', y)
console.log('valor de x:', x)

// ===================================================
// Destructuring em argumentos de função
 
function getCoords([x, y]) {
  return {
    x: x,
    y: y
  }
}

console.log(getCoords([100, 200]))

function getConfig({ config: configRenamed }) {
  return configRenamed
}

console.log(getConfig({config: true}))