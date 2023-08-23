import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { RiLinkedinLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import Cookies from 'js-cookie';
import Loader from './loader';
function Admin() {
    //orderbookedadmin
    const [out, setOut] = useState([]);
    const [nm, setNm] = useState([]);
    const [room, setRoom] = useState([]);
    const [opt, setOpt] = useState("");
    const [loading, setLoading] = useState(false)

    const history = useNavigate()
    const getdata = async (e) => {
        try {
            const res = await axios.get("https://hotelbackend-etjh.onrender.com/adminhome", { withCredentials: true });
            setOut(res.data)
            const r = await axios.get("https://hotelbackend-etjh.onrender.com/adminhomename", { withCredentials: true });
            setNm(r.data)
            const k = await axios.get("https://hotelbackend-etjh.onrender.com/ownerreg", { withCredentials: true });
            setOpt(k.data);
            const t = await axios.get("https://hotelbackend-etjh.onrender.com/orderbookedadmin", { withCredentials: true });
            setRoom(t.data)
            console.log(k.data.admin)
            setLoading(true)
            if (!Cookies.get("jsonwentokenn")) {
                return history("/login")
            }
            if (k.data.admin === false) {
                return history("/login")
            }
            if (k.data.admin === true) {
                return history("/adminsecion")
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
                <h1 className='d-heading'>Rooms owner details</h1>
            </div>
            <div className='con-dt' >



                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope="col">RoomId</th>


                        </tr>
                    </thead>
                    <tbody>
                        {loading ? Array.isArray(out) ? out.map((d) => (
                            <tr>
                                <td>{d._id}</td>


                            </tr>
                        )) : null : <Loader />}
                    </tbody>
                </table>

                <table className='table table-striped'>
                    <thead>
                        <tr>

                            <th scope="col">Email</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? Array.isArray(out) ? out.map((d) => (
                            <tr>

                                {nm.filter(function (student) {
                                    return student._id === d.key;
                                }).map(function (student) {
                                    return <>
                                        <td>{student.email}</td>
                                    </>;
                                })}
                                <td>{d.price}</td>
                            </tr>
                        )) : null : <Loader />}
                    </tbody>
                </table>

                <table className='table table-striped'>
                    <thead>
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>

                            <th scope="col">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? Array.isArray(out) ? out.map((d) => (
                            <tr>

                                {nm.filter(function (student) {
                                    return student._id === d.key;
                                }).map(function (student) {
                                    return <>
                                        <td>{student.name}</td>

                                        <td>{student.phone}</td>
                                    </>;
                                })}

                                <td>{d.area}, {d.city}, {d.pincode}, {d.state}, {d.country}</td>
                            </tr>


                        )) : null : <Loader />}
                    </tbody>
                </table>
            </div>

            <div className='con-dt' style={{ backgroundColor: "darkgreen" }}>
                <h1 className='d-heading'>All rigistered user details</h1>
            </div>
            <div className='con-dt' >


                <table className='table table-striped'>
                    <thead>
                        <tr>


                            <th scope="col">Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(nm) ? nm.map((d) => (
                            <tr>


                                <td>{d.email}</td>


                            </tr>
                        )) : null}
                    </tbody>

                </table>


                <table className='table table-striped'>
                    <thead>
                        <tr>

                            <th scope="col">Name</th>

                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(nm) ? nm.map((d) => (
                            <tr>

                                <td>{d.name}</td>

                                <td>{d.phone}</td>

                            </tr>
                        )) : null}
                    </tbody>

                </table>
            </div>
            <h1></h1>
            <div className='con-dt' style={{ backgroundColor: "darkgreen" }}>
                <h1 className='d-heading'>Total room booked details</h1>
            </div>

            <div className='con-dt'>


                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope="col">RoomId</th>

                            <th scope="col">Total Days</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(room) ? room.map((d) => (

                            <tr>
                                <td>{d.roomid}</td>

                                <td>{d.totaldays}</td>
                            </tr>


                        )) : null}
                    </tbody>
                </table>





                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope="col">Email</th>


                            <th scope="col">Total Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(room) ? room.map((d) => (

                            <tr>

                                {nm.filter(function (student) {
                                    return student._id === d.key;
                                }).map(function (student) {
                                    return <>
                                        <td>{student.email}</td>
                                    </>;
                                })}


                                <td>{d.totalprice}</td>

                            </tr>


                        )) : null}
                    </tbody>
                </table>


                <table className='table table-striped'>
                    <thead>
                        <tr>

                            <th scope="col">From</th>
                            <th scope="col">To</th>


                            <th scope="col">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(room) ? room.map((d) => (

                            <tr>


                                <td>{d.fromdate}</td>
                                <td>{d.todate}</td>


                                <td>{d.area}, {d.city}, {d.pincode}, {d.state}, {d.country}</td>
                            </tr>


                        )) : null}
                    </tbody>
                </table>
            </div>
            <div className='con-dt' style={{ backgroundColor: "darkgreen" }}>
                <div className='foot-h'>
                    <Link to="/" className='link-f'  >Home</Link>
                    <Link to="/mypost" className='link-f' >Mypost</Link>
                    <Link to="/roomhistory" className='link-f' >Myrooms</Link>
                    <Link to="/ownerpost" className='link-f'  >Onwer signup</Link>

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
export default Admin;