import React, { Component } from "react";
import ProductListRedux from "./ProductListRedux";
import ShoppingCart from "./ShoppingCart";

class MenuShopping extends Component {
  render() {
    return (
      <div>
        <h3>Sản phẩm</h3>
        <div className="text-end">
          <span
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ width: "20px", cursor: "pointer" }}
          >
            <i className="fa-solid fa-cart-shopping"></i>(0) Giỏ hàng
          </span>
        </div>
        <ProductListRedux />
        <ShoppingCart />
      </div>
    );
  }
}

export default MenuShopping;
