import Backbone from "backbone";
import AppRouter from "./app.router";

Backbone.$(() => {
  new AppRouter();

  Backbone.history.start();
});
