import { combineReducers } from 'redux';
import UserTodo from './UserList.jsx';
import CategoryList from './CategoryList.jsx';
import PatternList from './PatternList.jsx';
import AdminTodo from './AdminList.jsx';
import DesignerList from './DesignerList.jsx';

const RootReducers = combineReducers({
  UserTodo,
  CategoryList,
  PatternList,
  AdminTodo,
  DesignerList
})

export default RootReducers
