import './HomePage.css';



function HomePage() {





    return (


        <>

<div className='HomepostContainer'>
            <div id='HomeuserInfo'>
                <img id='HomeuserImage' src='./src/assets/original.jpg' />
                <span id='HomeuserName'>Leandrocitygear</span>
            </div>
            <div id='HomeuserPost'>
            <p id='HomepostHeading'>This is heading</p>
            <img className="HomepostContent" src='./src/assets/331295.jpg' />
            <div className='HomecommentsButtom'>
                <img className="Homeicons" src="./src/assets/comment.png" alt="" />
                <span id="HomecommentAmount">212</span>
            </div>
            </div>
        
        </div>
        </>
    )
};

export default HomePage;