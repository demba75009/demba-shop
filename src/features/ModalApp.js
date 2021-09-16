import React, { Component } from "react";
import Style from "./Product/modal.module.css";

class Confirmation extends Component {
  render() {
    return (
      <div className={` ${this.props.calc ? `ModalApp ${Style.calc}` : ""}`}>
        {this.props.calc ? (
          <div className={`question container ${Style.modal}`}>
            <h3 className="text-white">{this.props.question}</h3>

            <button
              onClick={() => this.props.Valider2()}
              className="bg-success"
            >
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

class ModalApp extends Component {
  render() {
    return (
      <div className={` ${this.props.calc ? `ModalApp  ${Style.calc}` : ""}`}>
        {this.props.calc ? (
          <div className={`question container ${Style.modal}`}>
            <h3 className="text-white">{this.props.question}</h3>

            <button onClick={() => this.props.annuler()} className="bg-info">
              {" "}
              Annulez
            </button>

            <button onClick={() => this.props.Valider2()} className="bg-danger">
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

export default Confirmation;
