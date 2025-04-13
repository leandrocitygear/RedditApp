import { Link } from 'react-router';

import './SubredditPage.css';



function SubredditPage() {



    return (
        <>
        <div id='SubID'>
            <img id='SubImage' src='./src/assets/seve.jpg' />
            <span id='SubredditName'>r/EurekaSeven</span>

            </div>
            <div id='spaceholder'>
                <div id='box'></div>
            </div>
        <div className='Subredditlink' > 
<Link className='SubredditpostContainer' to={'/comments'}>
           <Link className='SubreddituserInfo'>
                <img id='SubreddituserImage' src='./src/assets/original.jpg' />
                <span id='SubreddituserName'>Leandrocitygear</span>
            </Link>

            <div id='SubreddituserPost'>
            <p id='SubredditpostHeading'>This is heading</p>
            
            <img onClick={(e) => e.preventDefault()} className="SubredditpostContent" src='./src/assets/EdIHbr.jpg' />
            
            <div className='SubredditcommentsButtom'>
                <img className="Subredditicons" src="./src/assets/comment.png" alt="" />
                <span id="SubredditcommentAmount">212</span>
            </div>

            </div>
        </Link>
        </div> 
        </>
    )
}

export default SubredditPage;