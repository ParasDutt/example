import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Middlepart = () => {
  return (
    <div>
      <div className="container">
  <div className="text1">
choose a lifestyle
<div className="othertext">
Refine your search by selecting the lifestyle you are looking for.
</div>
</div>
</div>
<div className="container">
  <div className="figure">
  <div class="container">
  <div class="row">
    <div class="col-sm">
  <figure class="figure">
  <img src="beachfront.jpg" class="figure-img img-fluid rounded" alt="" width='100%'/>
  <figcaption class="figure-caption" id='caption' >Beachfront</figcaption>
</figure>
    </div>
   
    <div class="col-sm" >
    <figure class="figure">
  <img src="dubai marina living.jpg" class="figure-img img-fluid rounded" alt="" width='87%'  />
  <figcaption class="figure-caption" id='caption1'>Dubai Marina Living </figcaption>
</figure>
    </div>
    <div class="col-sm" id='cen'>
    <figure class="figure">
  <img src="Downtown living.jpg" class="figure-img img-fluid rounded" alt="" width='90%' />
  <figcaption class="figure-caption" id='caption1'>Downtown living</figcaption>
</figure>
    </div>

  </div>
</div>
  {/* <figure class="figure">
  <img src="beachfront.jpg" class="figure-img img-fluid rounded" alt="" width='30%'/>
  <figcaption class="figure-caption">Beachfront</figcaption>
</figure> */}

  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <figure class="figure">
  <img src="Golf estate.jpg" class="figure-img img-fluid rounded" alt="" width='400' />
  <figcaption class="figure-caption" id='caption'>Golf estate</figcaption>
</figure>
    </div>
    <br/>
    <div class="col-sm" >
    <figure class="figure">
  <img src="residential apartment.jpg" class="figure-img img-fluid rounded" alt="" width='91%'   />
  <figcaption class="figure-caption" id='caption1'>Residential apartment</figcaption>
</figure>
    </div>
    <div class="col-sm" id='cen'>
    <figure class="figure">
  <img src="luxury penthouses1.jpg" class="figure-img img-fluid rounded" alt="" width='88%'  />
  <figcaption class="figure-caption" id='caption'>luxury penthouses</figcaption>
</figure>
    </div>
  </div>
</div>

<div className="container">
  <div className="text1">

  FIND YOUR PERFECT HOME

<div className="othertext">
Buying a home is one of the biggest decisions you have to make in life, let us help you to make sure you get it right.
</div>
</div>
</div>
<div className="container" id='card'>
<div class="card">
  <div class="card-body">
  <div class="container">
  <div class="row">
    <div class="col-sm">
    <Dropdown id='dropdown'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Types
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" id='DropdownMenu'>Apartments</Dropdown.Item>
        <Dropdown.Item href="#/action-2" id='DropdownMenu'>Villas</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
    </div>
    <div class="col-sm">
    <Dropdown id='dropdown'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Categories
      </Dropdown.Toggle>

      <Dropdown.Menu >
      <Dropdown.Item href="#/action-1" id='DropdownMenu'>Downtown Living</Dropdown.Item>
        <Dropdown.Item href="#/action-2" id='DropdownMenu'>Dubai Marina Living</Dropdown.Item>
        <Dropdown.Item href="#/action-1" id='DropdownMenu'>Luxury Penthouses</Dropdown.Item>
        <Dropdown.Item href="#/action-2" id='DropdownMenu'>Residential Apartments</Dropdown.Item>
        <Dropdown.Item href="#/action-1" id='DropdownMenu'>Villas</Dropdown.Item>
        
        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
    </div>
    <div class="col-sm">
    <Dropdown id='dropdown'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Areas
      </Dropdown.Toggle>

      <Dropdown.Menu >
      <Dropdown.Item href="#/action-1" id='DropdownMenu'>Al Furjan</Dropdown.Item>
        <Dropdown.Item href="#/action-2" id='DropdownMenu'>Business Bay District 1,</Dropdown.Item>
        <Dropdown.Item href="#/action-1" id='DropdownMenu'>Meydan Downtown</Dropdown.Item>
        <Dropdown.Item href="#/action-2" id='DropdownMenu'>Dubai Marina</Dropdown.Item>
        <Dropdown.Item href="#/action-1" id='DropdownMenu'>Dubai Media City</Dropdown.Item>
        <Dropdown.Item href="#/action-1" id='DropdownMenu'>Dubai Production City (IMPZ)</Dropdown.Item>
        <Dropdown.Item href="#/action-1" id='DropdownMenu'>Dubailand Mirdiff</Dropdown.Item>

        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
    </div>
    <div class="col-sm">
    <Dropdown id='dropdown'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Bedrooms
      </Dropdown.Toggle>

      <Dropdown.Menu >
      <Dropdown.Item href="#/action-1" id='DropdownMenu'>1</Dropdown.Item>
        <Dropdown.Item href="#/action-2" id='DropdownMenu'>2</Dropdown.Item>
        <Dropdown.Item href="#/action-1" id='DropdownMenu'>3</Dropdown.Item>
        <Dropdown.Item href="#/action-2" id='DropdownMenu'>4</Dropdown.Item>
        <Dropdown.Item href="#/action-1" id='DropdownMenu'>5</Dropdown.Item>
        <Dropdown.Item href="#/action-1" id='DropdownMenu'>6</Dropdown.Item>
        <Dropdown.Item href="#/action-1" id='DropdownMenu'>7</Dropdown.Item>
        <Dropdown.Item href="#/action-1" id='DropdownMenu'>8</Dropdown.Item>
        <Dropdown.Item href="#/action-1" id='DropdownMenu'>9</Dropdown.Item>
        <Dropdown.Item href="#/action-1" id='DropdownMenu'>10</Dropdown.Item>


        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
    </div>
    <div class="row" id='scale'>
    <div class="col">
      <div className="range">
        Price range:<div className="moneyrange">0 د.إ to 15,000,000 د.إ</div>
      </div>
    <ProgressBar variant="warning"  now={60} />
 
    </div>
    <div class="col">
    <button type="button" class="btn btn-warning" id='btn'>Search</button>
    </div>
  </div>
  </div>
</div>
  </div>
</div>
</div>

<div className="text1">

FEATURED PROPERTIES
<div className="othertext">
Let’s find a home that’s perfect for you.
</div>
</div>

<div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card" >
  <img class="card-img-top" src="residential apartment.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title" id='ttle'>Danube Pearlz </h5>
    <p class="card-text" id='money'> 490,000 د.إ</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" >
  <img class="card-img-top" src="Golf estate.jpg"  alt="Card image cap" />
  
  <div class="card-body">
    <br/>
    <h5 class="card-title" id='ttle'>Danube Gemz  </h5>
    <p class="card-text" id='money'> 550,000 د.إ</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" >
  <img class="card-img-top" src="Downtown living.jpg"  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title" id='ttle'>DAMAC Lagoons  </h5>
    <p class="card-text" id='money'> 1,490,000 د.إ</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card" >
  <img class="card-img-top" src="Downtown living.jpg"  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title" id='ttle'>Avani Palm Views Tower   </h5>
    <p class="card-text" id='money'> 1,300,000 د.إ</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" >
  <img class="card-img-top" src="dubai marina living.jpg"  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title" id='ttle'>Regalia by Deyaar   </h5>
    <p class="card-text" id='money'> 627,000 د.إ</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" >
  <img class="card-img-top" src="luxury penthouses1.jpg"  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title" id='ttle'>Amna Tower – Al Habtoor City   </h5>
    <p class="card-text" id='money'> 1,100,000 د.إ</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
  </div>
</div>
<div className="button">
<button type="button" class="btn btn-warning" id='button' >Load more listings</button>

</div>

{/* <div className="imagetext" id='imagetext'>
  <div className="tittle">
  LOOKING TO BUY YOUR DREAM HOME?
  </div>
</div> */}

<div className="Meetmy">
  Meet My
  <div className="amazing">
    Amazing Team
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card"  >
  <img class="card-img-top" id='circle' src="Ankit Gulati.jpg" alt="Card image cap"/>
  <div class="card-body" >
    <h5 class="card-title" id='cardname'>Ankit Gulati</h5>
    <div className="word">Founder & CEO</div>
    <br/>
    <p class="card-text">16 Years Experience in Real Estate, Worked with Emaar, Damac, Sobha & Hamptons.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <div className="property">Properties Sold:</div>
    <div className="upto">Up to 1.2 Billion USD</div>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card"  >
  <img class="card-img-top" id='circle' src="Deepak raj.png" alt="Card image cap"/>
  <div class="card-body" >
    <h5 class="card-title" id='cardname'>Deepak raj</h5>
    <div className="word">Founder & CEO</div>
    <br/>
    <p class="card-text">16 Years Experience in Real Estate, Worked with Emaar, Damac, Sobha & Hamptons.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <div className="property">Properties Sold:</div>
    <div className="upto">Up to 1.2 Billion USD</div>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card"  >
  <img class="card-img-top" id='circle' src="Jehad al alawi.png" alt="Card image cap"/>
  <div class="card-body" >
    <h5 class="card-title" id='cardname'>Jehad al alawi</h5>
    <div className="word">Founder & CEO</div>
    <br/>
    <p class="card-text">16 Years Experience in Real Estate, Worked with Emaar, Damac, Sobha & Hamptons.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <div className="property">Properties Sold:</div>
    <div className="upto">Up to 1.2 Billion USD</div>
  </div>
</div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card"  >
  <img class="card-img-top" id='circle' src="Olena Andrukhova.png" alt="Card image cap"/>
  <div class="card-body" >
    <h5 class="card-title" id='cardname'>Olena Andrukhova</h5>
    <div className="word">Founder & CEO</div>
    <br/>
    <p class="card-text">16 Years Experience in Real Estate, Worked with Emaar, Damac, Sobha & Hamptons.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <div className="property">Properties Sold:</div>
    <div className="upto">Up to 1.2 Billion USD</div>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card"  >
  <img class="card-img-top" id='circle' src="Dr. Bettina Polycarpou.png" alt="Card image cap"/>
  <div class="card-body" >
    <h5 class="card-title" id='cardname'>Dr. Bettina Polycarpou</h5>
    <div className="word">Founder & CEO</div>
    <br/>
    <p class="card-text">16 Years Experience in Real Estate, Worked with Emaar, Damac, Sobha & Hamptons.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <div className="property">Properties Sold:</div>
    <div className="upto">Up to 1.2 Billion USD</div>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card"  >
  <img class="card-img-top" id='circle' src="Jade Ward.png" alt="Card image cap"/>
  <div class="card-body" >
    <h5 class="card-title" id='cardname'>Jade Ward</h5>
    <div className="word">Founder & CEO</div>
    <br/>
    <p class="card-text">16 Years Experience in Real Estate, Worked with Emaar, Damac, Sobha & Hamptons.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <div className="property">Properties Sold:</div>
    <div className="upto">Up to 1.2 Billion USD</div>
  </div>
</div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card"  >
  <img class="card-img-top" id='circle' src="Adele Verbitskaya.jpg" alt="Card image cap"/>
  <div class="card-body" >
    <h5 class="card-title" id='cardname'>Adele Verbitskaya</h5>
    <div className="word">Founder & CEO</div>
    <br/>
    <p class="card-text">16 Years Experience in Real Estate, Worked with Emaar, Damac, Sobha & Hamptons.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <div className="property">Properties Sold:</div>
    <div className="upto">Up to 1.2 Billion USD</div>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card"  >
  <img class="card-img-top" id='circle' src="Diana Dehtiar.jpg" alt="Card image cap"/>
  <div class="card-body" >
    <h5 class="card-title" id='cardname'>Diana Dehtiar</h5>
    <div className="word">Founder & CEO</div>
    <br/>
    <p class="card-text">16 Years Experience in Real Estate, Worked with Emaar, Damac, Sobha & Hamptons.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <div className="property">Properties Sold:</div>
    <div className="upto">Up to 1.2 Billion USD</div>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card"  >
  <img class="card-img-top" id='circle' src="Samar Ghashghaeian.jpg" alt="Card image cap"/>
  <div class="card-body" >
    <h5 class="card-title" id='cardname'>Samar Ghashghaeian</h5>
    <div className="word">Founder & CEO</div>
    <br/>
    <p class="card-text">16 Years Experience in Real Estate, Worked with Emaar, Damac, Sobha & Hamptons.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <div className="property">Properties Sold:</div>
    <div className="upto">Up to 1.2 Billion USD</div>
  </div>
</div>
    </div>
  </div>
</div>



    </div>
  )
}

export default Middlepart
