import Owner from './pages/ownerregister';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './pages/navbar';
import Admin from './pages/admin';
import Postdetail from './pages/postdetail';
import Login from './pages/login';
import Signup from './pages/signup';
import Mypost from './pages/mypost';
import Orderscreen from './pages/orderscreen';
import Roomhistory from './pages/roomhistory';
import First from './pages/first';
import Second from './pages/second';
import Third from './pages/third';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} > </Route>
        <Route path="ownerpost" element={<Owner />} > </Route>
        <Route path="adminsecion" element={<Admin />}  ></Route>
        <Route path="signup" element={<Signup />} ></Route>
        <Route path="login" element={<Login />} ></Route>
        <Route path="mypost" element={<Mypost />} ></Route>
        <Route path="roomhistory" element={<Roomhistory />} ></Route>
        <Route path="ownername/:id" element={<Postdetail />}  ></Route>
        <Route path="orderscreen/:id/:fromdate/:todate" element={<Orderscreen />}></Route>

      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
