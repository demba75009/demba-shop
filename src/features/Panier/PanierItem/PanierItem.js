import React, { Component } from "react";
import Style from "./PanierItem.module.css";

const Panier = (props) => {
  return (
  
        <div
          className={`${Style.item} w-50  bg-light card  `}
        >
          <div className="flex-fill d-flex flex-column p-3">
            <h6> {props.title}</h6>

            <img src={props.img} />

            <p className="text-danger"> {props.prix} €</p>
          </div>


          
          <button
            className="btn-outline-danger"
            onClick={() => props.DeletePanier()}
          >
            Delete
          </button>
        </div>
    
  );
};

export default Panier;
