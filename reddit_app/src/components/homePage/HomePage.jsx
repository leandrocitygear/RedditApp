import './HomePage.css';
import { useEffect } from "react";
import { Link } from 'react-router';
import { fetchHomePost } from './homePostSlice';
import { useSelector, useDispatch } from 'react-redux'

function HomePage() {
    
    const { homePost, isLoading, error } = useSelector((state) => state.home);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHomePost());
    }, [dispatch]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error Somewhere</p>;

    return (

        <>
            
            {homePost.map((post) => (

                <div key={post.id} id='postContainer'>

                    <Link className='userInfo' to={`/r/${post.subreddit}`}>

                            <img id='userImage' src={post.sr_detail?.icon_img || '/reddit-icon.png'}/>
                            <span id='userName'>{post.subreddit_name_prefixed}</span>
                            <p className='date' >{new Date(post.created_utc * 1000).toLocaleDateString()}</p>

                    </Link>

                    <Link id='userPost' to={post.permalink}>

                        <p id='postHeading'>{post.title}</p>

                        {post.is_video && post.media?.reddit_video?.fallback_url ? (
                        <video className="postContent" controls>
                            <source src={post.media.reddit_video.fallback_url} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        ) : (
                            post.url.match(/\.(jpeg|jpg|gif|png)$/i) && (
                                <img className='postContent' src={post.url}/>
                            )
                        )}

                    </Link>
                    
                    <Link className='commentsButtom' to={post.permalink}>

                            <img className="commentIcon" src="/chat_23dp.png" alt="comments"/>
                            <span id="commentAmount">{post.num_comments}</span>

                    </Link>

                </div>

            ))};

        </>

    )

};

export default HomePage;