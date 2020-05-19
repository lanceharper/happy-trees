import _ from "underscore";
import Backbone from "backbone";
import React from "react";
import { render } from "react-dom";

const pugView = {
  initialize: function () {
    this.listenTo(this.model, "change", this.render);
    this.model.fetch();
  },

  events: { "click button": "refresh" },

  refresh() {
    this.model.fetch();
  },

  render: function () {
    const { attributes } = this.model;
    const { message: pugUrl } = attributes;

    render(
      <div>
        <button>new pug</button>
        <img alt="current pug" src={pugUrl} />
      </div>,
      this.el
    );
  },
};

export default Backbone.View.extend(pugView);
