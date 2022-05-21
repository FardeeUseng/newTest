import React from 'react'
import Searchrestaunrant from './SearchRestaunrant'
import Restaunrant from './Restaunrant'
import Sidebar from './Sidebar'

function ListPlace() {
   return (
      <div className='content'>
         <Searchrestaunrant/>
         <Restaunrant/>
      </div>
   )
}

export default ListPlace