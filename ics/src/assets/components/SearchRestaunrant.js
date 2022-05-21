import React from 'react'

function Searchrestaunrant() {
   return (
      <div className="placeList">
         <div className="serachRestaurant row">
            <div className="searchRestaurant-left col-xl-5">
               <h3>Place List</h3>
            </div>
            <div className="searchRestaurant-right col-xl-7 d-md-flex">
               <div className="selectRestaurant">
                  <select className="selectRestaurant-item py-0" name="" id="">
                     <option value="restaurant">Restaurant</option>
                     <option value="bakery">Bakery</option>
                     <option value="cafe">Cafe</option>
                  </select>
               </div>
               <span className="d-none d-md-block"></span>
               <div className="searchName">
                  <input type="text" placeholder="Search Name.." /> 
               </div>
            </div>
         </div>
      </div>
   )
}

export default Searchrestaunrant