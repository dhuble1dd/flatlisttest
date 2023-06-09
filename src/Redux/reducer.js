const INITIAL_STATE = {
    page: 1,
    posts: [],
    codesList: [],
    code: '',

};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_POSTS': {
            const { posts } = action.payload;

            const combinedPosts = {};
            state.posts.forEach(e => (combinedPosts[e.id] = e));
            posts.forEach(e => (combinedPosts[e.id] = e));

            return {
                ...state,
                //page: state.page + 1,
                posts: [...Object.values(combinedPosts)],
            };
        }

        case 'UPDATE_ON_END': {
            return { ...state, page: state.page + 1}
        }

        case 'FILL_CODESLIST': {
            return { 
                ...state,
                codesList: [...state.codesList, action.payload]
            }
        }

        case 'UPDATE_CODE': {
            return {
                ...state,
                code: action.payload
            }
        }

        default: {
            return state;
        }
    }
};

export default reducer;
