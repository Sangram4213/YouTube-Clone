import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonList=["All","Game","Songs","Live","Cricket","News","Vlogs"]
  return (
    <div className='flex'>
      {buttonList.map((button,index)=>(
        <Button name={button} key={index}/>  
      ))} 
    </div>
  )
}

export default ButtonList