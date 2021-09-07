import React, { Component } from "react";
import Style from "./Product/modal.module.css";


class ModalApp extends Component {

  
  render() {
    return (
      <div className={` ${this.props.calc ? `ModalApp ${Style.calc}` : ""}`}>
        {this.props.calc ? (
          <div className={`question ${Style.modal}`}>
            <h3 className="text-white">{this.props.question}</h3>

            <button onClick={() => this.props.annuler()} className="bg-info">
              {" "}
              Annulez
            </button>

            <button onClick={() => this.props.Valider()} className="bg-danger">
              {" "}
              Ok
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ModalApp;
