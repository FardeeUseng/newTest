import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css'
import Navbar from './assets/components/Navbar';
import Sidebar from './assets/components/Sidebar';
import ListPlace from './assets/components/ListPlace';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RestaurantDetail from './assets/components/RestaurantDetail';

function App() {
  return (
    // <BrowserRouter>
      <div className="container-fluid p-0">
        <Navbar/>
        <Sidebar/>
        <ListPlace/>
      </div>
    //   {/* <Routes>
    //     <Route path='/' element={<App/>} />
    //     <Route path='app' element={<App/>} />
    //     <Route path='restaurantDetail' element={<RestaurantDetail/>} />
    //   </Routes>
    // </BrowserRouter> */}
    
  );
}

export default App;
