import _ from "underscore";
import Backbone from "backbone";
import React from "react";
import { render } from "react-dom";
import PugModel from "./models/pug";
import PugView from "./views/pug";

const viewOptions = {
  el: "#root",

  initialize: function () {
    this.state = {
      count: 0,
    };

    let pugModel = new PugModel();
    this.pugView = new PugView({ model: pugModel });

    // Render the view
    this.render();
  },

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  },

  events: { "click button": "increment" },

  increment() {
    this.setState({ count: this.state.count + 1 });
  },

  render: function () {
    // Render the template
    const message = "App Ready";

    render(
      <div>
        <h4>{message}</h4>
        <div>{this.state.count}</div>
        <button>click me</button>
      </div>,
      this.$el[0]
    );

    this.$el.append(this.pugView.el);
  },
};

export default Backbone.View.extend(viewOptions);
