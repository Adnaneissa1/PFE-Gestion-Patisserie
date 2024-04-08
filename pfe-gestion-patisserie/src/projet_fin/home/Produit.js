import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styleProduits.css'
import produi1 from '../img/produit1.jpg'
import produi2 from '../img/produit2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import star from '../img/star.png'
// import Slider from "react-slick"
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
export default function Produit() {
    const nombres = [1,2,3,4,5];
    const information_produit=[
        {id:0,type:'Cake',titre:'Strawberry Cake',prix:110,image:produi1},
        {id:0,type:'Cake',titre:'Strawberry Cake',prix:1210,image:produi2},
        {id:0,type:'Cake',titre:'Strawberry Cake',prix:1210,image:img3},
        {id:0,type:'Cake',titre:'Strawberry Cake',prix:1210,image:img4},
        
    ]
    // var settings = {
    //     // dots: true,
    //     // infinite: true,
    //     // speed: 500,
    //     // slidesToShow: 1,
    //     // slidesToScroll: 1,
        
        
    //   };
    
  return (
    <div style={{}}>
        <div>
            <h1 className='h1'>Ready for the deliciousness<br/>of our products!</h1>
            <div className='list'>
                <div  className='listdiv'>
                    <Link to={'/2'}  className='listLink'>Pastry</Link>
                    <Link to={'/'}  className='listLink'>Bakery</Link>
                    <Link to={'/'}  className='listLink'>Cake</Link>
                    <Link to={'/'}  className='listLink'>Specials</Link>                    
                </div>
            </div>
        </div>
        
{/* <Slider {...settings}> */}
        <div className='card_produit'>
            
            {information_produit.map((e,k)=>(
                <div key={k} className="card" style={{width: '25rem',border:'1px solid white'}}>
                    <img className="card-img-top" src={e.image} alt="Card image cap"/>
                    <div class="card-body">
                        <p class="card-text">{e.type} </p>
                        <h1>{e.titre}</h1>
                        {nombres.map((e)=>( <img src={star} style={{height:'20px'}}/>))}
                        <div  className='card-art'>

                            <h3>{e.prix} Dh</h3>
                            {/* <h1 className=''><i class='bx bx-heart alert alert-warning card_produit_Link1'></i></h1>
                            <h1><i class='bx bx-plus  alert alert-warning card_produit_Link1'></i></h1> */}
                            <h1 className='card_produit_Link1'><i class='bx bx-heart'></i></h1>
                            <h1  className='card_produit_Link2'><i class='bx bx-plus'></i></h1>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
        {/* </Slider> */}
        <h2 style={{textAlign:'center'}}> <Link to={'/'}  style={{textDecoration:'none'}} className='text-warning'>View All <i class='bx bx-chevron-right-circle' style={{fontSize:"30px"}}></i></Link></h2>
    </div>
  )
}
