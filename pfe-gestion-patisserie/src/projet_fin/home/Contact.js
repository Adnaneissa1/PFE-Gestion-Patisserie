import React from 'react'
import './styleContact.css'
import maptanger from '../img/map_tanger.jpg'
export default function Contact() {
  return (
    <div style={{borderRadius:'50px 50px 0px 0px',backgroundColor:'rgb(236, 255, 255)'}}>
      <div className='contact_h'>
        <h3 className='text-warning'>TESTIMONIALS</h3>
        <h1 className='contact_h1'>Our Client Reviws</h1>
      </div>
      <div>

      </div>
      <div>
        <h1 className='contact_h1 text-center'>Contact</h1>
        <div className='contact' >
            <div  style={{backgroundColor:'white',width:'850px',padding:'80px',color:'aqua'}}>
                <h3 style={{paddingBottom:'20px'}}>Get In Touch</h3>
                  <div class="mb-3">
                    <input type="email" class="form-control input text-secondary" id="exampleFormControlInput1" placeholder="Your email"/>
                  </div>
                  <div class="mb-3">
                    <select className='form-control input'>
                        <option>Feed-back</option>
                        <option>Message</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <textarea class="form-control input text-secondary"  id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
                  </div>
                  <div class="">
                    <button className='btn btn-info btn-contact' style={{color:'white'}}>SEND NOW</button>
                  </div>
              </div>
            <div ><img width={'850px'} src={maptanger} alt=''/></div>
        </div>
      </div>
      <div className='alert alert-info contact_alert' style={{color:'white',paddingTop:'50px',paddingLeft:'130px'}}>
        <h2>Let,s Choose Your Favorite GATEAUX / CAKES </h2>
        <h2>Foods</h2>
        <div style={{display:'flex',justifyContent:'right',padding:'20px'}}>
          <button className='btn' style={{backgroundColor:'white',borderRadius:'120px',padding:'15px'}}>Order Now</button>
        </div>
        
        <div className='contact_h2'>
          <h2>Indulge in Sweet Moments !</h2>
          <h2>Life is short,eat the cake !</h2>
        </div>
      </div>
        
    </div>
  )
}
