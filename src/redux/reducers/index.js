import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducer';

const rootReducer = combineReducers({ youtubeReducer });

export default rootReducer;
