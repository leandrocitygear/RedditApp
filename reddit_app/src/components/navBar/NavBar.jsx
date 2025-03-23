import './NavBar.css';
import Search from '../searchBox/Search';



function NavBar() {

    const borderClicked = (newColor) => {
       const elem = document.getElementsByClassName("navButtoms"); 
        elem.style.border = newColor;

    }


    return (
        
            <nav>
                <h1 className='logo'>Reddit<span>light</span></h1>
                
                <ul className='navigation-links'>
                    <li onClick={borderClicked} ><a className='navButtoms' href='#'>Home</a></li>
                    <li><a className='navButtoms' href='#'>Popular</a></li>
                    <li><a className='navButtoms' href='#'>Explore</a></li>
                    <li><a className='navButtoms' href='#'>All</a></li>
                </ul>
                <Search />
            </nav>
        
        
    )

};

export default NavBar;