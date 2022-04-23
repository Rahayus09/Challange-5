import { combineReducers } from 'redux';
import detailReducer from './detailReducer';
import detailByIDReducer from './detailByIDReducer';
import hasilReducer from './hasilReducer';

export default combineReducers({
  detail: detailReducer,
  detailByID: detailByIDReducer,
  hasil: hasilReducer,
});