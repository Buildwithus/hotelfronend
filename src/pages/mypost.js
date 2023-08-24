import axios from 'axios';
import { useEffect, useState } from 'react'
import { BsInstagram } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { RiLinkedinLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { BsGithub } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Loader from './loader';
function Mypost() {
  const [post, setPost] = useState({});
  const history = useNavigate();
  const [loading, setLoading] = useState(false)
  const getdata = async () => {
    try {
      const res = await axios.get("https://roomrapidbackend.onrender.com/postedroom", { withCredentials: true })
      setPost(res.data)
      console.log(res.data)
      setLoading(true)
      if (!Cookies.get("jsonwentokenn")) {
        return history("/login")
      }
    } catch (error) {
      history("/login")
    }
  }

  useEffect(() => {
    getdata();
  }, [])
  return (
    <div>

      <div className='con-dt' style={{ backgroundColor: "darkgreen" }}>
        <h1 className='d-heading'>You are owner of this room</h1>
      </div>


      <div className='con-dt'>
        {loading ? Array.isArray(post)
          ? post.map(element => {
            return <div className='con-dtd' style={{ border: "solid darkgreen", backgroundColor: "rgb(206, 226, 206)" }}>
              <p className='d-p' style={{ fontWeight: "bold", color: "green" }}>Room Id: {element._id}</p>
              <img
                src={element.img}
                className='img-d img-m'
              />
              <img
                src={element.img1}
                className='img-d img-m'
              />
              <img
                src={element.img2}
                className='img-d img-m'
              />
              <h1 className='d-h1'>Information:</h1>
              <div className='left-d'>
                <p className='d-p'>Price: {element.price}Rs/-</p>
              </div>
              <div className='right-d'>
                <p className='d-p'>For: {element.roomtype}</p>
              </div>

              <p className='d-p' style={{ color: "green" }}>Location: {element.area}, {element.city}, {element.pincode}, {element.state}, {element.country}</p>
            </div>;


            <hr></hr>
          })
          : <h1>You have not Registered Rooms yet!</h1> : <Loader />}
      </div>


      <div className='con-dt' style={{ backgroundColor: "darkgreen" }}>
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
export default Mypost;
