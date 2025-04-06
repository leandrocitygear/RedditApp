import './Comments.css';



function CommentsPage() {




    return (



        <>
        <div className='postContainer'>
            <div id='userInfo'>
                <img id='userImage' src='./src/assets/IMG_4573.jpg' />
                <span id='userName'>Leandrocitygear</span>
            </div>
            <div id='userPost'>
            <p id='postHeading'>This is heading</p>
            <img className="postContent" src='./src/assets/playlife.JPG' />
            <div className='commentsButtom'>
                <img className="icons" src="./src/assets/comment.png" alt="" />
                <span id="commentAmount">212</span>
            </div>
            </div>
            <div id='commentList'>

            </div>
        </div>
        
        </>
    )
}


export default CommentsPage;