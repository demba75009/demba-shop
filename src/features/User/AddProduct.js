import { Formik } from "formik";
import React, { Component } from "react";
import axios from "axios";
import Service from "../../config/Api.Config";

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Product: [],
    };
  }

  componentDidMount() {
    Service.get("Product.json").then((res) => {
      const prod = [];

      for (let key in res.data)
        prod.unshift({
          ...res.data[key],
          id: key,
        });

      this.setState({ Product: prod });

      console.log(this.state.Product);
    });
  }

  submit = (values, actions) => {
    const Produit = values;
    if (Produit.promo === "true") {
      Produit.place = Produit.promo.length + 2;
    }
    axios
      .post(
        "https://text-bcfd3-default-rtdb.firebaseio.com/Product.json",
        Produit
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      actions.isSubmitting = false;
      actions.resetForm();
    }, 1000);

    this.props.history.push("/Product");
  };

  render() {
    return (
      <div
        className="container-fluid p-5 bg-light
      d-flex flex-column justify-content-center align-items-center"
      >
        <Formik
          onSubmit={this.submit}
          initialValues={{
            title: "",
            img: "",
            img2: "",
            description: "",
            prix: 0,
            promo: "false",
            pourcentage: 0,
            newprice: 0,
          }}
        >
          {({
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="bg-white border p-5 d-flex flex-column"
            >
              <div className="form-group">
                <label>title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>
              <div className="form-group">
                <label>Descritiption</label>
                <textarea
                  style={{ width: 200, height: 300 }}
                  type="text"
                  name="description"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
              </div>

              <div className="form-group">
                <label>Img</label>
                <input
                  type="text"
                  name="img"
                  placeholder="https//"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.img}
                />
              </div>

              <div className="form-group">
                <label>Img2</label>
                <input
                  type="text"
                  name="img2"
                  placeholder="https//"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.img2}
                />
              </div>

              <div className="form-group">
                <label>Prix</label>
                <input
                  type="number"
                  name="prix"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prix}
                />
              </div>

              <div className="form-group">
                <label>Promo</label>
                <select
                  type="text"
                  name="promo"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.promo}
                >
                  <option value="false">false</option>
                  <option value="true">true</option>
                </select>
              </div>

              <div className="form-group">
                <label>Si Promo pourcentage</label>
                <input
                  type="number"
                  name="pourcentage"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pourcentage}
                />
              </div>

              <div className="form-group">
                <label>prix Promo</label>
                <input
                  type="number"
                  name="newprice"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newprice}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Ajouter
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default AddProduct;
