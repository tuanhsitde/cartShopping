import React, { Component } from "react";
//sử dụng thư viện để  dữ liệu từ store về
import { connect } from "react-redux";
class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <>
          {/* Button trigger modal */}
          <button type="button" className="btn btn-primary">
            Cart
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Giỏ hàng
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Ma san pham</th>
                        <th scope="col">Hinh anh</th>
                        <th scope="col">Gia</th>
                        <th scope="col">So luong</th>
                        <th>Thanh Tien</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.dataCart.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.maSP}</td>
                            <td>{item.tenSP}</td>
                            <td>
                              <img src={item.hinhAnh} alt="asd" />
                            </td>
                            <td>{item.soLuong}</td>
                            <td>{item.gia}</td>
                            <td>{item.gia * item.soLuong}</td>
                            <td></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }
}

// hàm lấy state biến dổi thành props của component

// state ở đây là state tổng của ứng dụng tức là rootreducer
const mapStateToProps = (state) => {
  return {
    dataCart: state.stateShoppingCart.cart,
  };
};
export default connect(mapStateToProps)(ShoppingCart);
