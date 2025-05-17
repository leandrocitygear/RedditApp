import { createSlice } from "@reduxjs/toolkit";
import { getPostComments } from "../../api";


const initialState = {
    post: null,
    postComments: [],
    isLoading: false,
    error: false,
}

const postCommentSlice = createSlice({
    name: 'postComments',
    initialState,
    reducers: {
        postCommentPending(state) {
            state.isLoading = true;
            state.error = false;
        },

        postCommentsRejected(state) {
            state.isLoading = false;
            state.error = true;
        },

        postCommentsFulfilled(state, action) {
            state.isLoading = false;
            state.error = false;
            state.post = action.payload.post;
            state.postComments = action.payload.comments;
        }
    }
});

export const { postCommentPending, postCommentsFulfilled, postCommentsRejected } = postCommentSlice.actions;
export default postCommentSlice.reducer;

export const fetchPostComments = (permalink) => async (dispatch) => {
    try {
        dispatch(postCommentPending());
        const postComments = await getPostComments(permalink);
        dispatch(postCommentsFulfilled(postComments));
    } catch (error) {
        dispatch(postCommentsRejected());
    }
};