const reducer = (state, action) => {
  if (action === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  return state;
};

export default reducer;
