import { useContext, useState } from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import {assets}  from "../../assets/assets.js"
import { StoreContext } from '../../context/StoreContent.jsx'
const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount, cartItems} = useContext(StoreContext);
    
    return (
        <div className='navbar'>
            <Link to="/"><img src={assets.logo} alt="Logo" className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to="/"  onClick= {() => {setMenu('home')}} className={menu === 'home' ? 'active' : ''}>home</Link>
                <a href='#explore-menu' onClick= {() => {setMenu('menu')}} className={menu === 'menu' ? 'active' : ''}>menu</a>
                <a href="#app-download" onClick= {() => {setMenu('mobile-app')}} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</a>
                <a href="#footer" onClick= {() => {setMenu('contact us')}} className={menu === 'contact us' ? 'active' : ''}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to="/cart"><img src={assets.bag_icon} alt="" />
                    {getTotalCartAmount() > 0 ? <div className="dot">{cartItems.length}</div> : <></>}
                    </Link>
                </div>
                <button onClick={() => setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar