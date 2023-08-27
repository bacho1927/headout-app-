import React from "react";
import './Searchbar.css'
import { FaMapMarker } from 'react-icons/fa'
import { AiOutlineSearch } from "react-icons/ai"
import { useState } from "react";
import Select from 'react-select'
import { options } from './data'

export default function Searchbar() {

    const [isActive, setIsActive] = useState(false);

    const handleInputChange = () => {
        setIsActive(true);
    };
    const handleInputBlur = () => {
        setIsActive(false);
    };
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: 'none',
            boxShadow: 'none',
            cursor: 'pointer',
            width: '150px',
            height: '60px',
            zIndex: '50'
        }),

    };
    const [selectedCity, setSelectedCity] = useState(null);

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
        if (selectedOption) {
            const cityPath = `/${selectedOption.value.toLowerCase().replace(/\s+/g, '-')}`;
            window.location.href = cityPath;
        }
    };

    return (
        <>
            <div className="search-container">
                <div className="search-select-city">
                    <FaMapMarker className="map-icon" />

                    <Select styles={customStyles} className="searchbar-select" placeholder="Select City" options={options}
                        onChange={handleCityChange}
                    />
                </div>
                <div className={`search-select-exp ${isActive ? 'search-active' : ''}`} >
                    <div className="exp-input-container">
                        <input type="text" placeholder="Search for experiences" onClick={handleInputChange} onBlur={handleInputBlur} >

                        </input>
                        <AiOutlineSearch className="exp-loop" />
                    </div>
                </div>
                <button>Let's Go</button>
            </div>
        </>
    )
}