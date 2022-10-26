import {combineReducers} from 'redux'
import login from './Login';
import alert from './alert';


const allReducers = combineReducers({
    login,
    alert
})
 
export default allReducers;