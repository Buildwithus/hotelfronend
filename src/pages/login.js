import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { RiLinkedinLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import Cookies from 'js-cookie';
axios.defaults.withCredentials = true;
function Login() {
  const config = {
    Headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true
  }
  const history = useNavigate();
  const [inp, setInp] = useState({});
  const changehandler = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setInp({ ...inp, [name]: value })
  }

  const submitdata = async (e) => {
    e.preventDefault();
    await axios.post("https://hotelbackend-etjh.onrender.com/login", inp, config)
      .then(res => {
        alert(res.data.message)
        if (res.data.message === "Successfully login") {

          Cookies.set("jsonwentokenn", res.data.token, { expires: new Date(Date.now() + 1000 * 12000) })
          history("/")

        }
      })


  }
  return (
    <div>
      <div className='con-dt' style={{ backgroundColor: "darkgreen" }}>
        <h1 className='d-heading'>This is a Login page</h1>
      </div>
      <div className='con-dt'>
        <form onSubmit={submitdata}>
          <div className='con-dtd'>


            <input className='sgn-ip' type='email' name='email' placeholder='Email' value={inp.email} onChange={changehandler} required ></input>
            <input className='sgn-ip' type='password' name='password' placeholder='Password' value={inp.password} onChange={changehandler} required></input>
            <div className='btndiv'><button type='submit' className='btn-sgn'>Login</button></div>
            <div className='sgn-ip'>
              <p className='d-p'>For Admin Access </p>
              <p className='d-p' style={{fontSize:"15px",color:"darkgreen"}}>Contact: kanuj49314@gmail.com</p>
   
            </div>
          </div>

        </form>
      </div>

      <div className='con-dt' style={{ backgroundColor: "darkgreen", marginTop: "6rem" }}>
        <div className='foot-h'>
          <Link to="/" className='link-f'  >Home</Link>
          <Link to="/signup" className='link-f' >Signup</Link>
          <Link to="/roomhistory" className='link-f' >Myrooms</Link>
          <Link to="/ownerpost" className='link-f'  >Owner Signup</Link>

        </div>
        <div className='foot-h2'>
          <div className='inst1'>
            <a className='insta-link' href='https://www.instagram.com/anujkumar49314/?igshid=ZDdkNTZiNTM%3D'> <BsInstagram className='tt' style={{ width: "100%", height: "100%", margin: "auto" }} /></a>
          </div>
          <div className='inst1'>
            <a className='insta-link' href='https://twitter.com/AnujKum41252487' ><SiTwitter className='tt' style={{ width: "100%", height: "100%", margin: "auto" }} /></a>
          </div>
          <div className='inst1'>
            <a className='insta-link' href='https://www.linkedin.com/in/anuj-kumar-756826225/'><RiLinkedinLine className='tt' style={{ width: "100%", height: "100%", margin: "auto" }} /></a>
          </div>
          <div className='inst1'>
            <a className='insta-link' href='https://github.com/Buildwithus'> <BsGithub className='tt' style={{ width: "100%", height: "100%", margin: "auto" }} /></a>
          </div>

        </div>
        <h5 className='d-heading' style={{ textAlign: "center" }}>All rights reserved</h5>
      </div>

    </div>
  )
}
export default Login;