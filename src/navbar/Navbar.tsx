import './css/Navbar.css'
import { navbarItems } from './utils/items'

function Navbar() {
    const navItems = navbarItems.map(item => 
        <a key={item.name} href={item.link} className='navbar-item'>
            {item.name}
        </a>
    );

    return (
        <>
            
            <nav className="navbar-main">
                {navItems}
            </nav>
            
        </>
    )
}

export default Navbar
