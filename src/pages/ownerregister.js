import axios from 'axios';
import { useEffect, useState } from 'react'
import { BsInstagram } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { Link } from 'react-router-dom';
import { RiLinkedinLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

function Owner() {
    const [opt, setOpt] = useState("");
    const history = useNavigate();
    const [inp, setInp] = useState({
        country: '',
        state: '',
        city: '',
        area: '',
        pincode: '',
        price: '',
        bedrooms: '',
        maxguest: '',
        roomtype: '',
        wifi: '',
        parking: '',
        roomsize: '',
        profilpic: '',
        profilpic1: '',
        profilpic2: ''
    });

    const changehandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInp({ ...inp, [name]: value })

    }

    const imageupload = (e) => {
        setInp({ ...inp, profilpic: e.target.files[0] })
    }
    const imageupload1 = (e) => {
        setInp({ ...inp, profilpic1: e.target.files[0] })
    }
    const imageupload2 = (e) => {
        setInp({ ...inp, profilpic2: e.target.files[0] })
    }


    const submithandler = async (e) => {
        e.preventDefault();
        console.log(inp.profilpic)
        const fromdata = new FormData();

        fromdata.append('img', inp.profilpic)
        fromdata.append('img1', inp.profilpic1)
        fromdata.append('img2', inp.profilpic2)
        fromdata.append('country', inp.country)
        fromdata.append('state', inp.state)
        fromdata.append('city', inp.city)
        fromdata.append('area', inp.area)
        fromdata.append('pincode', inp.pincode)
        fromdata.append('price', inp.price)
        fromdata.append('bedrooms', inp.bedrooms)
        fromdata.append('maxguest', inp.maxguest)
        fromdata.append('roomtype', inp.roomtype)
        fromdata.append('wifi', inp.wifi)
        fromdata.append('parking', inp.parking)
        fromdata.append('roomsize', inp.roomsize)
        await axios.post("https://hotelbackend-etjh.onrender.com/ownerreg", fromdata)
            .then((res) => alert(res.data.message));

    }

    const getdata = async () => {
        try {
            const res = await axios.get("https://hotelbackend-etjh.onrender.com/ownerreg", { withCredentials: true });
            setOpt(res.data);
            console.log(res.data)
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
            <div className='con-dt' style={{backgroundColor:"darkgreen"}}>
                <h1 className='d-heading'>Welcome! {opt.name}</h1>
            </div>
            <div className='con-dt'>
                <div className='con-dtd' >


                    <form onSubmit={submithandler} method="POST" encType="multipart/form-data">
                        <div className='left-d'>
                            <input className='inp-o' type="text" name='country'  value={inp.country} placeholder='Country' onChange={changehandler} required ></input>
                            <input className='inp-o' type="text" name='state'  value={inp.state} placeholder='State' onChange={changehandler} required></input>
                            <input className='inp-o' type="text" name='city'  value={inp.city} placeholder='City' onChange={changehandler} required></input>
                            <input className='inp-o' type="text" name='area'  value={inp.area} placeholder='Area, Mohalla' onChange={changehandler} required></input>
                            <input className='inp-o' type="number" name='pincode' value={inp.pincode} placeholder='Pincode' onChange={changehandler} required></input>
                            <input className='inp-o' type="number" name='price' value={inp.price} placeholder='Price' onChange={changehandler} required ></input>
                            <input className='inp-o' type="number" name='maxguest' value={inp.maxguest} placeholder='Max Guest' onChange={changehandler} required></input>

                        </div>
                        <div className='right-d'>
                            <input className='inp-o' type="text" name='roomtype' value={inp.roomtype} placeholder='For: Faimly or Couple' onChange={changehandler} required ></input>
                            <input className='inp-o' type="text" name='wifi'  value={inp.wifi} placeholder='Wifi' onChange={changehandler} required ></input>
                            <input className='inp-o' type="text" name='parking' value={inp.parking} placeholder='Parking' onChange={changehandler} required></input>
                            <input className='inp-o' type="number" name='roomsize' value={inp.roomsize} placeholder='Room Area in Sq.ft.' onChange={changehandler} required ></input>
                         
                            <input className='inp-o' type='file' name='img' onChange={imageupload} required></input>
                            <input className='inp-o' type='file' name='img1' onChange={imageupload1} required ></input>
                            <input className='inp-o' type='file' name='img2' onChange={imageupload2} required></input>
                        </div>


                        <div className='btndiv'><button type='submit' className='btn-sgn'>Submit</button></div>
                       
                    </form>
                </div>
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

    );
}

export default Owner;