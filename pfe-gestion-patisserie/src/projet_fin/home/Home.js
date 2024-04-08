import React from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import cake from '../img/cake.jpg'
import delicious from '../img/delicious.png'
import sweet from '../img/sweet.jpg'
import './styleHome.css'

export default function Home() {
  return (
    <div  style={{ backgroundColor:'rgb(236, 255, 255)'}}>
        <div  className=' home d-flex justify-content-evenly' style={{}}>
            <div style={{gap:'50px'}}>
                <div>
                    <div style={{fontSize:'60px'}}>
                        <span className='text-warning'>Pastries Tangier </span>- A Taste of <br/>
                        Moroccan Elegance
                    </div>
                    <div style={{width:'50%'}}>
                        <p>Welcome to <b className='text text-orange'>Pastries Tangier</b>, where you'il discover Moroccan indulgence
                        at its finest. From delicate pastries to decadent gateaux , our creations 
                        embody the vibrant spirit of Morocco in every bite .</p>
                    </div>
                    <div>
                        <button style={{padding:'20px',color:'white'}} className='btn btn-warning'>See Cakes & Specials</button>
                    </div>
                </div>
                <div style={{padding:'100px'}} className='d-flex'>
                    <div> <img className='img3' src={img3} alt=''/></div>
                    <div style={{marginLeft:'5%',width:'40%'}}>
                        <p>CAKE THE WEEK</p> <br/>
                        <h3>Choco Yuza Macaron</h3>  
                        <p>if you have  an accasion and are in search of a 
                            distinctive flavor,then our Choco Yuzu Macaron
                            is the perfect choice
                        </p>
                        <button style={{padding:'20px',color:'white'}} className='btn btn-warning'>Order Now</button>
                    </div>
                    
                </div>

            </div>
            <div> <img className='img' src={img2} alt=''/></div>
        </div>

        <div className='bg_img'>
            <div  className='bg_imgh1 format_card'>
                <div className='content_img'>
                <img className='' src={delicious}  style={{width:'50px'}} alt=''/>
                    <h4>Delicious bakery</h4>
                    <p>Where every bite is a tast  of happiness .</p>                    
                </div>

            </div>
            <div  className='bg_imgh2 format_card'>
                <div  className='content_img'>
                {/* <i class='bx bxs-like bx-spin text-secondary' style={{fontSize:'50px'}} ></i> */}
                <img className='' src={cake}  style={{width:'50px'}} alt=''/>
                    <h3>Cake</h3>
                    <p>A sympol of celebration and induigence .</p>                    
                </div>
            </div>
            <div  className='bg_imgh3 format_card'>
                <div  className='content_img'>
                <img className='' src={sweet}  style={{width:'50px'}} alt=''/>
                    <h3>Sweet Delights</h3>
                    <p>A sweet symphony of tradition and innovation .</p>                    
                </div>

            </div>
        </div>

    </div>
  )
}
