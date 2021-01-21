 import { combineReducers } from 'redux' // pozwala nam na kombinowanie ze sobą reducrerów i co za tym idzie stanów tych reducerów w jeden duży stan w root-reducerze

 import userReducer from './user/user.reducer'

export default combineReducers({
    user: userReducer
})