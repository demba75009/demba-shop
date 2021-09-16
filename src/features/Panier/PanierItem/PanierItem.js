import React, { Component } from "react";
import Style from "./PanierItem.module.css";

const Panier = (props) => {
  return (
    <div
      className={`${Style.item} animate__animated animate__backInRight col-sm-6 bg-light card  `}
    >
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
        className="btn-outline-danger"
        onClick={() => props.ChangeState()}
      >
        <i class="fas fa-trash"></i>{" "}
      </button>
    </div>
  );
};

export default Panier;
