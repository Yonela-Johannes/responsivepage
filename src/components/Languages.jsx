import React from 'react'
import './styles.css'
export default function Languages() {
  return (
    <div className='container wrapper'>
            <p className='title'>Sanskrit(Zen buddhist)</p>
        <div className='languageContainer wrapper'>
            <div className='grid'>
                <div className="rowHeader">
                    <p>English</p>
                    <p>Zen/C'hen</p>
                </div>
                <div className="gap rowOne">
                    <p>Relax. Nothing is under control</p>
                </div>
                <div className='colOne gap'>
                    <p>Fàngsōng. Yīqiè dōu zài zhǎngkòng zhī zhōng</p>
                </div>
                <div className="gap rowTwo">
                    <p>belief is an indication of fear.</p>
                </div>
                <div className='colTwo gap'>
                    <p>Xìnyǎng shì kǒngjù de biǎoxiàn.</p>
                </div>
                <div className="gap rowThree">
                    <p>Happy is the man who is nothing..</p>
                </div>
                <div className="colThree gap">
                    <p>Shénme dōu bùshì de rén shì xìngfú de..</p>
                </div>
                <div className="gap rowFour">
                    <p>The Observer is the Observed</p>
                </div>
                <div className='colFour gap'>
                    <p>Guānchá zhě jiùshì bèi guānchá zhě</p>
                </div>
            </div>
        </div>
    </div>
  )
}
