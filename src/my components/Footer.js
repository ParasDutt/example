import React from 'react'

const Footer = () => {
  return (
    <div>
        <section id='subfooter'>
        <div class="container" >
  <div class="row">
    <div class="col">
    <div class="sub_footer_content ">
                    <span class="copyright">Copyright 2021 | All Rights Reserved | Designed By 2CG  </span>
    </div>
    </div>
    <div class="col" id='privacy'>
     Privacy policy
    </div>
  </div>
  </div>
  </section>
      <div class="container" id='lastfooter'>
  <div class="row">
    
    <div class="col-sm">
     <div className="email">
     <span class="material-symbols-outlined" id='icon'>mail</span>
<span class="email-9">Email</span>
     </div>
    </div>
    <div class="col-sm">
     <div className="call">
     <span class="material-symbols-outlined" id='icon' >
call
</span>
<span class="email-9">Call</span>
     </div>
    </div>
    <div class="col-sm">
    <div className="whatsup">
    <span class="material-symbols-outlined" id='icon'>
chat
</span>
<span class="email-9">Whatsapp</span>
    </div>
    </div>
    <div class="col-sm">
      <div className="contact">
      <span class="material-symbols-outlined" id='icon'>
contacts
</span>
<span class="email-9">contact</span>

      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Footer
