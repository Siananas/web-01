// TODOne #import-html: use ES default imports to import welcome.component.html as template
import template from "./welcome.component.html";
import { Component } from "../../scripts/component";
import "./welcome.component.css";
// TODOne #export-functions: remove the IIFE
//(function () {
  // TODOne #export-functions: export function WelcomeComponent
  // TODO #class: use the ES6 class keyword
  /* class WelcomeComponent constructor  */
import { parseUrl } from "../../scripts/utils";

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
            // TODOne #arrow-function: use arrow function instead.
            (event) => {
                event.preventDefault();
                if (form.checkValidity() === false) {
                    event.stopPropagation();
                    form.classList.add("was-validated");
                } else {
                    const name = event.srcElement.querySelector("#nickname").value;
                    const size = parseInt(event.srcElement.querySelector("#size").value);

                    this._startGame(name, size);
                }
            },
            false
        )

        return this;
    }


    // TODO #class: turn function into a method of WelcomeComponent
    _startGame(name, size) {
        // TODOne #spa: replace with './#game'
         const gamePage = "./#game";
        // TODOne #template-literals:  use template literals (backquotes)
        //window.location = gamePage + "?name=" + name + "&size=" + size;
        window.location = `${gamePage}?name=${name}&size=${size}`;

    }
}


