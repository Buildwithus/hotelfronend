import { Link } from "react-router-dom";
import { MdLocationOn } from 'react-icons/md';
const Homes = ({ d, fromdate, todate }) => {
    return (
        <div className='carth' >
            <img
                src={require(`../imagescontainer/${d.img}`)}
                className='img-h'
            />



            <div className="content-h">
              
                <h5 className="h5">For: {d.roomtype}</h5>
                <p className="lp" > <MdLocationOn className="loci"/> {d.area}, {d.city}, {d.state}</p>
                <h5 className="h5">Pincode- {d.pincode}</h5>

                <div className="btn-c">
                    <div className="viewbtn"> <h6 className="h6"><Link to={`ownername/${d._id}`} style={{ textDecoration: "none", margin:"auto",color:"white" }} > View Details</Link></h6>  </div>

                    {(fromdate && todate) && (
                        <div className="bookbtn"> <h6 className="h6"><Link to={`orderscreen/${d._id}/${fromdate}/${todate}`} style={{ textDecoration: "none", color:"white" ,textAlign:"center"}}>Book Room</Link></h6>  </div>
                    )}
                  <div className="price-h">  <h6 style={{fontWeight:'bold'}} className="h6">Price: {d.price}Rs/-</h6></div>
                </div>

            </div>



        </div>
    )
}
export default Homes;