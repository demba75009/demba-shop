import React, { Component } from "react";
import {
  TheHeader,
  AddProduct,
  ProductList,
  ProductDetail,
  PanierList,
} from "./features";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  NavLink,
  Redirect,
  Switch,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <TheHeader />

            <Switch>
              <Route exact path="/AddProduct" component={AddProduct} />
              <Route exact path="/Product" component={ProductList} />
              <Route
                exact
                path="/Product/ProductDetail"
                component={ProductDetail}
              />

              <Route exact path="/Panier" component={PanierList} />

              <Redirect to="/Product"></Redirect>
            </Switch>
          </div>
        </Router>
        ;
      </div>
    );
  }
}

export default App;
