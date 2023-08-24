import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsInstagram } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { Link } from 'react-router-dom';
import { RiLinkedinLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Loader from './loader';
function Roomhistory() {

    const [room, setRoom] = useState([]);
    const history = useNavigate();
    const [loading, setLoading] = useState(false)
    const getdata = async () => {
        try {
            const d = await axios.get("https://roomrapidbackend.onrender.com/orderbooked",{ withCredentials: true });
            setRoom(d.data);
            console.log(d.data);
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
        <div >

            <div className='con-dt' style={{backgroundColor:"darkgreen"}}>
                <h1 className='d-heading'>This is a my rooms history</h1>
            </div>
            <div className='con-dt'>
                {loading ? Array.isArray(room) ? room.map((d) => (
                    <div className='con-dtd' >
                        <img
                            src={d.img}
                            className='img-d img-m'
                        />
                        <h1 className='d-h1'>Information:</h1>
                        <div className='left-d'>
                            <p className='d-p'>From: {d.fromdate}</p>
                            <p className='d-p'>To: {d.todate}</p>
                        </div>
                        <div className='right-d'>
                            <p className='d-p'>Total Days: {d.totaldays}</p>
                            <p className='d-p'>Price: {d.totalprice}Rs/-</p>

                        </div>

                        <p className='d-p' style={{color:"green"}}>Location: {d.area}, {d.city}, {d.pincode}, {d.state}, {d.country}</p>


                    </div>
                )) : null : <Loader />}
            </div>
            <div className='con-dt' style={{backgroundColor:"darkgreen"}}>
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
                <h5  className='d-heading' style={{textAlign:"center"}}>All rights reserved</h5>
            </div>
        </div>
    )
}
export default Roomhistory;
