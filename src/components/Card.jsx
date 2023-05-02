import React from "react";
import '../styles/Card.css'

const Card = (props) => {

  const {data} = props

  console.log(data.Title);
  return (
    <div className="card">
      {data.map(item => (
        <div key={item.imdbID} className="item">
          <img className="poster" src={item.Poster} alt="" />
          {/* <h2 className="title">{item.Title}</h2>
          <h4 className="year">{item.Year}</h4> */}
        </div>
      ))}
    </div>
  );
};

export default Card;
