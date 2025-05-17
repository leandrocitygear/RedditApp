import { createSlice } from "@reduxjs/toolkit";
import { getHomePost } from "../../api";


const initialState = {
    homePost: [],
    error: false,
    isLoading: false,
};

const homePostSlice = createSlice({
    name: 'homePost',
    initialState,
    reducers: {
        homePostPending(state) {
            state.isLoading = true;
            state.error = false;
        },
        homePostRejected(state) {
            state.isLoading = false;
            state.error = true;
        },
        homePostFulfilled(state, action) {
            state.isLoading = false;
            state.error = false; 
            state.homePost = action.payload;
        },
    },
});

export const { homePostPending, homePostRejected, homePostFulfilled } = homePostSlice.actions;
export default homePostSlice.reducer;

export const fetchHomePost = () => async (dispatch) => {
    try {
        dispatch(homePostPending());
        const homePost = await getHomePost();
        dispatch(homePostFulfilled(homePost));
    } catch (error) {
        dispatch(homePostRejected())
    }
};