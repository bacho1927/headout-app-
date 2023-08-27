import './Download.css'
import iphone from '../img/iphone.png'
import android from '../img/android.png'
import apple from '../img/apple.png'
import google from '../img/google.png'

export default function Download() {
    return (
        <>
            <div className="main-download-container">
                <div className='download-container'>
                    <div className='iphone'>
                        <img src={iphone} />
                    </div>
                    <div className='download-section'>
                        <h2>Headout on the go</h2>
                        <hr style={{ backgroundColor: 'rgb(255, 187, 88)', width: '75px', height: '2px', border: 'none', marginTop: '0px', marginBottom: '0px' }}></hr>
                        <div>
                            <p className='download-text'>
                                Download our mobile app for easier &amp; faster checkout. <br></br> We can send you the download link to get started right away!
                            </p>
                        </div>
                        <div className='download-links'>
                            <a href="https://apps.apple.com/us/app/tourlandish/id899327000?ls=1" target="_blank" >
                                <img src={apple} alt="Apple Store" class="store" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.tourlandish.chronos&hl=en&pli=1" target="_blank" > <img src={google} alt="Apple Store" class="store" /></a>
                        </div>
                    </div>
                    <div className='android'>
                        <img src={android} />
                    </div>
                </div>
            </div>
        </>
    )
}