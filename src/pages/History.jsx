import React from 'react'
import imageOne from '../data/img/parTwo.jpeg'
import imageTwo from '../data/img/one.jpeg'
import imageThree from '../data/img/one.jpeg'
export default function History() {
  return (
    <div className='container'>
        <h2 className='title'>Historical Places</h2>
        <div className='hisWrapper'>
            <div className='hisContainer'>
                <p className='subtitle'>City Hall</p>
                <div className='bottomWrapper'>
                    <p>The Hall is made up of components from all over the world. The honey-coloured stone, which makes up its façade of limestone, was imported from Bath in England. The tower houses a clock and a number of bells, modelled on the famous Big Ben. The clock strikes the hours and chimes the Westminster quarters, which is a particular chime originating from St Mary’s Cathedral in England...</p>
                    <img src={imageOne} alt='' className='imageHistorical' />
                </div>
            </div>
            <div className='hisContainer'>
                <p className='subtitle'>Castle of Good Hope</p>
                <div className='bottomWrapper'>
                    <p>The Castle of Good Hope in Cape Town is the oldest building in South Africa. The Dutch built it as a supply station and military fortress in the 1600s.

Today the castle is the headquarters of the South African military in the Western Cape province. It also houses the Castle Military Museum and the William Fehr Art Collection.</p>
                    <img src={imageTwo} alt='' className='imageHistorical sizing' />
                </div>
            </div>
            <div className='hisContainer'>
                <p className='subtitle'>3rd place</p>
                <div className='bottomWrapper'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate quasi consectetur asperiores ipsum praesentium aliquid voluptas libero possimus et hic qui repudiandae quidem, quos, dolorum nobis incidunt atque ea.</p>
                    <img src={imageThree} alt='' className='imageHistorical' />
                </div>
            </div>
        </div>


    </div>
  )
}
