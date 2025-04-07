

import {combineReducers} from 'redux'

const initState = {
    count: 0
}


const addSubReducer = (state = initState, action) => {

    switch(action.type) {
        case 'add':
            return {count: state.count + 1}
        case 'sub':
            return {count: state.count - 1}
        default:
            return state
    }

}
const subReducer = (state = initState, action) => {
    return state
}

export default combineReducers({addSubReducer,subReducer})