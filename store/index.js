import CommerceSDK from "@chec/commerce.js";
const commerce = new CommerceSDK(process.env.NUXT_ENV_CHEC_PUBLIC_API_KEY);

export const state = () => ({
  categories: []
});

export const mutations = {
  addCategory(state, category) {
    state.categories.push({ category });
  }
};

export const actions = {
  async nuxtServerInit({ commit }, context) {
    const { data: _categories } = await commerce.categories.list();
    if (_categories && context.store.state.categories.length == 0) {
      _categories.forEach(category => {
        commit("addCategory", category);
      });
    }
  },
  addCategory({ commit }, category) {
    commit("addCategory", category);
  }
};
