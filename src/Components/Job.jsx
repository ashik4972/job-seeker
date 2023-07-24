import React from 'react'

function Job({job}) {
  return (
    <div>
      <div className='categ-items'>
        <img className='w-25 h-25' src={job.compayImage} alt="" />
        <h5>{job.jobRole}</h5>
        <i className='fa fa-map-marker'style={{'left':'-5px' , 'position':'relative' , color:'gray'}}></i>
        <p >{job.workLocation}</p>
        <p>${job.salary}</p>
        <button>Full Time</button>
        <p>7 Hours Ago</p>
      </div>
    </div>
  )
}

export default Job