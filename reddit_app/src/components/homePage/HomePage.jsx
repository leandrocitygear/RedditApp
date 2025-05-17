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
    if (error) return <p>Error Somewhere</p>
    // console.log(homePost)


    return (

        <>
            
            {homePost.map((post) => (
                <div key={post.id} id='Homelink'>

                    <Link to={`/r/${post.subreddit}`}>
                    
                    <div className='HomeuserInfo'>
                            <img id='HomeuserImage' src={post.sr_detail?.icon_img || './src/assets/reddit-icon.png'}/>
                            <span id='HomeuserName'>{post.subreddit_name_prefixed}</span>
                    </div>
                    </Link>

                    <Link to={post.permalink}>
                    <div id='HomeuserPost'>

                        <p id='HomepostHeading'>{post.title}</p>


                        {post.is_video && post.media?.reddit_video?.fallback_url ? (
                        <video className="HomepostContent" controls>
                            <source src={post.media.reddit_video.fallback_url} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        ) : (
                            post.url.match(/\.(jpeg|jpg|gif|png)$/i) && (
                                <img className='HomepostContent' src={post.url}/>
                            )
                        )}

                    </div>
                    </Link>
                    
                        <Link to={post.permalink}>
                        <div className='HomecommentsButtom'>

                            <img className="Homeicons" src="./src/assets/comment.png" alt=""/>
                            <span id="HomecommentAmount">{post.num_comments}</span>

                        </div>
                        </Link>

                </div>
            ))};
        </>

    )

};

export default HomePage;