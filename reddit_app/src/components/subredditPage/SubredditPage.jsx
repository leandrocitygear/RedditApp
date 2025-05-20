import { useParams, Link } from 'react-router';
import { fetchSubreddit } from './subredditSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './SubredditPage.css';

function SubredditPage() {

    const dispatch = useDispatch();

    const { subreddit } = useParams();

    const { subredditName, isLoading, error } = useSelector((state) => state.subredditName);

    useEffect(() => {
        dispatch(fetchSubreddit(subreddit));
    }, [dispatch, subreddit]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error in SubredditPage</p>;

    return (
        <>
            {subredditName.length > 0 && (

                <div  id='subredditId'>
                    <img id='subredditImage' src={subredditName[0].sr_detail.icon_img || '/reddit-icon.png'}/>
                    <span id='subredditName'>{subredditName[0].sr_detail.display_name_prefixed}</span>
                </div>

            )};

            {subredditName.map((post) => (

                <div key={post.id} id='subredditPostContainer' > 

                    <div id='subredditUserInfo'>
                        <span id='subredditUserName'>u/{post.author}</span>
                    <p className='date' >{new Date(post.created_utc * 1000).toLocaleDateString()}</p>

                    </div>

                    <Link id='subredditUserPost' to={post.permalink}>
                        
                        <p id='subredditPostHeading'>{post.title}</p>

                        {post.is_video && post.media?.reddit_video?.fallback_url ? (
                        <video className="subredditPostContent" controls>
                        <source  src={post.media.reddit_video.fallback_url} type="video/mp4" />
                        </video>

                        ) : (
                            post.url.match(/\.(jpeg|jpg|gif|png)$/i) && (
                                <img className="subredditPostContent" src={post.url}/>
                            )
                        )}

                    </Link>
                    
                    <Link id='subredditCommentsButtom' to={post.permalink}>

                        <img id="subredditCommentIcon" src="/chat_23dp.png" alt="comments" />
                        <span id="subredditCommentAmount">{post.num_comments}</span>

                    </Link>

                </div>

            ))};

        </>
    )
}

export default SubredditPage;