import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <img src={props.item.imageUrl} className='card--img' alt="" />
            <div className="card--info">
                <div className="row">
                    <p className="card--location">{props.item.location}</p>
                    <a className="card--google" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.item.title}</h1>
                
                <h5 className="card--date">{props.item.startDate} - {props.item.endDate}</h5>
                
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}