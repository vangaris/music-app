//represents all the state of our application
import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';
import songsReducer from './songs/songs.reducer'
import audioReducer from './audio/audio.reducer'

const rootReducer = combineReducers({
    audio: audioReducer,
    directory: directoryReducer,
    songs: songsReducer

});

export default rootReducer;
