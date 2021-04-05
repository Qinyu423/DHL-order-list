import logo from './logo.svg';
import './App.css';
import { getParcels } from "./HttpRequest.js";
// state concept and hook concept
import React, { useState, useEffect } from 'react';
import OrderInformation from "./OrderInformation.js";

function App() {
const [data, setData] = useState([]);

useEffect(() => {
  let mounted = true;
  getParcels()
    .then(items => {
      if(mounted) {
        setData(items)
      }
    })
  return () => mounted = false;
}, [])


  return (
    <div className="orderList">
      <div className="wrapper">
     <h1>DHL order list</h1>
       {data.map(item =>
         <OrderInformation id={item.id} parcel_id={item.parcel_id} status={item.status} eta={item.eta} 
         pickupLocations={item.location_id} sender={item.sender} user_phone={item.user_phone} 
         user_name={item.user_name}></OrderInformation>)}
   </div>
    </div>
  );
}

export default App;

