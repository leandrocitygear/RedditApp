import AllPage from '../allPage/AllPage';
import ExplorePage from '../explorePage/ExplorePage';
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
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/all" element={<AllPage />} />
            </Routes>
                
        </div>
    )
};

export default Content;