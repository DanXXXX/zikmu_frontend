import { combioneReducers } from 'redux';
import userReducer from './user.reducer';

export default combioneReducers({
    userReducer,
})