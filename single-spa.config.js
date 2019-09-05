import * as singleSpa from "single-spa";

singleSpa.registerApplication(
  "vue",
  () => import("./src/vue/vue.app.js"),
  () => (location.pathname === "/react" ? false : true)
);

singleSpa.registerApplication(
  "react",
  () => import("./src/react/main.app.js"),
  () => (location.pathname === "/vue" ? false : true)
);

singleSpa.start();
