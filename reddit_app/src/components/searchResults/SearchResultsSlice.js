import { createSlice } from "@reduxjs/toolkit";
import { getSearchResults } from "../../api";

const initialState = {
    results: [],
    isLoading: false,
    error: false,
}

const searchResultsSlice = createSlice({
    name: 'searchResults',
    initialState,
    reducers: {
        searchResultsPending(state) {
            state.isLoading = true;
            state.error = false;
        },

        searchResultsRejected(state) {
            state.isLoading = false;
            state.error = true;
        },

        searchResultsFulfilled(state, action) {
            state.isLoading = false;
            state.error = false;
            state.results = action.payload;
        }
    }
})

export const { searchResultsFulfilled, searchResultsPending, searchResultsRejected } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;

export const fetchSearchResults = (query) => async (dispatch) => {
    try {
        dispatch(searchResultsPending())
        const searchResults = await getSearchResults(query)
        dispatch(searchResultsFulfilled(searchResults));
    } catch (error) {
        searchResultsRejected();
    }

};