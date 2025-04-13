
import './PopularPage.css'
import { Link } from 'react-router';
function PopularPage() {





    return (


        <>
<div className='Popularlink'>
        <Link className='PopularpostContainer' to={'/comments'}>
            <Link className='PopularuserInfo' to={'/subreddit'}>
                <img id='PopularuserImage' src='./src/assets/original.jpg' />
                <span id='PopularuserName'>Leandrocitygear</span>
            </Link>

            <div id='PopularuserPost'>
            <p id='PopularpostHeading'>This is heading</p>
            <img onClick={(e) => e.preventDefault()} className="PopularpostContent" src='./src/assets/331295.jpg' />
           
           
            <div className='PopularcommentsButtom'>
                <img className="Popularicons" src="./src/assets/comment.png" alt="" />
                <span id="PopularcommentAmount">212</span>
            </div>
           
            </div>


        </Link>
        </div>
        </>
    )
};

export default PopularPage;