import Backbone from "backbone";

const pugModel = {
  defaults: {
    message: null,
    status: "pending",
  },

  url: "https://dog.ceo/api/breed/pug/images/random",

  // use default fetch
};

export default Backbone.Model.extend(pugModel);
