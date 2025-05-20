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

    return (

        <>

            {post && (
                
                <div  id='commentContainer'> 

                        <Link id='commentUserInfo' to={`/r/${post.subreddit}`}>

                            <img id='commentUserImage' src={post.sr_detail?.icon_img || '/reddit-icon.png'}/>
                            <span id='commentUserName'>{post.subreddit_name_prefixed}</span>
                            <p >{new Date(post.created_utc * 1000).toLocaleDateString()}</p>

                        </Link>

                        <div id='commentUserPost'>

                            <p id='commentPostHeading'>{post.title}</p>

                            {post.is_video && post.media?.reddit_video?.fallback_url ? (

                            <video className="commentPostContent" controls>
                                <source  src={post.media.reddit_video.fallback_url} type='video/mp4'/> 
                            </video>
                            ) : ( 
                            post.url.match(/\.(jpeg|jpg|gif|png)$/i) && (
                                <img className='commentPostContent' src={post.url}/>
                            )
                            )};

                        </div> 
                        
                        <div className='commentsButtom'>

                            <img className="commentIcon" src="/chat_23dp.png" alt="comment"/>
                            <span id="commentAmount">{post.num_comments}</span>

                        </div>

                </div>

            )}
            
            {postComments.map((comments) => (

                <div key={comments.id} id='commentList'>

                    <div id='userComment'>

                        <div id='userInfoComment'>

                            <span id='userNameComment'>u/{comments.author}</span>
                            <p >{new Date(comments.created_utc * 1000).toLocaleDateString()}</p>

                        </div>

                        <p id='commentContent'>{comments.body}</p>

                    </div>

                    {comments.replies?.data?.children?.map((reply) => (

                        <div key={reply.data.id} id='replies'>
                            
                            <div id='userInfoReplies'>

                                <span id='userNameReplies'>u/{reply.data.author}</span>
                                <p id='commentContent'>{new Date(reply.data.created_utc * 1000).toLocaleDateString()}</p>

                            </div>

                            <p id='repliesContent'>{reply.data.body}</p>
                        
                        </div>

                    ))};

                </div>

            ))}
        
        </>

    )

}

export default CommentsPage;