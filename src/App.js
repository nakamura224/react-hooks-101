import React,{ useEffect ,useState} from 'react'

const App = (props) => {
  const [state,setState] = useState(props)
  const {name,price} = state

  useEffect(() => {
    //DOMが変更されるたびにレンダリングされる
    console.log("This is like componentDidMount or componentDidUpdate")
  })
  useEffect(() => {
    //空の配列を渡すことで際レンダリングを防止できる
    console.log("This is like componentDidMount")
  },[])
  useEffect(() => {
    //stateの名称を渡すことで変更のたびにレンダリング
    console.log("This callBack is for name only")
  },[name])
  
const reset = () => {
  setState(props)
}
  return (
    <>
      <p>現在の{name}は{price}円です</p>
      <button onClick={() => setState({...state,price:price + 1})}>+1</button>
      <button onClick={() => setState({...state,price:price -1})}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange = {e=> setState({...state,name:e.target.value})}/>
    </>
  )
}

App.defaultProps = {
  name:"サンプル",
  price:1000
}

export default App
