//represents all the state of our application
import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';
import songsReducer from './songs/songs.reducer'

const rootReducer = combineReducers({
    directory: directoryReducer,
    songs: songsReducer

});

export default rootReducer;
