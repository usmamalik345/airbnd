import React from "react";

export default function Card(props) {
  let badgeText 
  if (props.openSpots === 0 ) {
    badgeText = "SOLD OUT"
  } else if (props.location === "ONLINE" ){
    badgeText = "ONLINE"
  }
  return (
    <div className="Card">
          {badgeText && <div className="card-badge"> {badgeText} </div>}

      <img src={`../images/${props.img}`} alt="as" className="Card-img" />
      <div className="Card-stats">
        <img src={`../images/${props.imgS}`} alt="asas" className="Card-star" />
        <span>{props.Spn}</span>
        <span>{props.review}</span>
        <span> {props.rcountry} </span>
        <p> {props.name} </p>
        <p>

          <span> <b> From $ {props.price} </b>  person</span>
        </p>
      </div>
    </div>
  );
}
