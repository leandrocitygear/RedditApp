import './Comments.css';



function CommentsPage() {




    return (



        <>
        <div id='con'> 
        <div className='postContainer'>
            <div id='userInfo'>
                <img id='userImage' src='./src/assets/IMG_4573.jpg' />
                <span id='userName'>Leandrocitygear</span>
            </div>
            <div id='userPost'>
            <p id='postHeading'>This is heading</p>
            <img className="postContent" src='./src/assets/331295.jpg' />
            <div className='commentsButtom'>
                <img className="icons" src="./src/assets/comment.png" alt="" />
                <span id="commentAmount">212</span>
            </div>
            </div>
</div>
</div>
            <div id='commentList'>
                <div id='userComment'>
                    <div id='userInfoComment'>
                    <img id='userImageComment' src='./src/assets/IMG_4573.jpg' />
                    <span id='userNameComment'>Leandrocitygear</span>
                    </div>
                    <p id='commentContent'>This is comment for you and me </p>

                </div>

            </div>
        
        </>
    )
}


export default CommentsPage;