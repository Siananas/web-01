// TODO #import-html: use ES default imports to import welcome.html as template
import template from "../views/welcome.html";
import { Component } from "./component";
// TODOne #export-functions: remove the IIFE
//(function () {
  // TODOne #export-functions: export function WelcomeComponent
  // TODO #class: use the ES6 class keyword
  /* class WelcomeComponent constructor  */
import { parseUrl } from "./utils";
export class WelcomeComponent extends Component{
    constructor() {
        // TODOne #extends: call super(template)
        super(template)
        // TODOne #import-html: assign template to this.template
        this.template = template;
    }


    // TODO #export-functions: remove this line
    // put component in global scope, to be runnable right from the HTML.
    //window.WelcomeComponent = WelcomeComponent;
    // TODO #class: turn function into a method of WelcomeComponent
    /* method WelcomeComponent.init */

    init() {
        const form = document.querySelector("form.form-signin");

        form.addEventListener(
            "submit",
            // TODO #arrow-function: use arrow function instead.
            function (event) {
                event.preventDefault();
                if (form.checkValidity() === false) {
                    event.stopPropagation();
                    form.classList.add("was-validated");
                } else {
                    const name = event.srcElement.querySelector("#nickname").value;
                    const size = parseInt(event.srcElement.querySelector("#size").value);

                    this._startGame(name, size);
                }
            }.bind(this),
            false
        )

        return this;
    }


    // TODO #class: turn function into a method of WelcomeComponent
    _startGame(name, size) {
        // TODO #spa: replace with './#game'
         const gamePage = "./#game";
        // TODO #template-literals:  use template literals (backquotes)
        window.location = gamePage + "?name=" + name + "&size=" + size;
    }
}


