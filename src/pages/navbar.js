import { Outlet, Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
//roomhistory
function Navbar() {
   return (

      <nav class="navbar navbar-expand-lg navbar-light nb">
         <div class="container-fluid">
            <a class="navbar-brand"  href="#">RoomRapid</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div class="navbar-nav">
                  <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
                  <Link to="/ownerpost" class="nav-link active" >Rooms Registration</Link>
                  <Link to="/adminsecion" class="nav-link active" >Admin Section</Link>
                  <Link to="/mypost" class="nav-link active" >Registered Rooms</Link>
                  <Link to="/roomhistory" class="nav-link active" >Booked Rooms</Link>
                  <Link to="/signup" class="nav-link active" >Signup</Link>
                  <Link to="/login" class="nav-link active" >Login</Link>

               </div>
            </div>
         </div>
      </nav>

   )
}
export default Navbar;