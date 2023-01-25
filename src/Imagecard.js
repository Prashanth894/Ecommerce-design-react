import React,{useEffect, useState} from 'react'
import './App.css';
import imgs1 from './assets/image-product-4.jpg'
import imgs2 from './assets/image-product-3.jpg'
import imgs3 from './assets/image-product-2.jpg'
import imgs4 from './assets/image-product-1.jpg'
import imgs5 from './assets/shopping-cart.png'

function Imagecard() {
  const [Count,setCount] = useState(0);
  const submitminus=()=>{
    setCount(Count - 1)
   }
  const submitplus=()=>{
   setCount(Count + 1)
  }
  
 
  return (
    <div className='container' width='100%' height='100%'>
        <div className='row' id='row'>
       <div className='myProducts col-6'>
        <div className="image-container">
             <img id="img-Box" src={imgs4} alt="click here"></img>
         </div> <br/>
         <div className='myProducts-gallery row'>
           <div className='col'>
           <img src={imgs1}alt="click here"></img>
           </div>
           <div className='col'>
         <img src={imgs2}alt="click here"></img>
         </div>
         <div className='col'>
         <img src={imgs3}alt="click here"></img>
         </div>
         <div className='col'>
       <img src={imgs4}alt="click here"></img>
        </div>
         </div>
         </div>
 <div className="content col-4">
   <h5>SNEAKER COMPANY</h5><br/>
   <h2>Fall Limited Edition Sneakers</h2><br/>
   <p>These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole.They'll withstand everything the weather can offer</p>
   <h3>$125.00&nbsp; <span id='bg-span'>50%</span></h3>
       <p color='grey'><del>$125.00</del></p>
       <button className='btn btn-light m-3'onClick={submitminus}>-</button>{Count}
       
       <button className='btn btn-light m-3' onClick={submitplus}>+</button>
       <button className='button text-white '><img src={imgs5} width="15%"></img>&nbsp; &nbsp;&nbsp;Add to my cart</button>
     </div>
     
    


    </div>
    </div>
    
    
  );
}

export default Imagecard