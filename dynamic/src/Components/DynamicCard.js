import React from 'react'
import biker from './DynamicImg/biker.png'

function DynamicCard() {
  return (
    <div className=' pt-16 pb-2 ' >
        <div className='h-64 w-48  ' style={{backgroundImage: `url(${biker})`, backgroundPosition:'centre', backgroundSize:'cover'}}>
            <span className='relative right-14 top-2 w-32 rounded-sm h-20 bg-white '>
              Sold Out
            </span>
        </div>
    </div>
  )
}

export default DynamicCard