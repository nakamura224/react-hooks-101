import React,{useReducer, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from './EventForm'
import reducer from '../reducers'
import Events from './Events'
import AppContext from '../contexts/AppContext'


const App = () => {
  //const [state,setState] = useState(props)
  const initialState = {//まず状態を初期化
    events: [],
    operationLogs:[]
  }
  const [state,dispatch] = useReducer(reducer,initialState)
  //const output = useState(0) 配列(2つの要素)を返す
  //const [count,setCount] = useState(0)//分割代入で代入されるものに名前をつける.setCountはcountを操作する関数
  return(
  <AppContext.Provider value = {{ state,dispatch}}>
    <div className ="container-fluid">
      <EventForm />
      <Events />
    </div>
  </AppContext.Provider>
  )
}
export default App
