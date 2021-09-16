import React, { Component } from "react";
import ProductItem from "./ProductItem/ProductItem";
import Panier from "../../Panier/PanierItem/PanierItem";
import Service from "../../../config/Api.Config";
import axios from "axios";
import ProductPromotion from "../ProductPromotion/ProductPromotion";
import Style from "./ProductList.module.css";
import Style2 from "../modal.module.css";
import Confirmation from "../../ModalApp";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Product: [],
      Panier: [],
      Ajouter: false,
      calc: true,
      question: "Article Ajouter Au Panier :)",
      total: 0,
    };
  }

  componentDidMount() {
    Service.get("Product.json")
      .then((response) => {
        console.log(response.data);
        const FetchData = [];

        for (let key in response.data) {
          FetchData.unshift({
            ...response.data[key],

            id: key,
          });
        }

        this.setState({ Product: FetchData });
      })
      .catch((err) => console.log(err));

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
    this.setState({ Ajouter: false });
  };

  Valider2 = () => {
    this.annuler();
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

  AddPanier = (title) => {
    this.setState({ Ajouter: true });
    this.setState({ calc: true });
    const product = {
      ...this.state.Product.find((P) => P.title === title),
    };
    this.setState(
      (state) => ({
        Panier: [...this.state.Panier, product],
      }),
      this.savePanier
    );
  };

  savePanier = () => {
    Service.put("Panier.json", this.state.Panier)
      .then((res) => {
        console.log(res.data);
        this.componentDidMount();
      })
      .catch((err) => console.log(err));
  };

  Detail = (id) => {
    this.props.history.push(`/Product/ProductDetail/?id=${id}`);
  };

  DeletePanier = (title) => {
    const index = this.state.Panier.findIndex((p) => p.title === title);

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
      <div className="ProductList ">
        <div className={`Promotion  ${Style.promo} `}>
          <br></br>
          <h2 className={`text-center text-white bg-info ${Style.title}`}>
            {" "}
            Promotion :
          </h2>
          <ProductPromotion />
        </div>
        <hr></hr>

        {this.state.Ajouter ? (
          <Confirmation
            question={this.state.question}
            calc={this.state.calc}
            Valider2={() => this.Valider2()}
          />
        ) : (
          <>
            <div className={`w-25 float-right ${Style.myElement}`}>
              <button
                className="btn btn-outline-warning"
                onClick={() => this.props.history.push("Panier")}
              >
                <i class="fas fa-shopping-cart"></i>:
              </button>
              <h4>
                <strong className={Style.nbPanier}>
                  {this.state.Panier.length}
                </strong>
              </h4>
              <br></br>
              <h4 className="text-danger">
                total : {this.state.total.toFixed(2)} €
              </h4>

              {this.state.Panier.map((P) => (
                <Panier
                  className={`float-right ${Style2.calc}`}
                  key={P.id}
                  title={P.title}
                  img={P.img}
                  prix={P.prix}
                  promo={P.promo}
                  newprice={P.newprice}
                  pourcentage={P.pourcentage}
                  ChangeState={() => {
                    this.ChangeState(P.title);
                  }}
                />
              ))}
            </div>

            <div className={` ${Style.product1} w-75 ListProduct`}>
              <h3> Liste des Product:</h3>

              {this.state.Product.map((P) => (
                <ProductItem
                  key={P.id}
                  title={P.title}
                  img={P.img}
                  prix={P.prix}
                  promo={P.promo}
                  newprice={P.newprice}
                  pourcentage={P.pourcentage}
                  AddPanier={() => this.AddPanier(P.title)}
                  Detail={() => this.Detail(P.id)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ProductList;
