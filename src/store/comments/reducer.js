import { LOAD_COMMENTS, ON_UPVOTE, ON_HIDE } from "./type";

const inialState = { comments: [], page: 1 };
export const commentReducer = (state = inialState, action) => {
    const { type, value } = action;
    switch (type) {
        case LOAD_COMMENTS: {
            return { ...state, comments: value.comments, page: value.page };
        }
        case ON_UPVOTE: {
            const index = state.comments.findIndex(c => c.story_id === value.story_id);
            const comments = [...state.comments];
            const updateComments = [...comments.slice(0, index), { ...value, points: (value.points + 1) }, ...comments.slice(index + 1)];
            return { ...state, comments: updateComments };

        }
        case ON_HIDE: {
            return { ...state, comments: state.comments.filter(c => c.story_id !== value) };
        }
        default: {
            return state;
        }
    }
}