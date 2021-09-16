import React, { Component } from "react";
import Service from "../../../config/Api.Config";
import Confirmation from "../../ModalApp";

import ProductDetailItems from "./ProductDetailItems";
class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Product: [],
      Panier: [],
      indexselected: "",
      img: "",
      Ajouter: false,
      calc: true,
      question: "Article Ajouter Au Panier :)",
    };
  }

  componentDidMount() {
    let userId;
    const params = new URL(window.location.href);

    userId = params.searchParams.get("id");

    Service.get(`Panier.json`).then((res) => {
      console.log(res.data);

      const panier = [];

      for (let key in res.data) {
        panier.unshift({
          ...res.data[key],

          id: key,
        });
      }

      this.setState({ Panier: panier });
    });

    Service.get(`Product.json`).then((res) => {
      console.log(res.data);

      const product = [];

      for (let key in res.data) {
        product.unshift({
          ...res.data[key],

          id: key,
        });
      }

      this.setState({ Product: product });
      this.setState({ indexselected: userId });

      console.log(this.state.indexselected);
    });
  }

  AddPanier = (title) => {
    this.setState({ Ajouter: true });
    this.setState({ calc: true });

    const Product = {
      ...this.state.Product.find((P) => P.title === title),
    };
    const Panier = [...this.state.Panier, Product];

    Service.put("Panier.json", Panier)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  changeShow = () => {
    this.state.show = !this.state.show;

    console.log(this.state.show);
  };

  Valider2 = () => {
    this.setState({ Ajouter: false });
    this.setState({ calc: false });
  };

  render() {
    return (
      <div className="ProductDetail">
        {this.state.Ajouter ? (
          <Confirmation
            question={this.state.question}
            calc={this.state.calc}
            Valider2={() => this.Valider2()}
          />
        ) : (
          this.state.Product.filter(
            (e) => e.id === this.state.indexselected
          ).map((p) => (
            <ProductDetailItems
              key={p.id}
              title={p.title}
              img={p.img}
              img2={p.img2}
              description={p.description}
              prix={p.prix}
              promo={p.promo}
              newprice={p.newprice}
              pourcentage={p.pourcentage}
              AddPanier={() => this.AddPanier(p.title)}
            />
          ))
        )}

        <button
          onClick={() => {
            this.props.history.go(-1);
          }}
          className={`btn btn-outline-info`}
        >
          <i class="far fa-hand-point-left"></i>
        </button>
      </div>
    );
  }
}

export default ProductDetail;
