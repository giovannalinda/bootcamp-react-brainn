import style from './counter.module.css'
console.log(style)

export default function Counter({ counter, setCounter }) {
  return (
    <>
      <h1>{counter}</h1>
      <input className={style.input} type="text" />
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
      <button onClick={() => setCounter((counter) => counter - 1)}>-</button>
    </>
  )
}