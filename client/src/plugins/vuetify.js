import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#373540",
    secondary: "#675F6C",
    accent: "#D58636",
    error: "#984C56",
    warning: "#E4DC81",
    info: "#1565C0",
    success: "#91B489"
  }
});
