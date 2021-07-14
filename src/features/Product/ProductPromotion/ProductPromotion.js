import React, { Component } from "react";
import Service from "../../../config/Api.Config";

import PromotionItem from "./PromotionItem/PromotionItem";

import * as axios from "axios";
class ProductPromotion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ProductPromo: [],

      promo : 1,
      place: 1
    };
  }

  componentDidMount() {
    axios
      .get("https://text-bcfd3-default-rtdb.firebaseio.com/Product.json")
      .then((response) => {

        let promo ;
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
  }


  prevPromo = (place) => {


    this.setState({place : this.state.place  - 1  })
    
    console.log(this.state.place)
      }


  nextPromo = (place) => {


this.setState({place : this.state.place + 1  })

console.log(this.state.place)
  }

  render() {
    return (

      <div className="ProductPromotion">
      <div className="d-flex justify-content-center ">
        
        {

          this.state.ProductPromo.filter((p)=> 
            p.promo === "true" &&
            p.place === this.state.place,

            ).map((P) => (

            <PromotionItem  
            key = {P.id}

            title = {P.title}
            img = {P.img}
            prix = {P.prix}
            place =  {P.place}
            newprice = {P.newprice}
            pourcentage = {P.pourcentage}
            description = {P.description}

            />


          ))

         

        }
      </div>


<button className= " btn btn-primary" onClick = {this.prevPromo}>Previous</button>



<button className= "float-right btn btn-success" onClick = {this.nextPromo}>Next</button>


      </div>
    );
  }
}

export default ProductPromotion;
