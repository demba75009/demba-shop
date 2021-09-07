import React, { Component } from "react";
import Service from "../../../config/Api.Config";
import Style from "./ProductPromotion.module.css";
import PromotionItem from "./PromotionItem/PromotionItem";

import * as axios from "axios";
class ProductPromotion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ProductPromo: [],
      Panier: [],
      pr:[],
      promo: 0,
      place: 3,
    };
  }

  componentDidMount() {
    axios
      .get("https://text-bcfd3-default-rtdb.firebaseio.com/Product.json")
      .then((response) => {
        let promo;
        console.log(response.data);
        const FetchData = [];

        for (let key in response.data) {
          FetchData.unshift({
            ...response.data[key],

            id: key,
          });
        }

        this.setState({
          ProductPromo: FetchData,
        });

        console.log(this.state.ProductPromo);
      });

    axios
      .get("https://text-bcfd3-default-rtdb.firebaseio.com/Panier.json")
      .then((response) => {
        let panier;
        console.log(response.data);
        const FetchPanier = [];

        for (let key in response.data) {
          FetchPanier.unshift({
            ...response.data[key],

            id: key,
          });
        }

        this.setState({
          Panier: FetchPanier,
        });
      });
  }

  

  prevPromo = (place) => {
    this.setState({ place: --this.state.place });

    console.log(this.state.place);
  };

  nextPromo = (place) => {
    this.setState({ place: ++this.state.place });

    console.log(this.state.place);
  };

  AddPanier = (title) => {
    const product = this.state.ProductPromo.find((P) => P.title === title);

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
        {
          console.log(res.data);
          alert("Produit ajouter au panier");
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="ProductPromotion">
        <div className="d-flex justify-content-center ">
          {this.state.pr = this.state.ProductPromo.filter(
            (p) => p.promo === "true" && p.place === this.state.place
          ).map((P) => (
            <PromotionItem
              key={P.id}
              title={P.title}
              img={P.img}
              prix={P.prix}
              place={P.place}
              newprice={P.newprice}
              pourcentage={P.pourcentage}
              AddPanier={() => this.AddPanier(P.title)}
            />

         
            )
            
            
            )

          
          }
        </div>

        <button
          className={` ${
            this.state.place > 1
              ? `btn btn-primary ${Style.prev}`
              : `${Style.prevHide}`
          }`}
          onClick={this.prevPromo}
        >
          Previous
        </button>

        <button
          className={`${
    
            
            this.state.place < this.state.ProductPromo.length - 7
              ? `float-right btn btn-success ${Style.next}`
              : `${Style.prevHide}`
          }`}
          onClick={this.nextPromo}
        >
          Next
        </button>
      </div>
    );
  }
}

export default ProductPromotion;
