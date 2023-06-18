import React, { useState, useEffect, useRef } from "react";
import "./range-slider.css";

function RangeSlider({ min, max, value, step }) {
    const [sliderRange, setSliderRange] = useState(value);
    const [inputValue, setInputValue] = useState(value);
    const sliderRef = useRef(null)

    return (
        <div className="range-slider">
            <div className="slider-values">
                <input type="number" className="number-input" />
            </div>
            <div className="slider-container">
                <input type="range" className="slider" />
                <div className="slider-thumb"></div>
                <div className="progress"></div>
            </div>
        </div>
    );
}

export default RangeSlider