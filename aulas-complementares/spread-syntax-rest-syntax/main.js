// Spread de objetos
const person = {
  name: 'Giovanna',
  surname: 'Linda',
  age: 18
}

console.log('person:', person)
const personUpdate = { 
  ...person,
  age: 19
}

const personBirthdayYear = { 
  ...person,
  birthdayYear: 2003
}

console.log('personUpdate:', personUpdate)
console.log('person after personUpdate:', person)
console.log('birthday Year:', personBirthdayYear)

// Spread de arrays
const arr = [10, 20, 30]
// const arr2 = arr.concat(40)
const arr2 = [
  ...arr,
  40
]

console.log('arr:', arr)
console.log('arr2:', arr2)

// Spread de strings
const str = 'Giovanna'
// const arrStr = str.split('')
const arrStr = [...str]

console.log('str:', str)
console.log('arrStr:', arrStr)

// Rest com Destructuring Assignment
// delete newPerson.age
const { age, ...newPerson } = personBirthdayYear
console.log('newPerson:', newPerson)

// Rest syntax em funções
function sum(a, ...args) {
  return args
}

console.log('sum:', sum(5, 4, 3, 2, 1))