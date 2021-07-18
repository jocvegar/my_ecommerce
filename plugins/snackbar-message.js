import Vue from "vue";

if (!Vue.snackbar) {
  Vue.snackbar = true;
  Vue.mixin({
    data: function() {
      return {
        snackbar: false,
        snackbarText: ""
      };
    },
    methods: {
      activateSnackBar(text) {
        this.snackbar = true;
        this.snackbarText = text;
      }
    }
  });
}
