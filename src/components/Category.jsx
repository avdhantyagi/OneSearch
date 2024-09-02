import React from 'react'

export default function Category(props) {
    const {type, icon} = props
  return (
    <button className='text-white bg-slate-800 shadow-sm/10 rounded-lg text-sm p-2 lg:p-3 lg:text-xl font-mono transition-all hover:bg-blue-900  focus:bg-blue-700 lg:hover:-translate-x-1 lg:hover:-translate-y-1 lg:hover:shadow-slate-200/20 lg:hover:shadow-lg lg:hover:ease-in'>

        <img src={icon}/>
        <p>{type}</p>
    </button>
  )
}
