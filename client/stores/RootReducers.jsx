import { combineReducers } from 'redux';
import UserTodo from './UserList.jsx';
import CategoryList from './CategoryList.jsx';
import AdminTodo from './AdminList.jsx';

const RootReducers = combineReducers({
  UserTodo,
  CategoryList,
  AdminTodo
})

export default RootReducers
