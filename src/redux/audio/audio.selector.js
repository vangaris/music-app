import { createSelector } from 'reselect'

//input 
const selectSong = state => state.audio  // get all reducer and return a slice of it  'cart'

export const selectSongs = createSelector(
    [selectSong],
    audio => audio.song
);