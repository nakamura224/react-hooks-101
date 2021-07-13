import{
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATIONS
} from '../actions'

const operationLogs = (state =[],action) => {
    switch(action.type){
        case ADD_OPERATION_LOG:
            const operationLog ={
                desctiption:action.description,
                operattedAt:action.operattedAt
            }
            return [operationLog, ...state]
        case DELETE_ALL_OPERATIONS:
            return []
        default:
            return state
    }
}
export default operationLogs