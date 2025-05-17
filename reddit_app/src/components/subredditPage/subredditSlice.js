import { createSlice } from "@reduxjs/toolkit";
import { getSubreddit } from "../../api";

const initialState = {
    subredditName: [],
    isLoading: false,
    error: false,
}

const subredditSlice = createSlice({
    name: 'subredditName',
    initialState,
    reducers: {
        subredditPending(state) {
            state.isLoading = true;
            state.error = false;
        },

        subredditRejected(state) {
            state.isLoading = false;
            state.error = true;
        },

        subredditFulfilled(state, action) {
            state.isLoading = false;
            state.error = false;
            state.subredditName = action.payload;
        }
    }
});

export const { subredditFulfilled, subredditPending, subredditRejected } = subredditSlice.actions;
export default subredditSlice.reducer;

export const fetchSubreddit = (subreddit) => async (dispatch) => {
    try {
        dispatch(subredditPending());
    const subredditData = await getSubreddit(subreddit);
    dispatch(subredditFulfilled(subredditData));
    } catch (error) {
        dispatch(subredditRejected());
    }
}; 