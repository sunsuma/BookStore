// import React from "react";
import PropTypes from "prop-types";

function Card({ item }) {
  return (
    <div className="mt-4 flex justify-center items-center p-3">
      <div className="card bg-base-100 w-92 shadow-xl md:hover:scale-105 duration-200">
        <figure>
          <img src={item.img} alt={item.category}/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.description}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">₹{item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// PropTypes for item
Card.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default Card;
