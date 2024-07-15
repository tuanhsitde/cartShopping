//setup state gio hang tren store

const stateShoppingCart = {
  cart: [{ maSp: "1", tenSP: "2", hinhAnh: "", soLuong: 1, gia: 100000 }],
};

const shoppingCartReducer = (state = stateShoppingCart, action) => {
  switch (action.type) {
    case "ADD_TO_CARD": {
      let index = state.cart.findIndex(
        (item) => item.maSp === action.productCart.maSp,
      );
      console.log(index);
      if (index !== -1) {
        state.cart[index].soLuong += 1;
        console.log("cahsd");
      } else {
        console.log("else");
        state.cart.push(action.productCart);
      }
      state.cart = [...state.cart];

      return { ...state };
    }
  }

  return { ...state };
};

export default shoppingCartReducer;
