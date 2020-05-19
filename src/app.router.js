import Backbone from "backbone";

import AppView from "./app.view";

const routerOptions = {
  routes: {
    "*path": () => new AppView(),
  },
};

export default Backbone.Router.extend(routerOptions);
