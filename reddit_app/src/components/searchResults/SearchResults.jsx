import { Link, useSearchParams, useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchResults } from './SearchResultsSlice';
import './SearchResults.css';
import { useEffect } from 'react';




function SearchResults() {

const { results, isLoading, error } = useSelector((state) => state.results);
const dispatch = useDispatch();
const [searchParams] = useSearchParams();

const query = searchParams.get('q');

useEffect(() => {
    if (query) {
        dispatch(fetchSearchResults(query));
    }
}, [dispatch, query])

if (isLoading) return <p>Loading...</p>
if (error) return <p>Error in Search Results</p>
console.log(results)



    return (

        <>
        
            <div id='CategoriesBox'>
                <button id='PostBtn' >
                    Post
                </button>
                <button id='SubredditsBtn' >
                    Subreddits
                </button>
            </div>

            {results.map((post) => (
            <div key={post.id} id='Results'>
        <div className='ResultspostContainer'>
            <Link to={`/r/${post.subreddit}`}>
            <div className='ResultsuserInfo' >
                <img id='ResultsuserImage' src={post.sr_detail.icon_img || './src/assets/reddit-icon.png'} />
                <span id='ResultsuserName'>{post.subreddit_name_prefixed}</span>
            </div>
            </Link>

            <Link to={post.permalink}>
            <div id='ResultsuserPost'>
            <p id='ResultspostHeading'>{post.title}</p>
            
            {post.is_video && post.media?.reddit_video?.fallback_url ? (
            <video  className="ResultspostContent" controls>
                <source src={post.media.reddit_video.fallback_url} type='video/mp4'/>
            </video>) : (

                post.url.match(/\.(jpeg|jpg|gif|png)$/i) && (   
                 <img  className="ResultspostContent" src={post.url} />
                )
           )}

            </div>
            </Link>

<div className='ResultscommentsButtom'>
                <span id="ResultscommentAmount">{post.num_comments}</span>
            </div>

        </div>

            </div>
        ))}
         
        </>
    )
}


export default SearchResults;