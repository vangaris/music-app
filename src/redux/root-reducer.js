//represents all the state of our application
import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';

const rootReducer = combineReducers({
    directory: directoryReducer,
});

export default rootReducer;
