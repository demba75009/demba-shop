import React, { Component } from "react";
import Service from "../../../config/Api.Config";

import ProductDetailItems from "./ProductDetailItems";
class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Product: [],
      indexselected: "",
    };
  }

  componentDidMount() {
    let userId;
    const params = new URL(window.location.href);

    userId = params.searchParams.get("id");

    Service.get(`Product.json`).then((res) => {
      console.log(res.data);

      const product = [];

      for (let key in res.data) {
        product.unshift({
          ...res.data[key],

          id: key,
        });
      }

      this.setState({ Product: product});
      this.setState({ indexselected: userId});

    console.log(this.state.indexselected)


    });

  }

  render() {
    return (
      <div className="ProductDetail">

{  this.state.Product.filter(e =>e.id === this.state.indexselected).map((p) => (

        <ProductDetailItems

        key = {p.id}
        title = {p.title}
        img = {p.img}    
        img2 = {p.img2}    

        description = {p.description}

        prix = {p.prix}
        />
 
)

)
      }
      </div>
    );
  }
}

export default ProductDetail;
