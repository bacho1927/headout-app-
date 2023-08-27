import './Picks.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiFillGift } from 'react-icons/ai'
import { useRef } from 'react';
import React, { useEffect, useState } from "react"
import { pickedData } from './data';
export default function Picks() {

    const images = pickedData.map((el) => [el.url, el.city, el.description, el.stars, el.discount, el.ratings, el.currentPrice, el.lastPrice, el.currency, el.cashback])

    const [current, setCurrent] = useState(1)
    const [numPhotos, setNumPhotos] = useState(4)
    const [isAnimating, setIsAnimating] = useState(false)
    const num = current * numPhotos
    const sliced = num - numPhotos
    const lastPhoto = num > images.length ? images.length : num
    const inputRef = useRef(null);

    useEffect(() => {
        return () => {
            if (inputRef.current) {
                clearTimeout(inputRef.current);
            }
        };
    }, []);

    const inc = () => {

        setCurrent((oldCurrent) => oldCurrent + 1);
        if (lastPhoto >= images.length) {
            setCurrent(1)
        }
        if (!isAnimating) {
            setIsAnimating(true);
            inputRef.current = setTimeout(() => {

                setIsAnimating(false);
            }, 1000);
        }

    }

    const dec = () => {
        const rounded = Math.ceil(images.length / numPhotos)
        setCurrent((oldCurrent) => oldCurrent - 1);
        if (current === 1) {
            setCurrent(rounded)
        }


        if (!isAnimating) {
            setIsAnimating(true);
            inputRef.current = setTimeout(() => {

                setIsAnimating(false);
            }, 1000);
        }
    }

    const arr = images.slice(sliced, lastPhoto)

    const pickedSlideShow = arr.map(([url, city, description, stars, discount, ratings, currentPrice, lastPrice, currency, cashback], index) => {

        return (
            < div key={index} className={`pick-photos ${isAnimating ? "animate" : ""}`} >
                <div className='cashback'>{cashback && `${cashback}% cashback`}</div>
                <img src={url} />

                <div className='card-info'>
                    <div className='card-header'>

                        <h5>{city}</h5>
                        <p>{description}</p>
                        <div className='discount'>{discount && <AiFillGift style={{ marginTop: '10px' }} />}up to {discount}% off</div>
                        <div className='card-footer'>

                            <div className='stars'>
                                <p>{stars}</p>
                                <span id="star"> ★</span></div>
                            <div style={{ color: 'gray', }}>{ratings ? `(${ratings} Ratings)` : 'Newly Arrived'}</div>
                        </div>
                        <div className='picks-price'>
                            <p className='picks-price-p'>from</p>
                            <p className='picks-price-last'>{lastPrice && lastPrice !== 0 ? `${currency}${lastPrice}` : ''}</p>
                            <p className='picks-price-current'>
                                {`${currency}${currentPrice} `}
                            </p>
                        </div>
                    </div>



                </div>

            </div >
        )
    })
    return (
        <>

            <div className="main-picks-container">

                <div className='picks-header'>
                    <div>
                        <h2>Headout Picks</h2>
                        <hr style={{ backgroundColor: 'rgb(255, 187, 88)', width: '75px', height: '2px', border: 'none', margin: '0', marginBottom: '15px' }} />
                    </div>
                    <p>View All <AiOutlineArrowRight className='picks-arrow-icon' /></p>
                </div>
                <div className='picks-container' ref={inputRef} >


                    <button className="picks-btn-left" onClick={dec} ><AiOutlineArrowLeft className="arrow-icon" /></button>
                    <div className='picked-cards'>
                        {pickedSlideShow}
                    </div>
                    <button className="picks-btn-right" onClick={inc} ><AiOutlineArrowRight className="arrow-icon" /></button>

                </div>

            </div>
            {/* <button className="picks-btn-left" onClick={dec} ><AiOutlineArrowLeft className="arrow-icon" /></button>
            <button className="picks-btn-right" onClick={inc} ><AiOutlineArrowRight className="arrow-icon" /></button> */}
        </>
    )


}