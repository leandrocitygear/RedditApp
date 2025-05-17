import './Comments.css';
import { fetchPostComments } from './CommentsSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router';




function CommentsPage() {

    const dispatch = useDispatch();
    const { subreddit, postId } = useParams();

    const { post, postComments, isLoading, error} = useSelector((state) => state.comments);

    useEffect(() => {
        const permalink = `/r/${subreddit}/comments/${postId}`;
        dispatch(fetchPostComments(permalink));
    }, [dispatch, subreddit, postId]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error in Comments</p>;
    console.log(postComments)
    console.log(post)

    return (
        <>
            {post && (
            
                
                <div  id='commentContainer'> 
                        <Link to={`/r/${post.subreddit}`}>
                        <div id='userInfo'>
                            <img id='userImage' src={post?.sr_detail?.icon_img || './src/assets/reddit-icon.png'} />
                            <span id='userName'>{post.subreddit_name_prefixed}</span>
                        </div>
                        </Link>

                        <div id='userPost'>
                            <p id='postHeading'>{post.title}</p>

                            {post.is_video && post.media?.reddit_video?.fallback_url ? (

                            <video className="postContent" controls>
                            <source  src={post.media.reddit_video.fallback_url} type='video/mp4'/> 
                            
                            </video>

                        ) : ( 

                            post.url.match(/\.(jpeg|jpg|gif|png)$/i) && (
                                <img className='postContent' src={post.url}/>
                            )

                        )}

                        </div> 
                        
                        <div className='commentsButtom'>
                                    <img className="icons" src="./src/assets/comment.png" alt="" />
                                    <span id="commentAmount">{post.num_comments}</span>
                                </div>

                        <p id='commentContent'>{new Date(post.created_utc * 1000).toLocaleString()}</p>


                </div>   
            )}
       

        {postComments.map((comments) => (
                <div key={comments.id} id='commentList'>

                    <div id='userComment'>

                        <div id='userInfoComment'>
                            <span id='userNameComment'>u/{comments.author}</span>
                        </div>

                        <p id='commentContent'>{comments.body}</p>
                        <p id='commentContent'>{new Date(comments.created_utc * 1000).toLocaleString()}</p>

                    </div>

                        {comments.replies?.data?.children?.map((reply) => (
                        <div key={reply.data.id} id='replies'>
                            
                        <div id='userInfoReplies'>
                            <span id='userNameReplies'>u/{reply.data.author}</span>
                        </div>


                            <p id='repliesContent'>{reply.data.body}</p>
                        <p id='commentContent'>{new Date(reply.data.created_utc * 1000).toLocaleString()}</p>


                        </div>
                    ))}

                </div>
            ))}
       
        
        </>
    )
}


export default CommentsPage;