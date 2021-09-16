import axios from "axios";
import React, { Component } from "react";
import Service from "../../config/Api.Config";
import Panier from "./PanierItem/PanierItem";
import ModalApp from "../ModalApp";

import L from "./PanierList.module.css";

class PanierList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Panier: [],
      Product: [],
      PanierDelete: false,
      calc: true,
      question: "Etes vous sur de vouloir supprimer l'article du Panier ?",
      total: 0,
    };
  }

  componentDidMount() {
    Service.get("Panier.json")
      .then((response) => {
        console.log(response.data);
        const FetchPanier = [];

        for (let key in response.data) {
          FetchPanier.unshift({
            ...response.data[key],

            id: key,
          });
        }

        this.setState({ Panier: FetchPanier });

        const tt = FetchPanier.reduce((acc, p) => (acc += p.prix), 0);
        this.setState({ total: tt });
      })
      .catch((err) => console.log(err));
  }

  annuler = () => {
    this.setState({ calc: false });
    this.setState({ PanierDelete: false });
  };

  Valider = (title) => {
    this.DeletePanier(title);
    this.annuler();
  };

  ChangeState = (title) => {
    // this.setState({ PanierDelete: true });
    // this.setState({ calc: true });
    const confirmation = window.confirm(
      "Etes vous sur de vouloir supprimer l'article ?"
    );

    if (confirmation) this.DeletePanier(title);
  };

  DeletePanier = (title) => {
    const index = this.state.Panier.findIndex((p) => p.title === title);
    console.log(index);

    this.setState((state) => ({
      Panier: this.state.Panier.filter((_, i) => i !== index),
    }));

    this.SuppPanier();
  };

  SuppPanier = () => {
    Service.put("Panier.json", this.state.Panier)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        alert("Produit Supprimer :(");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className={` container ${L.PanierList}`}>
        <h2 className="animate__animated animate__heartBeat text-center text-success">
          Votre Panier:
        </h2>
        <hr className="w-50"></hr>

        {this.state.PanierDelete ? (
          this.state.Panier.map((P) => (
            <ModalApp
              question={this.state.question}
              calc={this.state.calc}
              annuler={this.annuler}
              Valider={() => {
                this.Valider(P.title);
              }}
            />
          ))
        ) : (
          <>
            {this.state.Panier.map((P) => (
              <Panier
                key={P.id}
                title={P.title}
                img={P.img}
                prix={P.prix}
                promo={P.promo}
                newprice={P.newprice}
                pourcentage={P.pourcentage}
                ChangeState={() => this.ChangeState(P.title)}
              />
            ))}

            <h4 className="float-right text-danger">
              Total : {this.state.total.toFixed(2)} €
            </h4>
          </>
        )}
      </div>
    );
  }
}

export default PanierList;
