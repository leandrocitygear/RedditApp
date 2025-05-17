import { createSlice } from "@reduxjs/toolkit";
import { getPopularPost } from "../../api";

const initialState = {
    popularPost: [],
    isLoading: false,
    error: false,
}

const popularPostSlice = createSlice({
    name: 'popularPost',
    initialState,
    reducers: {
        popularPostPending(state) {
            state.isLoading = true;
            state.error = false;
        },

        popularPostRejected(state) {
            state.isLoading = false;
            state.error = true;
        },

        popularPostFulfilled(state, action) {
            state.isLoading = false;
            state.error = false;
            state.popularPost = action.payload;
        },
    }
})

export const { popularPostFulfilled, popularPostPending, popularPostRejected } = popularPostSlice.actions;
export default popularPostSlice.reducer;

export const fetchPopularPost = () => async (dispatch) => {
    try {
        dispatch(popularPostPending());
        const popularPost = await getPopularPost();
        dispatch(popularPostFulfilled(popularPost))
    } catch (error) {
        dispatch(popularPostRejected());
    }
};