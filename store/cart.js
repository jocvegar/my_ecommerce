export const state = () => ({
  cartItems: [{ name: "camisa" }, { name: "pantalon" }]
});

export const mutations = {
  add(state, text) {
    state.cartItems.push({
      text
    });
  },
  remove(state, { item }) {
    state.cartItems.splice(state.cartItems.indexOf(item), 1);
  }
};

export const actions = {
  add({ commit }, name) {
    commit("add", name);
  }
};

export const getters = {
  cartItemsCount: state => {
    return state.cartItems.length;
  }
};
