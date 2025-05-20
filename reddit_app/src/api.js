const API_ROOT = 'https://www.reddit.com';

export const getHomePost = async () => {
    const response = await fetch('/.netlify/functions/getHomePost');
    const json = await response.json();

    console.log('API Response:', json);

    return json.data.children.map((post) => post.data);
};

export const getPopularPost = async () => {
    const response = await fetch(`${API_ROOT}/r/popular/.json?sr_detail=1`);
    const json = await response.json();
    
    return json.data.children.map((post) => post.data);
};

export const getPostComments = async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}/.json?sr_detail=1`);
    const json = await response.json();
    
    const post = json[0].data.children[0].data;
    const comments = json[1].data.children.map((comments) => comments.data);

    return { post, comments };
};

export const getSubreddit = async (subreddit) => {
    const response = await fetch(`${API_ROOT}/r/${subreddit}/.json?sr_detail=1`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};

export const getSearchResults = async (query) => {
    const response = await fetch(`${API_ROOT}/search.json?q=${query}&sr_detail=1`);
    const json = await response.json();

    return json.data.children.map((post) => post.data)
};
