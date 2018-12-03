
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import React from "react";
import ReactDOM from "react-dom";
import FormContainer from "./components/container/FormContainer";


const bbView =  Backbone.View.extend({
  el:'.create-article-form',
  template:_.template('<div>Hello, I\'m a Backbone View</div><div id="react-container" class="react-container"></div>'),
  render:function(){
    $(this.el).html(this.template);
    const wrapper = document.getElementById("react-container");
    ReactDOM.render(<FormContainer />, wrapper);
  }
});

export default bbView