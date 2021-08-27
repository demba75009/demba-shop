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
    
this.setState({show:true})
 
console.log(this.state.show);
  };

  changeShow = () => {
    
    this.setState({show:false})
     
    console.log(this.state.show);
      };
    

  

  render() {

    
    return (
      <div className={Style.product}>
                <h3 className="text-center"> {this.props.title}</h3>



                {
          this.state.show ? (
        <img className={ Style.Ecran  }  src={this.props.img}/>
          ):
          <>
       <img className={` show ${Style.Ecran} `}  src={this.props.img2} />
      </>
      }       
        
        
        <div className={` ${Style.box}  `}>


          <img
          onClick={() => this.changeShow1()}

          className={Style.imgD} src={this.props.img} />

          
          <img
            onClick={() => this.changeShow()}
            className={Style.img2}
            src={this.props.img2}
          />


        </div>

   
        <h3 className={`${Style.prix} text-danger`}>
          Prix: {this.props.prix} €
        </h3>
        <button
          className="btn-outline-success "
          onClick={() => this.props.AddPanier()}
        >
          Add
          <i class="fas fa-cart-plus"></i>
        </button>
        <hr className="bg-dark"></hr>
        <h5 className="text-center describe">Description:</h5>
        <hr></hr>
        <h6> {this.props.description}</h6>
      </div>
    );
  }
}
