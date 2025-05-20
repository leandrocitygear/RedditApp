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
            setInput('');
        }
    };


    return (

        <form id='searchbox' onSubmit={handleSubmit}>

            <input type="text" placeholder='Search Reddit' value={input} onChange={(e) => setInput(e.target.value)} />

        </form>

    )

};

export default Search;