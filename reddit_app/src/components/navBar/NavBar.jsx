import './NavBar.css';
import Search from '../searchBox/Search';
import { NavLink } from 'react-router';
import { Link } from 'react-router';

function NavBar() {

    return (
        
        <nav>

            <div id='logo'>

                <Link to="/">

                    <span id='logoOrange'>Reddit</span><span id='logoBlack'>light</span>

                </Link>
                
            </div>
            
            <ul className='navigation-links'>

                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "notActive")}>  

                        <img className='navIcons' src='/H.png'/> Home

                </NavLink>

                <NavLink to="/popular" className={({ isActive }) => (isActive ? "active" : "notActive")}>

                    <img className='navIcons' src='/trending_up_24dp.png'/> Popular

                </NavLink>

            </ul>

            <Search />

        </nav>
        
    );

};

export default NavBar;