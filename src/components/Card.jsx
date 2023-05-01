import React from "react";
import '../styles/Card.css'

const Card = (props) => {

  const {data} = props

  console.log(data.Title);
  return (
    <div className="card">
      {data.map(item => (
        <div key={item.imdbID} className="item">
          <img src={item.Poster} alt="" />
          <h3 className="title">{item.Title}</h3>
          <h6 className="year">{item.Year}</h6>
        </div>
      ))}
    </div>
  );
};

export default Card;
