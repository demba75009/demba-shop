import React, { Component } from "react";
import Style from "./ProductItem.module.css";
import * as axios from "axios";

const ProductItem = (props) => {
  return (
    <div className={`${Style.Box}  bg-light card`}>
      <div className="flex-fill d-flex flex-column p-3">
        <h6> {props.title}</h6>

        <img src={props.img} />

        <p className="text-danger"> {props.prix} €</p>
      </div>

      <button
        className="btn-outline-warning w-50"
        onClick={() => props.Detail()}
      >
        <i class="fas fa-eye"></i>
      </button>

      <hr className="bg-dark"></hr>

      <button
        className="btn-outline-success  w-50"
        onClick={() => props.AddPanier()}
      >
        <i class="fas fa-cart-plus"></i>{" "}
      </button>
    </div>
  );
};

export default ProductItem;
