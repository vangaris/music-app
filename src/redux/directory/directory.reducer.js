const INITIAL_STATE = {
    sections: [
        {
            title: 'album1',
            imageUrl: 'https://picsum.photos/id/103/367/267',
            id: 1,
            linkUrl: 'albums/album1'
        },
        {
            title: 'album2',
            imageUrl: 'https://picsum.photos/id/1048/367/267',
            id: 2,
            linkUrl: 'albums/album2'
        },

    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }

}

export default directoryReducer