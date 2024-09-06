import React from 'react'

const Header = () => {
  return (
    <div>
   <section className="background">
<nav class="navbar navbar-expand-lg navbar-light " id='navbar'>

    <img src="cc logo.png" alt="" id='cclogo' />
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link"  id='home'href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id='home' href="#">properties</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id='home' href="#">Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " id='home' href="#">Contact</a>
      </li>
      <li class="nav-item">
        {/* <a class="nav-link " id='home' href="#">Contact</a> */}
        <img src="facebook-xxl.png" alt="" id='facebook'/>
      </li>
      {/* <div className="page">
        <img src="background.jpg" alt=""  id='background'/>
      </div> */}
            <li class="nav-item">
        <img src="instagram-xxl.png" alt="" id='instagram'/>
      </li>
      <li class="nav-item">
        <img src="linkedin-xxl-1.png" alt="" id='linkedin'/>
      </li>
      <li class="nav-item">
        <a class="nav-link " id='English' href="#">English</a>
      </li>

      <li class="nav-item">
        <a class="nav-link " id='English' href="#">French</a>
      </li>
    
    </ul>
  
  </div>
</nav>
{/* </section> */}

<div className="container" id='form'>
  <div className="head">HURRY UP
  <div className="line">Book Your Dream Home Before It’s Sold Out </div>
  </div>
<div className="form">
<input class="form-control form-control-mb-3" type="text" placeholder="Name" aria-label=".form-control-lg example"/>
<br/>
<input class="form-control" type="text" placeholder="Email" aria-label="default input example"/>
<br/>
<input class="form-control form-control-sm" type="text" placeholder="Contact no" aria-label=".form-control-sm example"/>
<br/>
<select class="form-control form-control-sm">
<option>Purpose of Buying</option>
<option>For Investment</option>
<option>For residental</option>
</select>
<br/>
<button type="button" class="btn btn-warning" id='formbutton'>Get more details</button>
</div>
</div>
</section>
<div class=".container-fluid" id='row'>
  <div class="row"  >
    <div class="col-sm" id='yellow'>
      <img src="call.svg" alt="" id='call'  />
      <div className="text">Who</div>

      
    </div>
    <div class="col-sm" id='grey'>
    <img src="call.svg" alt="" id='call'  />
      <div className="text">How</div>
    </div>
    <div class="col-sm" id='yellow' >
    <img src="call.svg" alt="" id='call'  />
      <div className="text">Why</div>
    </div>
  </div>
</div>





</div>

  )
}

export default Header
