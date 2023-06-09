import React, {useState, useEffect} from 'react';
import './App.css';

//COMPONENTS
import getGifByTitle from './services/getGifByTitle';
import GifGallery from './components/gif-gallery/gifGallery';
import Loader from './components/loader/loader';
import Form from './components/form/from';

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [amountValue, setAmountValue] = useState(20)
  const [isContent, setContent] = useState(false)
  const [response, setResponse] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [scrolled, setScrolled] = useState('topBar')

  useEffect(()=>{
    window.addEventListener("scroll", listenScrollEvent)
  })

  const handleChangeText = (event) => {
    setSearchValue(event.target.value)
  }

  const handleChageAmount = (event) => {
    setAmountValue(event.target.value)
  }

  const listenScrollEvent = e => {
    if (window.scrollY > 100) {
      setScrolled('topBar scrolled')
    } else {
      setScrolled('topBar')
    }
  }

  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      handleSubmit() 
    }
  }

  async function handleSubmit() {
    setContent(true)
    setLoading(true)
    const res = await getGifByTitle(searchValue, amountValue)
    setResponse(res)
    setTimeout(()=>{
      setLoading(false)
    }, 750)
    res.length === 0 && setContent(false)
  }

  return (
    <div className="App">
        <h1>Welcome to Gifly!</h1>
        <p className='subtitle'>By Santiago Herrera</p>
      <div  className={scrolled}>
        <Form 
          handleChangeText={handleChangeText}
          handleChageAmount={handleChageAmount}
          handleKeyDown={handleKeyDown}
          handleSubmit={handleSubmit}
        />
      </div>
       { !isContent ?  <p>There's nothing here...</p>  :
          <>
              { 
              isLoading && 
                <div className='loaderContainer'>
                  <Loader /> 
                </div>
              }
              <GifGallery data={response}/>
          </>
        }
    </div>
  );
}

export default App;
