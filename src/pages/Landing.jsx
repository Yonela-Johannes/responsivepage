import React from 'react'
import profile from '../data/img/profile.jpg'
import city from '../data/img/giza.jpg'
import './styles.css'
function Landing() {
  return (
    <div className='container'>
      <div className="center">
          <p className='name'>Yonela Johannes</p>
        <div>
          <img alt=' profile ' src={profile} className='profileImage' />
          <p className='quote'>Today is the most important day of our lives.</p>
        </div>
      </div>
      <div className="city">
          <p className='title'>Egypt, Giza</p>
        <div className='row'>
          <div className='bottomContainer'>
            <img alt=' city ' src={city} className='cityImage' />
            <p className='description'>The pyramid of Giza is one of the greatest mysteries along with ancient statues and tombs that continue to seize the attention of the world.
            <span>~Mysteries intigues me. I fascinated by it.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing