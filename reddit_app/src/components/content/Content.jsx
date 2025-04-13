
import CommentsPage from '../comments/Comments';
import HomePage from '../homePage/HomePage';
import PopularPage from '../popularPage/PopularPage';
import SubredditPage from '../subredditPage/SubredditPage';
import './Content.css';
import { Routes, Route } from "react-router";


function Content() {


    return (


        <div className='contentContainer'>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/popular" element={<PopularPage />} />
                <Route path='/comments' element={<CommentsPage />} />
                <Route path='/subreddit' element={<SubredditPage />} />
            </Routes>
    
                
        </div>
    )
};

export default Content;