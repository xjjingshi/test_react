import { legacy_createStore as createStore } from 'redux'

import combineReducers from './reducers'
const store = createStore(combineReducers)

store.subscribe(()=> {
    console.log(store.getState())
})


export default store