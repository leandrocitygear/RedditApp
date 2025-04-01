import './NavBar.css';
import Search from '../searchBox/Search';
import { NavLink } from 'react-router';


function NavBar() {



    return (
        
            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? "activeLogo" : "notActiveLogo")} >
                    <h1 className='logo'>Reddit<span>light</span></h1>
                </NavLink>
                
                <ul className='navigation-links'>
                   <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "notActive")} >  
                        <li> <img className='navicons' src='./src/assets/home.png'/> Home</li> 
                   </NavLink>

                   <NavLink to="/popular" className={({ isActive }) => (isActive ? "active" : "notActive")} > 
                        <li> <img className='navicons' src='./src/assets/popular.png'/> Popular</li>
                   </NavLink>

                   <NavLink to="/explore" className={({ isActive }) => (isActive ? "active" : "notActive")} > 
                        <li> <img className='navicons' src='./src/assets/explore.png'/> Explore</li>
                   </NavLink>
                   
                   <NavLink to="/all" className={({ isActive }) => (isActive ? "active" : "notActive")} >   
                        <li> <img className='navicons' src='./src/assets/all.png'/> All</li> 
                   </NavLink>
                </ul>
                <Search />
            </nav>
        
        
    )

};

export default NavBar;