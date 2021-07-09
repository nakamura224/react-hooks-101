import React,{useState} from 'react'
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS
} from '../actions'

const EventForm = ({state,dispatch}) =>{
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')

  const addEvent = (e) => {
    e.preventDefault()//画面の再レンダリングを防止できる
    dispatch({
      type:CREATE_EVENT,
      title,
      body
    })
    setTitle('')
    setBody('')
  }
  const deleteAllEvents = (e) =>{
    e.preventDefault()//リロードが行われないようにする
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if(result){
      dispatch({type:DELETE_ALL_EVENTS})
    }
    
  }

  const unCreatavle = title === '' ||body === '' 
    return(
<>
<h4>イベント作成フォーム</h4>
    <form>
      <div className="form-group">
        <label htmlFor ="formEventTitle">タイトル</label>
        <input className ="form-control" id ="formEventTitle" value ={title} onChange = {e => setTitle(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor ="formEventBody">ボディー</label>
        <textarea className ="form-control" id ="formEventBody" value ={body} onChange = {e => setBody(e.target.value)}/>
      </div>
      <button　className="btn btn-primary" onClick = {addEvent} disabled = {unCreatavle}>イベントを作成する</button>
      <button className ="btn btn-danger" onClick ={deleteAllEvents} disabled = {state.length === 0}>全てのイベントを削除</button>
      
    </form>
</>
    )
}
export default EventForm