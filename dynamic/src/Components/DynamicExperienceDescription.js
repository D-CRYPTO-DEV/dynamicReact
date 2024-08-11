import React from 'react'
import Star from './DynamicImg/star.png'


function DynamicExperienceDescription(props) {
  let lesson = 'Life lessons with Katie Zaferes'
  let price = '$150'
  return (
    <div className='w-48 text-left pb-5'>
      <div className='flex gap-1 text-sm'>
            <img className='w-4 h-4' src={Star}/>
            <span>5.0</span>
            <span className='text-blurwhite'>(6)</span>
            <span className='text-blurwhite'>.USA</span>
      </div>
      <p className=' text-sm'>
          {lesson}
      </p>
      <p className='flex gap-1'>
          <span className='font-semibold'>From</span>
          <span>{price}</span>
          <span className='text-blurwhite'>/person</span>
      </p>
    </div>
  )
}

export default DynamicExperienceDescription