import { combineReducers } from 'redux';
import UserTodo from './UserList.jsx';
import CategoryList from './CategoryList.jsx';

const RootReducers = combineReducers({
  UserTodo, CategoryList
})

export default RootReducers
