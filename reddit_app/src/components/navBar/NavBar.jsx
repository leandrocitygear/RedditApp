import './NavBar.css';
import Search from '../searchBox/Search';



function NavBar() {


    return (
        
            <nav>
                <h1 className='logo'>Reddit<span>light</span></h1>
                
                <ul className='navigation-links'>
                    <li>Home</li>
                    <li>Popular</li>
                    <li>Explore</li>
                    <li>All</li>
                </ul>
                <Search />
            </nav>
        
        
    )

};

export default NavBar;