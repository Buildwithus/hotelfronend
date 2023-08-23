import axios from 'axios';
import './design.css';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { SiTwitter } from "react-icons/si";
import { RiLinkedinLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Loader from './loader';
import Cookies from 'js-cookie';
function Postdetail() {
    const { id } = useParams();
    const [out, setOut] = useState([]);
    const [nm, setNm] = useState([]);
    const [loading, setLoading] = useState(false)
    const history = useNavigate();
    const getdata = async (e) => {
        try {
            const res = await axios.get(`https://hotelbackend-etjh.onrender.com/home/${id}`, { withCredentials: true });
            setOut(res.data)
            console.log(res.data)
            const r = await axios.get("https://hotelbackend-etjh.onrender.com/homename", { withCredentials: true });
            setNm(r.data)
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
    const baseurl = "../imagescontainer/";
    return (
        <div>
            <div className='con-dt' style={{backgroundColor:"darkgreen"}}>
                <h1 className='d-heading'>This is view section page</h1>
            </div>
            <div className='con-dt'>

                {loading ? Array.isArray(out) ?
                    null :
                    <div className='con-dtd'>
                        <div id="carouselExampleIndicators" class=" con carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img className='img-d' src={require(`../imagescontainer/${out.img}`)} class="d-block img-d w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img className='img-d' src={require(`../imagescontainer/${out.img1}`)} class="d-block img-d w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img className='img-d' src={require(`../imagescontainer/${out.img2}`)} class="d-block img-d w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>


                        <h1 className='d-h1'>Information:</h1>
                        
                        <div className='left-d'>
                            <p className='d-p'>Price: {out.price}Rs/-</p>
                            <p className='d-p'>Roomsize: {out.roomsize} Sq. ft.</p>
                            <p className='d-p'>Maxgues: {out.maxguest}</p>
                        </div>
                        <div className='right-d'>
                            <p className='d-p'>For: {out.roomtype}</p>
                            <p className='d-p'>Wifi: {out.wifi}</p>
                            <p className='d-p'>Parking: {out.parking}</p>
                        </div>
                        <p className='d-p' style={{color:"green"}}>Location: {out.area}, {out.city}, {out.pincode}, {out.state}, {out.country}</p>


                        <h1 className='d-h1'>Room's Owner:</h1>
                        {nm.filter(function (student) {
                            return student._id === out.key;
                        }).map(function (student) {
                            return <div>
                                <p className='d-p'>Name: {student.name}</p>
                                <p className='d-p'>Email: {student.email}</p>
                                <p className='d-p'>Phone: {student.phone}</p>
                            </div>;
                        })}
                        <img
                            src={require(`../imagescontainer/${out.img}`)}
                            className='img-d img-m'
                        />
                        <img
                            src={require(`../imagescontainer/${out.img1}`)}
                            className='img-d img-m'
                        />
                        <img
                            src={require(`../imagescontainer/${out.img2}`)}
                            className='img-d img-m'
                        />
                       

                    </div>
                    : <Loader />}


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
export default Postdetail;