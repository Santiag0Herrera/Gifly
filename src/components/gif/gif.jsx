import React, { useState, useRef } from "react";
import './gif.css'

const Gif = (gifData) => { 
    const [isHovered, setIsHovered] = useState(false);
    const copyRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const handleCopyClick = () => {
        if (copyRef && copyRef.current) {
            copyRef.current.select();
            document.execCommand('copy');
            alert('Gif copied to clipboard!');
        }
    }

    return(
        <div className="gif-card" style={{backgroundImage: `url(${gifData.gifData.images.downsized.url})`}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <textarea ref={copyRef} defaultValue={gifData.gifData.images.downsized.url} style={{position: 'absolute', left: '-9999px'}} />
            <div className="card-content" style={{opacity: isHovered ? 1 : 0}}>
                <p>{gifData.gifData.title}</p>
                <div className="card-content-buttons">
                    <button>detail view</button>
                    <button onClick={handleCopyClick}>copy</button>
                </div>
            </div>
        </div>
    )
}

export default Gif
