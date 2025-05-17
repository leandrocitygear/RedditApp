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

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error in SubredditPage</p>
    console.log(subredditName)


    return (
        <>
            {subredditName.length > 0 && (

                <div  id='SubID'>
                    <img id='SubImage' src={subredditName[0].sr_detail.icon_img} />
                    <span id='SubredditName'>{subredditName[0].sr_detail.display_name_prefixed}</span>
                </div>

            )};

            {subredditName.map((post) => (

                    <div key={post.id} className='Subredditlink' > 

                            <div className='SubreddituserInfo'>
                                <span id='SubreddituserName'>u/{post.author}</span>
                            </div>

                            <Link to={post.permalink}>
                            <div id='SubreddituserPost'>
                                
                                <p id='SubredditpostHeading'>{post.title}</p>

                                {post.is_video && post.media?.reddit_video?.fallback_url ? (
                                <video className="SubredditpostContent" controls>
                                
                                <source  src={post.media.reddit_video.fallback_url} type="video/mp4" />
                                
                                </video>

                                ) : (
                                    post.url.match(/\.(jpeg|jpg|gif|png)$/i) && (
                                        <img className="SubredditpostContent" src={post.url}/>
                                    )
                                )}

                            </div>
                            </Link>
                            
                            <Link to={post.permalink}>
                            <div className='SubredditcommentsButtom'>
                                <img className="Subredditicons" src="./src/assets/comment.png" alt="" />
                                <span id="SubredditcommentAmount">{post.num_comments}</span>
                            </div>
                            </Link>

                    </div>
            ))};

        </>
    )
}

export default SubredditPage;