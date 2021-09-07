// mutabilidade de variaveis
let counter = 0
counter = 1

// mutabilidade de objetos
const obj = {
  a: 1
}
obj.a = 2

// imutabilidade
// evitar mutabilidade, fazendo o seguinte(criar uma copia e atribuir ou retirar os valores que desejar)
const obj2 = {
  ...obj,
  b: 2,
  c: 3,
  d: 4
}

// remover(aqui ele separa o a e cria outro objeto que recebe as outras chaves restantes)
const { c, ...obj3 } = obj2

console.log('obj', obj)
console.log('obj2', obj2)
console.log('obj3', obj3)

// não criam copias, mudam o original 
const arr = [1, 2, 3]
// adiciona mais um(não se utiliza em React)
arr.push(4)
// remove o ultimo
arr.pop()
console.log('array:', arr)

// trabalhando com cópias
const arr2 = arr.concat(4)
console.log('arr2', arr2)