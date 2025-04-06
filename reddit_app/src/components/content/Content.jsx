
import CommentsPage from '../comments/Comments';
import HomePage from '../homePage/HomePage';
import PopularPage from '../popularPage/PopularPage';
import './Content.css';
import { Routes, Route } from "react-router";


function Content() {


    return (


        <div className='contentContainer'>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/popular" element={<PopularPage />} />
                <Route path='/comments' element={<CommentsPage />} />
            </Routes>
                
        </div>
    )
};

export default Content;