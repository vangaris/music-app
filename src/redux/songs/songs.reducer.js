import SONGS_DATA from '../../Data/songsData'

const INITIAL_STATE = {
    collections: SONGS_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default shopReducer

