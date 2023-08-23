import axios from 'axios';
import { Link } from 'react-router-dom';
import Homes from './homesecreen';
import { BsInstagram } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { RiLinkedinLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import Loader from './loader';
const { RangePicker } = DatePicker;
function Home() {
    const [ot, setOt] = useState([]);
    const [nm, setNm] = useState([]);
    const [loading, setLoading] = useState(false)
    const [fromdate, setFromdate] = useState()
    const [todate, setTodate] = useState()
    const [search, setSearch] = useState("");
    const [duplicatesroom, setDuplicatesroom] = useState([])


    const getdata = async (e) => {
        try {
            const res = await axios.get("https://hotelbackend-etjh.onrender.com/home", { withCredentials: true });
            setOt(res.data)
            setDuplicatesroom(res.data)
            const r = await axios.get("https://hotelbackend-etjh.onrender.com/homename", { withCredentials: true });
            setNm(r.data)
            setLoading(true)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getdata();
    }, [])

    function filterByDate(dates) {
        setFromdate(dates ? (dates[0]).format("MM-DD-YYYY") : null)
        setTodate(dates ? (dates[1]).format("MM-DD-YYYY") : null)
        const f = dates ? (dates[0]).format("MM-DD-YYYY") : null;
        const t = dates ? (dates[1]).format("MM-DD-YYYY") : null;
        var temprooms = [];
        for (const room of duplicatesroom) {
            var availability = true;
            if (room.currentbookings.length > 0) {
                for (const booking of room.currentbookings) {

                    if (
                        moment(f).isBetween(
                            booking.fromdate,
                            booking.todate) ||
                        moment(t).isBetween(
                            booking.fromdate,
                            booking.todate)
                    ) {

                        availability = false;

                    }
                    if (
                        f === booking.fromdate ||
                        f === booking.todate ||
                        t === booking.fromdate ||
                        t === booking.todate

                    ) {
                        availability = false;
                    }

                }
            }
            console.log(availability)
            if (availability === true || room.currentbookings.length === 0) {
                temprooms.push(room)
                console.log(room)
            }
            console.log(temprooms)


        }
        setOt(temprooms)
        console.log(ot)

    }

    return (
        <div>
            <div className="row">
                <h1 style={{ textAlign: "center", padding: "40px" }}>Welcome!</h1>

                <div className='filter_s'>
                    <div className='rng'>
                        <RangePicker style={{ boxShadow: "8px 6px 5px rgba(0,0,0,0.3" }} format='MM-DD-YYYY' onChange={filterByDate} />
                    </div>
                    <div className='srch'>
                        <form>
                            <input style={{ boxShadow: "8px 6px 5px rgba(0,0,0,0.3" }} className='ip' type='search' onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search By City"></input>
                        </form>
                    </div>
                </div>



                {loading ? Array.isArray(ot) ? ot.filter((data) => {
                    return search === '' ? data : data.city.toLowerCase().includes(search)
                }).map(d => {
                    return <div className="col-md-4 boody" >
                        <div><Homes d={d} fromdate={fromdate} todate={todate} /></div>


                        {nm.filter(function (student) {
                            return student._id === d.key;
                        }).map(function (student) {
                            return <div>

                            </div>;
                        })}
                    </div>
                }) : null : <Loader />}


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
                <h5  className='d-heading' style={{textAlign:"center"}}>All rights reserved</h5>
            </div>
        </div>
    )
}
export default Home;