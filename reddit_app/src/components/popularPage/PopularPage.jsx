
import './PopularPage.css'
import { Link } from 'react-router';
function PopularPage() {





    return (


        <>
<Link className='Popularlink' to={'/comments'}>
        <div className='PopularpostContainer'>
            <div id='PopularuserInfo'>
                <img id='PopularuserImage' src='./src/assets/original.jpg' />
                <span id='PopularuserName'>Leandrocitygear</span>
            </div>
            <div id='PopularuserPost'>
            <p id='PopularpostHeading'>This is heading</p>
            <img className="PopularpostContent" src='./src/assets/331295.jpg' />
           
           
            <div className='PopularcommentsButtom'>
                <img className="Popularicons" src="./src/assets/comment.png" alt="" />
                <span id="PopularcommentAmount">212</span>
            </div>
           
            </div>
        
        </div>
        </Link>
        </>
    )
};

export default PopularPage;