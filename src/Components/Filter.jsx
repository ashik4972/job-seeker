import React from 'react'
import filterStyle from '../styles/filter.module.css'

function Filter() {
  return (
    <div className={`${filterStyle.filterContainer}`}>
      <h4>Job Category</h4>
      <br />
      <select name="jobCategory" className={`${filterStyle.selectContainer}`}>
    <option value="volvo">All Category</option>
    <option value="saab">IT</option>
    <option value="opel">Digital Marketing</option>
    <option value="audi">Content Writer</option>
    <option value="audi">Sale Executive</option>
    <option value="audi">Doctor</option>
  </select>
<br />
  <div>
    <br />
  <h4>Job Type</h4>
  <br />
  <input className={`${filterStyle.inputContainer}`} type="checkbox"/>
  <label className={`${filterStyle.labContainer}`}>Full Time</label><br/>
  <input className={`${filterStyle.inputContainer}`}type="checkbox"/>
  <label className={`${filterStyle.labContainer}`}>Part Time</label><br/>
  <input className={`${filterStyle.inputContainer}`} type="checkbox"/>
  <label className={`${filterStyle.labContainer}`}>Remote</label><br/>
  <input className={`${filterStyle.inputContainer}`} type="checkbox"/>
  <label className={`${filterStyle.labContainer}`}>Free Lance</label><br/>
  </div>
<br />
<div>
<h4>Job Location</h4>
<br />
  <select name="jobCategory" className={`${filterStyle.selectContainer}`}>
    <option value="volvo">Any Where</option>
    <option value="saab">Chennai</option>
    <option value="opel">Madurai</option>
    <option value="audi">Comibatore</option>
    <option value="audi">Trichy</option>
    <option value="audi">Bengalore</option>
  </select>
</div>
<br />
<div>
<h4>Experience</h4>
<br />
  <input className={`${filterStyle.inputContainer}`} type="checkbox"/>
  <label className={`${filterStyle.labContainer}`}>0-1yrs</label><br/>
  <input className={`${filterStyle.inputContainer}`}type="checkbox"/>
  <label className={`${filterStyle.labContainer}`}>1-5yrs</label><br/>
  <input className={`${filterStyle.inputContainer}`} type="checkbox"/>
  <label className={`${filterStyle.labContainer}`}>5-7yrs</label><br/>
  <input className={`${filterStyle.inputContainer}`} type="checkbox"/>
  <label className={`${filterStyle.labContainer}`}>7-10yrs</label><br/>
  </div>
<br />
  <div>
    <h4>Filter Jobs</h4>
    <input type="range" className={`${filterStyle.rangeContainer}`}/>
    <p>Price: 0 to 500</p>
  </div>
</div>
 

  )
}

export default Filter