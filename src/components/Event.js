import React,{useReducer,useState} from 'react'

const Event =({dispach,event}) =>{
  const handleClickDeleteButton=()=>{
    dispach({type:'DELETE_EVENT',
              id:event.id})
}
return(
  <tr>
    <td>{event.id}</td>
    <td>{event.title}</td>
    <td>{event.body}</td>
    <td><button type = "button" className ="btn btn-danger" onClick ={handleClickDeleteButton}>削除</button></td>
  </tr>
)
}
export default Event
