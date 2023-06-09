import React from "react";
import './form.css'

const Form = ({handleChangeText, handleKeyDown, handleChageAmount, handleSubmit}) => {
    return(
        <div className='search-bar'>
          <div className="inputbox">
            <input type='text' onChange={handleChangeText} onKeyDown={handleKeyDown} required="required" />
            <span>Search Gif</span>
            <i></i>
          </div>
          <button onClick={handleSubmit} className="searchButton">Search GIFs</button>
        </div>
    )
}

export default Form