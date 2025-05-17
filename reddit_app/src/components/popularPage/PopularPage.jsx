
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
    console.log(popularPost);




    return (


        <>
        {popularPost.map((post) => ( 
        <div key={post.id} id='Popularlink'>
            <Link className='PopularuserInfo' to={`/r/${post.subreddit}`}>
                <img id='PopularuserImage' src={post.sr_detail?.icon_img || './src/assets/reddit-icon.png'} />
                <span id='PopularuserName'>{post.subreddit_name_prefixed}</span>
            </Link>

            <Link to={post.permalink}>
            <div id='PopularuserPost'>
            <p id='PopularpostHeading'>{post.title}</p>

            {post.is_video && post.media?.reddit_video?.fallback_url ? ( 
            <video className="PopularpostContent" controls>
                <source src={post.media.reddit_video.fallback_url} type='video/mp4'/>
            </video>

            ) : (

                post.url.match(/\.(jpeg|jpg|gif|png)$/i) && (
                    <img className='PopularpostContent' src={post.url}/>
                )
            )}
           
            </div>
            </Link>


            <Link to={post.permalink}>
            <div className='PopularcommentsButtom'>
                <img className="Popularicons" src="./src/assets/comment.png" alt="" />
                <span id="PopularcommentAmount">{post.num_comments}</span>
            </div>
            </Link>

        </div>
        ))}
        </>
    )
};

export default PopularPage;