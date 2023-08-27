import './Collection.css'
import { collectionsData } from './data'

export default function Collection() {
    const images = collectionsData.map((el, index) => (
        <div key={index} className='collection-card'>
            <p>{el.description}</p>
            <img src={el.url} />
        </div>
    ))
    return (
        <>
            <div className='collection-header'>
                <div>
                    <h1 >Our Collections</h1>
                    <hr style={{ backgroundColor: 'rgb(255, 187, 88)', width: '75px', height: '2px', border: 'none', marginTop: '0px', marginLeft: '0px' }} />
                </div>
            </div>
            <div className="collection-container">

                {images}
            </div>

        </>
    )
}