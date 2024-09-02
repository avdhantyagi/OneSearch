import React from 'react'

export default function Category(props) {
    const {type, icon} = props
  return (
    <div className='text-white bg-slate-800 rounded-lg lg:p-3 text-xl font-mono'>
        <img src={icon}/>
        <p>{type}</p>
    </div>
  )
}
