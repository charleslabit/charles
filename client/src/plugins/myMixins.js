import { mapState, mapMutations } from "vuex";

const myPlugin = {
  install(Vue) {
    Vue.mixin({
      data: () => ({

      }),
      created() {},

      computed: {
        ...mapState(["drawer"]),
      },
      methods: {
        alert(val) {
          alert(val);
        },
        ...mapMutations(["TOGGLE_DRAWER"]),
       
      },

      filters: {},
    });
  },
};

export default myPlugin;
