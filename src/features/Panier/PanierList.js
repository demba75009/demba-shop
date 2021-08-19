import axios from "axios";
import { stat } from "fs";
import React, { Component } from "react";
import Service from "../../config/Api.Config";
import Panier from "./PanierItem/PanierItem";
class PanierList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Panier: [],
      total: 0,
    };
  }

  componentDidMount() {
    Service.get("Panier.json")
      .then((response) => {
        console.log(response.data);

        const panier = [];

        for (let key of response.data) {
          panier.unshift({
            ...response.data[key],
            id: key,
          });
        }

        this.setState({ Panier: panier });
      })
      .catch((err) => console.log(err));
  }

  DeletePanier = (title) => {
    const index = this.state.Panier.findIndex((p) => p.title === title);

    this.setState(
      (state) => ({
        Panier: this.state.Panier.filter((_, i) => i !== index),
      }),

      this.PanierGone
    );
  };

  PanierGone = () => {
    Service.put("Panier.json", this.state.Panier)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="PanierList ">
        <h2 className="text-center text-success">Votre Panier:</h2>
        <hr className="w-50"></hr>
        {this.state.Panier.map((P) => (
          <Panier
            key={P.id}
            title={P.title}
            img={P.img}
            prix={P.prix}
            DeletePanier={this.DeletePanier}
          />
        ))}

        <h4 className="text-right text-danger">
          {" "}
          Total : {this.state.total.toFixed(2)} €
        </h4>
      </div>
    );
  }
}

export default PanierList;
