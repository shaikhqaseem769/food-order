import { assets } from '../../assets/assets';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" /> 
                    <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and your cravings and elevate your dining experience, one delicious meal at a time.</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" /><img src={assets.linkedin_icon} alt="" /><img src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-rigth">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+91-8377995607</li>
                        <li>shaikhqaseem769@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copy-right">
            © Copyright 2025, All Rights Reserved
            </p>
        </div>
    )
}

export default Footer;