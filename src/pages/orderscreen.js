import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { Link } from 'react-router-dom';
import { RiLinkedinLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Loader from './loader'
import moment from 'moment';
function Orderscreen({ match }) {
    const [t, setT] = useState([]);
    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const { fromdate } = useParams();
    const { todate } = useParams();
    const history = useNavigate();
    const [loading, setLoading] = useState(false)




    const getdata = async (e) => {
        try {
            const res = await axios.get(`https://hotelbackend-etjh.onrender.com/home/${id}`, { withCredentials: true });
            setT(res.data)
            setOrder(res.data)
            setLoading(true)
            if (!Cookies.get("jsonwentokenn")) {
                return history("/login")
            }
        } catch (error) {
            console.log(error)
        }

    }


    const to = moment(todate, 'MM-DD-YYYY')
    const from = moment(fromdate, 'MM-DD-YYYY')
    const totaldays = moment.duration(to.diff(from)).asDays();
    const totalprice = totaldays * t.price;
    useEffect(() => {
        getdata();
    }, [])

    const submitorder = async () => {
        const bookingdetails = {
            fromdate,
            todate,
            order,
            totaldays,
            totalprice

        }
        axios.post("https://hotelbackend-etjh.onrender.com/orderbooked", bookingdetails)
            .then((res) => alert(res.data.message));
    }
    return (
        <div>
            <div className='con-dt'  style={{backgroundColor:"darkgreen"}}> <h1 className='d-heading'>Welcome!</h1></div>



            {loading ? Array.isArray(t) ?
                null :
                <div className='con-dt'>
                    <div className='con-dtd'>
                        <img
                            src={require(`../imagescontainer/${t.img}`)}
                            className='img-d'
                        />
                        <h1 className='d-h1'>Information:</h1>
                        <div className='left-d'>
                            <p className='d-p' style={{color:"green",fontWeight:"bold"}}>Fromdate: {fromdate} </p>
                            <p className='d-p'>Wifi: {t.wifi}</p>
                            <p className='d-p'>Total days: {totaldays}</p>
                            <p className='d-p'>Price: {t.price * totaldays}Rs/-</p>
                
                        </div>
                        <div className='right-d'>
                        <p className='d-p' style={{color:"green",fontWeight:"bold"}}>Todate: {todate} </p>
                            
                            <p className='d-p'>For: {t.roomtype}</p>
                            <p className='d-p'>Parking: {t.parking}</p>
                            <p className='d-p'>Location: {t.area}, {t.city}</p>

                        </div>
                        <div className='btndiv'><button type='submit' className='btn-sgn' onClick={submitorder}>Pay Now</button></div>
                       
                    </div>

                </div> : <Loader />}
                <div className='con-dt'  style={{backgroundColor:"darkgreen"}}>
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
export default Orderscreen;