import './css/Navbar.css'
import { navbarItems } from './utils/items'

function Navbar() {
    const navItems = navbarItems.map(item => 
        <a key={item.name} onClick={() => {document.getElementById(item.name.toLocaleLowerCase())?.scrollIntoView({behavior : 'smooth'})}} className='navbar-item'>
            {item.name}
        </a>
    );

    return (
        <>
            <div className='navbar-wrapper'>
                <nav className="navbar-main">
                    {navItems}
                </nav>

            </div>
            
            
        </>
    )
}

export default Navbar
