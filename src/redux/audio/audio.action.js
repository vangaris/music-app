import audioType from './audio.type'

export const playSong = item => ({
    type: audioType.PLAY_SONG,
    payload: item
})