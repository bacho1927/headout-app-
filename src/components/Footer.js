import './Footer.css'
import headoutlogo from '../img/headout-logo.png'
import { options } from './data'
import google from '../img/google+.png'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import pinterest from '../img/pinterest.png'
export default function Footer() {
    const limitedOptions = options.slice(0, 8);
    const cities = limitedOptions.map((el, index) => (
        <li key={index}>{el.value}</li>


    ))

    return (
        <>
            <div className="main-footer-container">
                <div className="footer-container">
                    <div className="first-column">
                        <img src={headoutlogo} />
                        <p>Headout is building the future of how we experience our cities.</p>
                        <p style={{ color: 'rgb(41, 128, 185)' }}>Made with <span role="img" aria-label="love">❤️</span>by Bacho Karashvili</p>
                        <p>© Headout Inc.</p>
                    </div>
                    <div className="second-column">
                        <h3>Cities</h3>
                        <ul>{cities}</ul>
                        <p>+8 More</p>
                    </div>
                    <div className="third-column">
                        <h3>About us</h3>
                        <ul>
                            <li>About Headout</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Usage</li>
                        </ul>
                    </div>
                    <div className="fourth-column">
                        <h3>Contact</h3>
                        <p>Feel free to get in touch via email:</p>
                        <a href="mailto:Bacho.karashvili@gmail.com" style={{ color: 'rgb(79, 195, 247)', cursor: 'pointer',textDecoration:'none', }}>Bacho.Karashvili@gmail.com</a>
                        <div className='social-media'>
                            <img src={google} />
                            <img src={facebook} />
                            <img src={instagram} />
                            <img src={twitter} />
                            <img src={pinterest} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}