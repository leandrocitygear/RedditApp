import './Post.css';


function Post() {




    return (
        <>
    
        <div className='postContainer'>
            <div id='userInfo'>
                <img id='userImage' src='./src/assets/original.jpg' />
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
</>


    )
}

export default Post;