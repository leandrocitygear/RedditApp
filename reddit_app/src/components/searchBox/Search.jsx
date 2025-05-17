import './Search.css';
import { useState } from 'react';
import { useNavigate } from 'react-router'

function Search() {
    
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            navigate(`/search?q=${input}`);
        }
    };


 return (

        <form className='searchbox' onSubmit={handleSubmit}>

            <input type="text" placeholder='Search Reddit' value={input} onChange={(e) => setInput(e.target.value)} />
            
            {/* <img className='navicons' src="./src/assets/search.png" alt="" /> */}

        </form>

    )
};

export default Search;