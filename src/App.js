import React,{useState} from 'react'

const App = () => {
  const [count,setCount] = useState(0)//初期値
 const increment = () =>{
   setCount(count+1)
 }
 const increment0 = () => {
   setCount(count+10)
 }
 const decrement = () => {
   setCount(count -1)
 }
 const increment2 = () =>{
   setCount((previousCount) => previousCount + 1)
 }
 const decrement2 = () => {
  setCount((previousCount) => previousCount - 1)
}
const reset = () => {
  setCount(0)
}
const double = () => {
  setCount(count * 2)
}
const Fizz = () =>{
  setCount(previousCount => {
    if (previousCount % 3 === 0){
      return previousCount / 3
      }else{
        return previousCount
      }
  })
 
}
  return (
    <>
      <div>count:{count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={increment0}>+10</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick = {reset}>reset</button>
      </div>
      <div>
        <button onClick = {double}>x2</button>
      </div>
      <div>
        <button onClick = {Fizz}>3の倍数の時のみ3で割った数を表示</button>
      </div>
    </>
  )
}

export default App
