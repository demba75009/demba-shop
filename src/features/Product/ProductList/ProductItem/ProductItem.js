import React, { Component } from "react";
import Style from "./ProductItem.module.css";
import * as axios from "axios";

const ProductItem = (props) => {
  return (
  
        <div
          className={`${Style.Box}  bg-light card`}
        >
          <div className="flex-fill d-flex flex-column p-3">
            <h6> {props.title}</h6>

            <img src={props.img} />

            <p className="text-danger"> {props.prix} €</p>
          </div>
          <button
            className="btn-outline-success"
            onClick={() => props.AddPanier()}
          >
            Add
          </button>

      <button 
      
      className="btn-outline-warning"
      onClick={() => props.Detail()}
      >
O
      </button>


        </div>
  
  );
};

export default ProductItem;
