import CommentsPage from '../comments/Comments';
import HomePage from '../homePage/HomePage';
import PopularPage from '../popularPage/PopularPage';
import SearchResults from '../searchResults/SearchResults';
import SubredditPage from '../subredditPage/SubredditPage';
import './Content.css';
import { Routes, Route } from "react-router";

function Content() {

    return (


        <div className='contentContainer'>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/popular" element={<PopularPage />} />
                <Route path='/r/:subreddit/comments/:postId/*' element={<CommentsPage />} />
                <Route path='/r/:subreddit' element={<SubredditPage />} />
                <Route path='/search' element={<SearchResults />} />
            </Routes>
                
        </div>
    );
};

export default Content;