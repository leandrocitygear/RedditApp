import AllPage from '../allPage/AllPage';
import ExplorePage from '../explorePage/ExplorePage';
import HomePage from '../homePage/HomePage';
import PopularPage from '../popularPage/PopularPage';
import './Content.css';



function Content() {


    return (


        <div className='contentContainer'>
        
            <HomePage />
            <PopularPage />
            <ExplorePage />
            <AllPage />            
        
        </div>
    )
};

export default Content;