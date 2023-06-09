import React from "react";
import Gif from "../gif/gif";
import './gifGallery.css'

const GifGallery = (data) => {
    return(
        <div className='gif-gallery'>
            {data.data.map( (gif) => <Gif gifData={gif} key={gif.id} className="listItem" />)}
        </div>
    )
}

export default GifGallery