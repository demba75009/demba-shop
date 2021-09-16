import React, { Component } from "react";
import Style from "./ProductItem.module.css";
import * as axios from "axios";

const ProductItem = (props) => {
  return (
    <div className={`${Style.Box} col-xs-1 col-sm-3 col-md-2  col-lg-2 card  `}>
      <div className="flex-fill d-flex flex-column p-3">
        <h6> {props.title.slice(0, 15)}...</h6>

        <img src={props.img} />

        <p
          className={`${
            props.promo === "true" ? Style.prixPromo : Style.prix1
          }`}
        >
          {" "}
          {props.prix} €{" "}
        </p>

        {props.promo === "true" ? (
          <>
            <strong className="text-success text-right">
              -{props.pourcentage}%
            </strong>
            <p className={`text-danger`}> {props.newprice} €</p>
          </>
        ) : (
          ""
        )}
      </div>
      <button
        className="btn-outline-warning w-50"
        onClick={() => props.Detail()}
      >
        <i class="fas fa-eye"></i>
      </button>

      <button
        className="btn-outline-success add  w-50"
        onClick={() => props.AddPanier()}
      >
        <i class="fas fa-cart-plus"></i>{" "}
      </button>
    </div>
  );
};

export default ProductItem;
