import React from "react";
import { useState, useEffect } from "react";
import './Slide.css'



export default function Slide() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        'https://cdn-imgix-open.headout.com/desktop-flaps/cashback-01.jpg?h=501&crop=faces&fit=min',
        'https://cdn-imgix-open.headout.com/desktop-flaps/about-01-01.jpg?h=501&crop=faces&fit=min',
        'https://cdn-imgix-open.headout.com/flaps/non-city-specific/desktop/experience-desktop.png?crop=faces&fit=min',
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const arr = images.map((img, index) => <img className={index === currentSlide ? 'slide active' : 'slide'} key={index} src={img} />)


    return (
        <>
            <div className="slider-container">

                {arr}

            </div >



        </>


    )
}