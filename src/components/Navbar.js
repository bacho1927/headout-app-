import React, { useState } from "react";
import './Navbar.css'
import headoutlogo from '../img/headout-logo.png'
import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlineDown } from "react-icons/ai"
import Select from 'react-select'
import { Link } from 'react-router-dom'
export default function Navbar() {



    const options = [
        { value: 'New York', label: 'New York' },
        { value: 'Las Vegas', label: 'Las Vegas' },
        { value: 'Rome', label: 'Rome' },
        { value: 'Paris', label: 'Paris' },
        { value: 'London', label: 'London' },
        { value: 'Dubai', label: 'Dubai' },
        { value: 'Barcelona', label: 'Barcelona' },
        { value: 'Madrid', label: 'Madrid' },
        { value: 'Singapore', label: 'Singapore' },
        { value: 'Venice', label: 'Venice' },
        { value: 'Milan', label: 'Milan' },
        { value: 'Naples', label: 'Naples' },
        { value: 'Budapest', label: 'Budapest' },
        { value: 'Edinburg', label: 'Edinburg' },
        { value: 'Florence', label: 'Florence' }
    ];


    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: 'none',
            backgroundColor: '#f4f4f4',
            cursor: 'pointer',
            width: '200px',
            boxShadow: 'none',
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
            <div className="navbar-container">
                <div className="navbar">
                    <div className="upper-section">
                        <a href="/" alt="logo">
                            <img src={headoutlogo} />
                        </a>
                        <form className="city-input">

                            <Select styles={customStyles} placeholder="Select City" options={options} onChange={handleCityChange}

                            />

                        </form>
                        <div className="navbar-input-container">
                            <input type="text" className="select-experience" placeholder="Search for experiences"></input>
                            <AiOutlineSearch className="loop" />

                        </div>

                        <div className="login-section">BachoKarashvili</div>
                    </div>
                    <div className="lower-section">
                        <div className="top-picks">
                            <p>Headout Picks</p>
                            <p>Best sellers</p>
                            <p>Abu Dhabi City Tours</p>
                            <p>Amsterdam Attractions</p>
                            <p>Burj Khalifa</p>
                        </div>
                        <div className="support">
                            <div>24/7 Support <span><AiOutlineDown /></span></div>

                            <div className="english">English/USD<span><AiOutlineDown /></span></div>

                        </div>
                        <div className="download">Download App </div>
                    </div>
                </div>

            </div>

        </>
    )
}