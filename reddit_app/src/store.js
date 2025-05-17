import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  homePostReducer  from './components/homePage/homePostSlice';
import popularPostReducer from './components/popularPage/popularSlice';
import subredditReducer from './components/subredditPage/subredditSlice';
import postCommentReducer from './components/comments/CommentsSlice'
import searchResultsReducer from './components/searchResults/SearchResultsSlice'

export const store = configureStore({
    reducer: combineReducers ({
        home: homePostReducer,
        popular: popularPostReducer,
        subredditName: subredditReducer,
        comments: postCommentReducer,
        results: searchResultsReducer,
    }),
});