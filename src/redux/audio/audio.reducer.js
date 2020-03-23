import audioType from './audio.type'
import { playSong } from './audio.utils'

const INITIAL_STATE = {
    audio: []
}

const mediaPlayerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case audioType.PLAY_SONG:
            return {
                ...state,
                audio: playSong(state.audio, action.payload)
            }

        default:
            return state;
    }
}

export default mediaPlayerReducer;