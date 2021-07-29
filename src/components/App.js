import React,{useReducer, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from './EventForm'
import reducer from '../reducers'
import Events from './Events'
import AppContext from '../contexts/AppContext'
import OperationLogs from './OperationLogs'


const APP_KEY = 'appWithRedux'
const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  //const [state,setState] = useState(props)
  const initialState = appState ? JSON.parse(appState) : {//まず状態を初期化 string型をオブジェクトの型に戻す
    events: [],
    operationLogs:[]
  }
  const [state,dispatch] = useReducer(reducer,initialState)
  //const output = useState(0) 配列(2つの要素)を返す
  //const [count,setCount] = useState(0)//分割代入で代入されるものに名前をつける.setCountはcountを操作する関数
  useEffect(() => {
     //localstrageへはstrign型にして保存する
     localStorage.setItem(APP_KEY, JSON.stringify(state))
    },[state])


  return(
  <AppContext.Provider value = {{ state,dispatch}}>
    <div className ="container-fluid">
      <EventForm />
      <Events />
      <OperationLogs />
    </div>
  </AppContext.Provider>
  )
}
export default App
