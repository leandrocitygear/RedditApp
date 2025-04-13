import './HomePage.css';
import { useEffect } from "react";
import { Link } from 'react-router';



function HomePage() {

useEffect(() => {
        fetch('.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            console.log(data.data.children);
        })
        .catch((err) => console.error('Error fetching Reddit data', err))
    })




    return (


        <>
<div className='Homelink' > 
<Link className='HomepostContainer' to={'/comments'}>
           <Link className='HomeuserInfo' to={'/subreddit'}>
                <img id='HomeuserImage' src='./src/assets/original.jpg' />
                <span id='HomeuserName'>Leandrocitygear</span>
            </Link>

            <div id='HomeuserPost'>
            <p id='HomepostHeading'>This is heading</p>
            
            <img onClick={(e) => e.preventDefault()} className="HomepostContent" src='./src/assets/EdIHbr.jpg' />
            
            <div className='HomecommentsButtom'>
                <img className="Homeicons" src="./src/assets/comment.png" alt="" />
                <span id="HomecommentAmount">212</span>
            </div>

            </div>
        </Link>
        </div> 
        </>
    )
};

export default HomePage;