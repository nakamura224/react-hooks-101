
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { combineReducers } from "redux"

import events from "./events"
import operationLogs from "./operationLogs"

export default combineReducers({ 
    events,
    operationLogs
 })

ReactDOM.render(<App />, document.getElementById('root'))



