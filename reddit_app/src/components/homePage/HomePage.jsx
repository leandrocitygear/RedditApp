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
<Link className='Homelink' to={'/comments'}> 
<div className='HomepostContainer'>
            <div id='HomeuserInfo' onClick={(e) => e.preventDefault()}>
                <img id='HomeuserImage' src='./src/assets/original.jpg' />
                <span id='HomeuserName'>Leandrocitygear</span>
            </div>
            <div id='HomeuserPost'>
            <p id='HomepostHeading'>This is heading</p>
            
            <img onClick={(e) => e.preventDefault()} className="HomepostContent" src='./src/assets/EdIHbr.jpg' />
            
            <div className='HomecommentsButtom'>
                <img className="Homeicons" src="./src/assets/comment.png" alt="" />
                <span id="HomecommentAmount">212</span>
            </div>

            </div>
        </div>
        </Link> 
        </>
    )
};

export default HomePage;