import React, { Component } from "react";
import Style from "./PromotionItem.module.css";
import * as axios from "axios";

const PromotionItem = (props) => {
  return (

        <div
          className={`${Style.Box} col-xs-1 col-sm-3 col-md-2  col-lg-2 bg-warning card  `}
        >
          <div className="flex-fill d-flex flex-column p-3">
            <h6> {props.title}</h6>

            <img src={props.img} />

            <p className={`${Style.prix}`}> {props.prix} €  </p>
            <strong className= "text-danger text-right">-{props.pourcentage}%</strong>
            <p className={`text-success `}> {props.newprice} €</p> 

         
          </div>
          <button
            className="btn-outline-success"
            onClick={() => props.AddPanier()}
          >
Add          </button>
        </div>
    
  );
};

export default PromotionItem;
