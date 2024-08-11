import React from 'react'

function test() {
  let time = new Date()
  let timeinH = time.getHours()
  let messge = () => {
    if(timeinH <12){
      return 'Morning';
    }else if (timeinH >=12 && timeinH <17){
      return 'afternoon';
    }else if (timeinH >=17 && timeinH < 19){
      return 'evening';
    }else{
      return 'night';
    }
  };

  return (
    <div>
        <h1 className='font-bold text-5xl'>good {messge()} </h1>
    </div>
  )
}

export default test