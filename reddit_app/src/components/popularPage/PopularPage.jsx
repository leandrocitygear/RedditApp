
import './PopularPage.css'
import { Link } from 'react-router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchPopularPost } from './popularSlice';

function PopularPage() {

    const { popularPost, isLoading, error } = useSelector((state) => state.popular);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularPost());
    }, [dispatch]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error In PopularPage</p>;

    return (

        <>

            {popularPost.map((post) => ( 

                <div key={post.id} id='popularPostContainer'>

                    <Link className='popularUserInfo' to={`/r/${post.subreddit}`}>

                        <img id='popularUserImage' src={post.sr_detail?.icon_img || '/reddit-icon.png'} />
                        <span id='popularUserName'>{post.subreddit_name_prefixed}</span>
                        <p className='date' >{new Date(post.created_utc * 1000).toLocaleDateString()}</p>

                    </Link>

                    <Link id='popularUserPost' to={post.permalink}>

                        <p id='popularPostHeading'>{post.title}</p>

                        {post.is_video && post.media?.reddit_video?.fallback_url ? ( 
                        <video className="popularPostContent" controls>
                            <source src={post.media.reddit_video.fallback_url} type='video/mp4'/>
                        </video>
                        ) : (

                            post.url.match(/\.(jpeg|jpg|gif|png)$/i) && (
                                <img className='popularPostContent' src={post.url}/>
                            )
                        )}

                    </Link>


                    <Link className='popularCommentsButtom' to={post.permalink}>

                        <img className="popularCommentIcon" src="/chat_23dp.png" alt="comments" />
                        <span id="popularCommentAmount">{post.num_comments}</span>

                    </Link>

                </div>

            ))};

        </>

    )

};

export default PopularPage;