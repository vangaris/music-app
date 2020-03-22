import { createSelector } from 'reselect'

const selectSongs = state => state.songs;

export const selectCollections = createSelector(
    [selectSongs],
    songs => songs.collections
)

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )

