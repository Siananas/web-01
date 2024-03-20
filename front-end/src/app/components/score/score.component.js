// TODO #import-html: use ES default imports to import game.component.html as template
import template from "./score.component.html";
import { Component } from "../../scripts/component";
import "./score.component.css";
// TODO #export-functions: remove the IIFE
//(function () {
  // TODO #export-functions: export function ScoreComponent
  // TODO #class: use the ES6 class keyword

/* class ScoreComponent constructor */
import { parseUrl } from "../../scripts/utils";
  export class ScoreComponent extends Component{
    constructor() {
      // TODO #extends: call super(template)
      super(template)
      const params = parseUrl();
      // TODO #import-html: assign template to this.template
      this.name = params.name;
      this.size = parseInt(params.size);
      this.time = parseInt(params.time);
      this.template = template;
    }

    // TODO #export-functions: remove this line
    // put component in global scope, to be runnable right from the HTML.
    //window.ScoreComponent = ScoreComponent;

    // TODO #class: turn function into a method of ScoreComponent
    /* method ScoreComponent.init */
    init() {
      document.getElementById("name").innerText = this.name;
      document.getElementById("size").innerText = this.size;
      document.getElementById("time").innerText = this.time;
    }
  }


