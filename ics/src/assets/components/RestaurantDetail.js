import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'

function RestaurantDetail() {
   return (
      <div className='container-fluid p-0'>
         <nav className="d-flex">
            <div className="nav-left">
               <img className="d-sm-none" src="assets/img/ics.webp" alt="" />
            </div>
            <div className="nav-right d-flex mx-3 mx-sm-5">
               <div className="inform d-sm-flex d-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1v2zM9.5 21h5a2.5 2.5 0 1 1-5 0z" fill="rgba(255,255,255,1)"/></svg>
               </div>
               <div className="profile ml-3 ">
                  <img src="assets/img/user.png" alt="" />
               </div>
               <div className="name ml-3 d-none d-sm-block">
                  <h2 className="my-1">Fardee Tat</h2>
               </div>
            </div>
         </nav>
         <ul className="sidebarMenu d-none d-md-block">
            <li><img src="assets/img/ics.webp" alt="" /></li>
            <li><div className="sidebarMenu-item d-flex">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" fill="rgba(255,255,255,1)"/></svg>
            </div></li>
         </ul>
         <div className='content'>
            <div className="restaurant-nav row mt-4 mx-3">
               <div className="restaurant-nav-left col d-flex">
                  <button> Back </button>
               </div>
               <div className="restaurant-nav-right d-sm-none d-flex col">
                  <button>INFORMATION</button>
                  <button>IMAGE</button>
               </div>
            </div>
         </div>
         <div className='restaurant-detaul row mx-3 mt-4'>
            <div className="restaurant-items col-sm-7 d-flex my-3">
               <div className="shadow bg-white rounded card">
                  <img className="card-img-top" src="assets/img/restaurantImage/restaurant.jpg" />
                  <div className="rest-left card-body">
                     <div className="rest-content ml-1 row">
                        <div className="rest-title-detail col-10 d-flex align-items-center">
                           <h5>Cantina Wine Bar & Italian Kitchen</h5>
                        </div>
                        <div className="rest-star col-2">
                           <p className="mt-2">4.5</p>
                        </div>
                        <div className="rest-detail mt-3">
                           <div className="rest-address ">
                              <h5>Address:</h5>
                              <p>55/5 Soi Phahon Yothin 2, Khwaeng Samsen Nai, Khet Phaya Thai, Krung Thep Maha Nakhon 10400, Thailand</p>
                           </div>
                           <div className="rest-opening">
                              <h5>Opening Hour:</h5>
                              <p>Monday: 10:00 AM – 6:00 PM
                                 Tuesday: 10:00 AM – 6:00 PM
                                 Wednesday: 10:00 AM – 6:00 PM
                                 Thursday: 10:00 AM – 6:00 PM
                                 Friday: 10:00 AM – 6:00 PM
                                 Saturday: Closed
                                 Sunday: Closed</p>
                           </div>
                        </div>                     
                     </div>
                  </div>
               </div>
            </div>
            <div className="restaurant-img col-5 d-none d-sm-flex my-3">
               <div className="rest-right shadow bg-white rounded card">
                  <div className="card-header">
                     <h3>Image</h3>
                  </div>
                  <img className="card-img rounded-0" src="assets/img/restaurantImage/menu.jpg" />
                  <img className="card-img rounded-0" src="assets/img/restaurantImage/menu.jpg" />
                  <img className="card-img rounded-0" src="assets/img/restaurantImage/menu.jpg" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default RestaurantDetail