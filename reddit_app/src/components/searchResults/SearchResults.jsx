import { Link, useSearchParams } from 'react-router';
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

    return (

        <>

            {results.map((post) => (

                <div key={post.id} id='Results'>

                    <div className='ResultspostContainer'>

                        <Link className='ResultsuserInfo' to={`/r/${post.subreddit}`}>

                                <img id='ResultsuserImage' src={post.sr_detail?.icon_img || '/reddit-icon.png'} />
                                <span id='ResultsuserName'>{post.subreddit_name_prefixed}</span>
                                <p id='date' >{new Date(post.created_utc * 1000).toLocaleDateString()}</p>

                        </Link>

                        <Link id='ResultsuserPost' to={post.permalink}>

                            <p id='ResultspostHeading'>{post.title}</p>
                            
                            {post.is_video && post.media?.reddit_video?.fallback_url ? (
                            <video  className="ResultspostContent" controls>
                                <source src={post.media.reddit_video.fallback_url} type='video/mp4'/>
                            </video>
                            ) : (

                                post.url.match(/\.(jpeg|jpg|gif|png)$/i) && (   
                                <img  className="ResultspostContent" src={post.url} />
                                )
                            )}

                        </Link>

                        <div className='Resultscomments'>

                            <span id="ResultscommentAmount"> Comments: {post.num_comments}</span>

                        </div>

                    </div>

                </div>

            ))}
         
        </>

    )

}


export default SearchResults;