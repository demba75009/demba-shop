import React, { Component } from "react";
import ProductItem from "./ProductItem/ProductItem";
import Panier from "../../Panier/PanierItem/PanierItem"
import Service from "../../../config/Api.Config";
import axios from "axios";
import ProductPromotion from "../ProductPromotion/ProductPromotion";
import Style from "./ProductList.module.css";


class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Product: [],
      Panier: []
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
      })
      .catch((err) => console.log(err));

      
  }

  AddPanier = (title) => {
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
      })
      .catch((err) => console.log(err));
  };




  


  Detail = (id) =>{

    this.props.history.push(`/Product/ProductDetail/?id=${id}`);

  }




  DeletePanier = (title) => {
    const index = this.state.Panier.findIndex((p) => p.title === title);

    this.setState(
      (state) => ({
        Panier: this.state.Panier.filter((_, i) => i !== index),
      }),

  
    );
  
    Service.put("Panier.json", this.state.Panier)
    .then((res) => {
      
      console.log(res)
      console.log(res.data)
    })
    .catch((err) => console.log(err))
  };

   



  render() {
    return (
      <div className="ProductList">
        
        <div className = {`Promotion  ${Style.promo} `}>

          <h2 className = "text-center text-danger"> Promotion:</h2>
<ProductPromotion />
</div>
<hr></hr>


<div className = {`w-25 float-right ${Style.myElement}`}>
  <h3 > Votre Panier :</h3>
        {this.state.Panier.map((P) => (
          <Panier
          className = "float-right"
          key={P.id}
          title={P.title}
          img={P.img}
          prix={P.prix}
          
          DeletePanier={this.DeletePanier}
          />
        ))}

</div>







<div className = {` ${Style.product1} w-75 ListProduct`}> 

       <h3 > Liste des Product:</h3>



        {this.state.Product.map((P) => (




          <ProductItem
            key={P.id}
            title={P.title}
            img={P.img}
            prix={P.prix}
            AddPanier={ () => this.AddPanier(P.title)}
            Detail={ () => this.Detail(P.id)}



            />
        ))}

</div>

      </div>
    );
  }
}

export default ProductList;
