import { useState } from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import {assets}  from "../../assets/assets.js"
const Navbar = () => {

    const [menu, setMenu] = useState("home");
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="Logo" className='logo' />
            <ul className='navbar-menu'>
                <Link to="/"  onClick= {() => {setMenu('home')}} className={menu === 'home' ? 'active' : ''}>home</Link>
                <a href='#explore-menu' onClick= {() => {setMenu('menu')}} className={menu === 'menu' ? 'active' : ''}>menu</a>
                <a href="#app-download" onClick= {() => {setMenu('mobile-app')}} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</a>
                <a href="#footer" onClick= {() => {setMenu('contact us')}} className={menu === 'contact us' ? 'active' : ''}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.bag_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>sign in</button>
            </div>
        </div>
    )
}

export default Navbar