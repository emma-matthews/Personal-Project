import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className="lt-grid-container">
        <div className="lt-Heading">
          <h1>Love Language</h1>
        </div>
        <div className="lt-Information"></div>
        <div className="lt-NavBar">
          <h5 className='topnav'><a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a></h5>
        </div>
        <div className="lt-Subheading">
          <h2>Sub heading</h2>
        </div>
        <div className="lt-Bot"></div>
        <div className="lt-connect">
          <h2>Connect to the community</h2>
        </div>
        <div className="lt-Img">
          <img src="images\giraffeFlip.png" alt="baby giraffe sketched in pencil" />
        </div>
      </div>
    </div>
  )
}

export default Home