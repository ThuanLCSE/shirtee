import { combineReducers } from 'redux';
import UserTodo from './UserList.jsx';
import AdminTodo from './AdminList.jsx';

import CategoryList from './CategoryList.jsx';
import SaleList from './SaleList.jsx';
import ShirtList from './ShirtList.jsx';
import PatternList from './PatternList.jsx';
import DesignerList from './DesignerList.jsx';

const RootReducers = combineReducers({
  UserTodo,
  ShirtList,
  CategoryList,
  PatternList,
  DesignerList, 
  AdminTodo,
  SaleList
})

export default RootReducers
