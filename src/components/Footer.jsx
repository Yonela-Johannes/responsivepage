import React from 'react'
import logo from '../data/img/niello.png'
import codeXlogo from '../data/img/codex.png'
function Footer() {
  return (
    <div className='footer'>
        <div className="footerContainer">
            <p>@ProjectCodeX</p>
            <img className="footerLogo first" src={codeXlogo} alt='codex logo' />
        </div>
        <div className="footerContainer">
            <p>Agile Web-Developer 2022</p>
        </div>
        <div className="footerContainer">
            <p>Yonela Johannes</p>
            <img src={logo} alt=" logo " className='footerLogo second' />
        </div>
    </div>
  )
}

export default Footer