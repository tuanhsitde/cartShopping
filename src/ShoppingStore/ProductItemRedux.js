import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItemRedux extends Component {
  render() {
    let { propsItem } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={propsItem.hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{propsItem.tenSP}</h5>
            <p className="card-text">{propsItem.donGia}</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.addToCart(propsItem);
              }}
            >
              Go somewhere
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      let productCart = {
        maSp: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        gia: product.giaBan,
      };
      let action = {
        type: "ADD_TO_CARD",
        productCart,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductItemRedux);
