import {combineReducers} from 'redux';
import {todos, visibilityFilter}  from '../views/MainView/reducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
	todos,
	visibilityFilter,
	form: reduxFormReducer
});
export default rootReducer;