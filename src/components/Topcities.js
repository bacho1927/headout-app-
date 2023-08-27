import React, { useEffect, useState } from "react"
import "./Topcities.css"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useRef } from 'react';
import { topCitiesData } from "./data";
export default function Topcities() {
    const images = topCitiesData.map((el) => [el.url, el.city, el.description])

    const [current, setCurrent] = useState(1)
    const [numPhotos, setNumPhotos] = useState(5)
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

    const slideshow = arr.map(([image, city, description], index) => {

        return (
            <div key={index} className={`rame ${isAnimating ? "animate" : ""}`} style={{ position: "relative" }}>
                <img src={image} />
                <div className="city-details">

                    <h1>{city}</h1>
                    <p>{description}</p>
                </div>
            </div>
        );
    });

    return (
        <>
            <div>
                <h1 className="top-cities-header">Top Cities on Headout</h1>
                <hr style={{ backgroundColor: 'rgb(255, 187, 88)', width: '75px', height: '2px', border: 'none', marginTop: '0px', marginLeft: '160px' }} />
            </div>
            <div className="main-top-slider">


                <div className="top-slider-container" ref={inputRef} >
                    <button className="btn-left" onClick={dec} ><AiOutlineArrowLeft className="arrow-icon" /></button>

                    {slideshow}
                    <button className="btn-right" onClick={inc} ><AiOutlineArrowRight className="arrow-icon" /></button>
                </div>
            </div>



        </>

    )

}
