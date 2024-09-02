import React from 'react'

export default function Category(props) {
    const {type, icon} = props
  return (
    <div className='text-white bg-slate-800 rounded-lg text-sm p-2 lg:p-3 lg:text-xl font-mono'>
        <img src={icon}/>
        <p>{type}</p>
    </div>
  )
}
