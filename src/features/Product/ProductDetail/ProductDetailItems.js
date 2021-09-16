import React, { Component } from "react";
import Style from "./ProductDetail.module.css";

export default class ProductDetailsItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  changeShow1 = () => {
    this.setState({ show: true });

    console.log(this.state.show);
  };

  changeShow = () => {
    this.setState({ show: false });

    console.log(this.state.show);
  };

  render() {
    return (
      <div className={`cointainer ${Style.product}`}>
        <h3 className="text-center"> {this.props.title}</h3>
        <hr className="bg-danger w-50"></hr>
        <div className={` ${Style.box}  `}>
          <img
            onClick={() => this.changeShow1()}
            className={Style.imgD}
            src={this.props.img}
          />

          <img
            onClick={() => this.changeShow()}
            className={Style.img2}
            src={this.props.img2}
          />
        </div>
        {this.state.show ? (
          <img className={Style.Ecran} src={this.props.img} />
        ) : (
          <>
            <img className={` show ${Style.Ecran} `} src={this.props.img2} />
          </>
        )}
        <div className="text-center prix">
          <h3
            className={`${
              this.props.promo === "true" ? Style.prixPromo : Style.prix1
            }`}
          >
            {" "}
            {this.props.prix} €{" "}
          </h3>
          {this.props.promo === "true" ? (
            <>
              <strong className="text-success text-right">
                -{this.props.pourcentage}%
              </strong>
              <h3 className={`text-danger`}> {this.props.newprice} €</h3>
            </>
          ) : (
            ""
          )}
          <button
            className="btn-outline-success "
            onClick={() => this.props.AddPanier()}
          >
            Add
            <i class="fas fa-cart-plus"></i>
          </button>
        </div>
        <h5 className={`text-center ${Style.describe}`}>Description:</h5>
        <h6> {this.props.description}</h6>{" "}
      </div>
    );
  }
}
