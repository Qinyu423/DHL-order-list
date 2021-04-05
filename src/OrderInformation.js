
import React, { useState, useEffect } from 'react';

function OrderInformation(props) {
    return (
        <div className="order">
        <p>id: {props.id}</p>   
        <p>parcel_id: {props.parcel_id}</p>
        <p>status: {props.status}</p>
        <p>eta: {props.eta}</p>
        <p>pickup Locations: {props.pickupLocations}</p>
        <p>sender: {props.sender}</p>
        <p>user_phone: {props.user_phone}</p>
        <p>user_name: {props.user_name}</p>

        </div>
    );

  }

export default OrderInformation;