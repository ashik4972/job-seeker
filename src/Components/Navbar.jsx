import React from 'react'
import gentleImg from '../Components/gentle2.png'
import Category from './Category'
import Footer from './Footer'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Job<span>Seekers</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page">Home</a>
        <a class="nav-link">Find a Jobs</a>
        <a class="nav-link">About</a>
        <a class="nav-link">Page</a>
        <a class="nav-link">Contact</a>
      </div>
    </div>
    <i className='fa fa-sign-out fa-bounce'></i>
  </div>
</nav>


<img src={gentleImg} class="img-responsive w-100" alt="Image"/>


<div className='categery'>
  <Category/>
</div>
<div>
  <Footer/>
</div>
    </div>
  )
}
