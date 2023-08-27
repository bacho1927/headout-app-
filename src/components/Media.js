import './Media.css'
import mediaOne from '../img/media-one.png'
import mediaTwo from '../img/media-two.png'
import mediaThree from '../img/media-three.png'
import mediaFour from '../img/media-four.png'
import mediaStars from '../img/media-stars.png'
export default function Media() {
    return (
        <>
            <div className="main-media-container">
                <div className='media-container'>
                    <h2>We've served 1 million+ guests and we are here for you</h2>
                    <hr style={{ backgroundColor: 'rgb(255, 187, 88)', width: '75px', height: '2px', border: 'none', marginTop: '0px', marginBottom: '0px' }}></hr>
                    <div className='media-news'>
                        <div className='news-one news-box'>
                            <img src={mediaOne} />
                            <h3>1 million+ Customers</h3>
                            <p>Happy customers across 10,000+ experiences</p>
                        </div>
                        <hr className='divide'></hr>
                        <div className='news-two news-box'>
                            <img src={mediaTwo} />
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <h3>4.4/5</h3>
                                <div>
                                    <img src={mediaStars} />
                                </div>

                            </div>
                            <p>50,000+ verified reviews with 90% excellent score</p>
                        </div>
                        <hr className='divide'></hr>
                        <div className='news-three news-box'>
                            <img src={mediaThree} />
                            <h3>In the media</h3>
                            <p>Recommended by Apple, CNN, Techcrunch and others.</p>
                        </div>
                        <hr className='divide'></hr>
                        <div className='news-four news-box'>
                            <img src={mediaFour} />
                            <h3>27 x 7 help Center</h3>
                            <p>Have a question? Live chat with local experts anywhere, anytime</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}