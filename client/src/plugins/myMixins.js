import { mapState, mapMutations } from "vuex";

const myPlugin = {
  install(Vue) {
    Vue.mixin({
      data: () => ({
        api: process.env.VUE_APP_URL,
      }),
      created() {},

      computed: {
        ...mapState(["userInfo"]),
      },
      methods: {
        alert(val) {
          alert(val);
        },
        ...mapMutations(["ADD_INFO"]),
       
      },

      filters: {},
    });
  },
};

export default myPlugin;
