import React from 'react'
import myJSON from '../json/example_data.json'
// import restaurantDetail from './restaurantDetail'

function Restaunrant() {

   return (
      <div className='restaurant row mx-1'>
         {myJSON && myJSON.map((item, index) =>{
            // console.log(index)
            // for(let i = 1; i <= 9; i++ ){
               return(
                  <div key={index} className="restaurant-items col d-flex justify-content-center my-3">
                     <div className="restaurantList shadow bg-white rounded card">
                        <div className="card-body">
                           <div className="restaurant-top d-block d-sm-flex ">
                              <div className="rest-img">
                                 <img src={item.profile_image_url} alt='' />
                              </div>
                              <div className="rest-content ml-3">
                                 <div className="rest-title">
                                    <h5>{item.name}</h5>
                                 </div>
                                 <div className="rest-open d-block d-sm-flex">
                                    <div className="rest-open-left d-flex align-items-center">
                                       <i className="ri-calendar-2-line"></i>
                                       <p className="mt-3 ml-2">10.00 AM - 6.00 PM</p>
                                    </div>
                                    <div className="rest-open-right d-flex ml-5">
                                       <span className="mt-3 ml-5 d-none d-sm-block"></span>
                                       <p className="mt-2 ml-1 ">{item.rating}</p>
                                    </div>
                                 </div>                        
                              </div>                     
                           </div>
                           <ul className="rest-image d-flex hover-shadow">
                              <li><img src={item.images[0]} alt="" /></li>
                              <li className="d-none d-sm-block"><img src={item.images[1]} alt="" /></li>
                              <li className="d-none d-sm-block"><img src={item.images[2]} alt="" /></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  
               )
            // }
         })}
      </div>
   )
}

export default Restaunrant