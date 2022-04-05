import React, { useEffect, useState } from 'react'

const Meme = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  
  const [memeImage, setMemeImage] = useState([])

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * memeImage.length)
    const url = memeImage[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
  }

  const handleText = (e) => {
    const {name, value} = e.target
    setMeme(prevValue => (
      {
        ...prevValue, [name]: value
      }
    ))
    console.log(meme.topText)
  }

  const fetchData = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => (res.json()))
      .then((data) => {setMemeImage(data.data.memes)})
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className='p-[36px]'>
        <div className='form flex flex-col gap-6 mb-[17px]'>
            <div className='inputs flex justify-between'>
                <input type="text" 
                  className="meme-top-text rounded-[5px] w-[9rem] md:w-[11rem] text-gray-700 font-bold"
                  onChange={handleText}
                  name="topText"
                  value={meme.topText} 
                  placeholder='Top text...' 
                />
                <input type="text" 
                  className="meme-bottom-text rounded-[5px] w-[9rem] md:w-[11rem] text-gray-700 font-bold"
                  onChange={handleText} 
                  name="bottomText"
                  value={meme.bottomText}
                  placeholder='Bottom text...'/>
            </div>
            <butoon onClick={getMemeImage} className="bg-gradient-to-r from-[#672280] to-[#A626D3] h-[48px] rounded-[5px] text-center py-[12px] cursor-pointer">
                Get a new meme image  🖼
            </butoon>
            
        </div>
        <div className='meme relative'>
          <img src={meme.randomImage} alt='memeimage' className="meme-image max-w-full rounded-[3px]"/>
          <h2 className='memeText top'>
            {meme.topText}
          </h2>
          <h2 className='memeText bottom'>
            {meme.bottomText}
          </h2>
        </div>
        
    </section>
  )
}

export default Meme