import React, { Component } from "react";
import Style from "./ProductDetail.module.css"
export default class ProductDetailsItems extends Component {
  render() {
    return (
      <div>

<img className = {Style.Ecran}src={this.props.img} />

          <div className={ ` ${Style.box} bg-light card`}
>
            <h6> {this.props.title}</h6>

            <img className = {Style.imgD} src={this.props.img} />


            <img src={this.props.img2} />
 
            <h6> {this.props.description}</h6>

          
          
          </div>

         
          <p className="text-danger"> Prix: {this.props.prix} €</p>



          </div>
    );
  }
}
