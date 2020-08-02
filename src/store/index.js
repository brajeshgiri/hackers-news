import { createStore, combineReducers } from 'redux'
import { commentReducer } from './comments/reducer';

const store = createStore(combineReducers({
    comments: commentReducer
}));
const dispatch = store.dispatch;
export { store as default, dispatch };