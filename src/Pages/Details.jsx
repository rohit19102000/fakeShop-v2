import { Link } from "react-router-dom"
import { useContext } from 'react';

import { DetailsContext } from "../components/Products/DetailsContext"; 



export default function Details() {  


  
  const { details, getDetails } = useContext(DetailsContext);

function HandleBuyNowClick() {
  getDetails(details)
}


  return (
    <>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={`${details.image}`} style={{width:"600px",height:"600px"}} alt="Album" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-white-500 text-3xl">
            {" "}
            {details.title}{" "}  
          </h1>
          <br />
          <h4 className="card-title">{details.category} </h4>
          <h1 className="text-8xl text-pink-500">{details.price }  ₹</h1>
          <h4 className="card-title">rated by : <span className="text-pink-500">{details.rating.count } buyers </span> with a average Rating of  <span className="text-pink-500"> { details.rating.rate}</span>  </h4>
          <p className="card-title">{details.description}</p>

          <div className="card bg-primary text-primary-content">
             
               <Link to="/BuyNow" className="btn btn-secondary" onClick={HandleBuyNowClick}>Buy now</Link>



          </div>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </>
  );
}
