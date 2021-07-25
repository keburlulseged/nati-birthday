import React from "react";
import "./Card.css";

function Card({title, description}) {
  return (
    <div className="card">
      {/* <img src={} /> */}
      <div className="card-body">
        <h2>{title}</h2>
        <p>
          {description}
        </p>

      </div>
    </div>
  );
  // return (
  //   <div className="card">
  //     <div className="card-title">
  //       <h1>They are very Confident</h1>
  //     </div>
  //     <div className="card-description">
  //       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aliquam, id corrupti alias quam, suscipit, dicta similique omnis harum optio ipsum in quia delectus sunt saepe deleniti autem dolor ducimus?</p>
  //     </div>
  //   </div>
  // )
}

export default Card;
