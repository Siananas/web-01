// TODO #import-html: use ES default imports to import game.component.html as template
import template from "./game.component.html";
import { parseUrl } from "../../scripts/utils";
import { Component } from "../../scripts/component";
import "./game.component.css";
import { CardComponent } from "./card/card.component"

import back from "./card/assets/back.png";
import card0 from "./card/assets/card-0.png";
import card1 from "./card/assets/card-1.png";
import card2 from "./card/assets/card-2.png";
import card3 from "./card/assets/card-3.png";
import card4 from "./card/assets/card-4.png";
import card5 from "./card/assets/card-5.png";
import card6 from "./card/assets/card-6.png";
import card7 from "./card/assets/card-7.png";
import card8 from "./card/assets/card-8.png";
import card9 from "./card/assets/card-9.png";

// TODOne #export-functions: remove the IIFE
const environment = {
  api: {
    host: "http://localhost:8081",
  },
};

// TODOne #export-functions: export function GameComponent
// TODO #class: use the ES6 class keyword
// TODOne #extends: extend Component
/* class GameComponent constructor */
export class GameComponent extends Component {
  constructor() {
    // TODOne #extends: call super(template)
    super(template)
    // gather parameters from URL
    const params = parseUrl();

    // TODOne #import-html: assign template to this.template
    // save player name & game size
    this.template = template;
    this._name = params.name;
    this._size = parseInt(params.size) || 9;
    this._flippedCard = null;
    this._matchedPairs = 0;
  }

  // TODO #class: turn function into a method of GameComponent
  /* method GameComponent.init */
  async init() {
    this._config = await this.fetchConfig();
    this._boardElement = document.querySelector(".cards");

    // create cards out of the config
    this._cards = [];
    this._cards = this._config.ids.map(id => new CardComponent(id));

    this._cards.forEach(card => {
      //let card = this._cards[i];
      this._boardElement.appendChild(card.getElement());
      card.getElement().addEventListener(
          "click",
          () => {
            this._flipCard(card);
          }
      );
    });
    this.start();
  }


  // TODOne #class: turn function into a method of GameComponent
  /* method GameComponent._appendCard */
  _appendCard(card) {
    this._boardElement.appendChild(card.getElement());
    card.getElement().addEventListener(
        "click",
        // TODOne #arrow-function: use arrow function instead.
        () => {
          this._flipCard(card);
        }
    );

  }

  // TODO #class: turn function into a method of GameComponent
  /* method GameComponent.start */
  start() {
    this._startTime = Date.now();
    let seconds = 0;
    // TODOne #template-literals:  use template literals (backquotes)
    document.querySelector("nav .navbar-title").textContent =
        `Player: ${this._name}. Elapsed time: ${seconds++}`;

    this._timer = setInterval(
        // TODOne #arrow-function: use arrow function instead.
         () => {
          // TODOne #template-literals:  use template literals (backquotes)
          document.querySelector("nav .navbar-title").textContent =
              "Player: " + this._name + ". Elapsed time: " + seconds++;
        },
        1000
    );
  }

  // TODOne #class: turn function into a method of GameComponent
  /* method GameComponent.fetchConfig */
  async fetchConfig() {
    return fetch(`${environment.api.host}/board?size=${this._size}`).then(
        (r) => r.json()
    );
  }

  // TODO #class: turn function into a method of GameComponent
  /* method GameComponent.goToScore */
  goToScore() {
    const timeElapsedInSeconds = Math.floor(
        (Date.now() - this._startTime) / 1000
    );
    clearInterval(this._timer);

    setTimeout(
        // TODOne #arrow-function: use arrow function instead.
         () => {
          // TODOne #spa: replace with './#score'
          const scorePage = "./#score";
          // TODOne #template-literals:  use template literals (backquotes)
          window.location = `${scorePage}?name=${this._name}&size=${this._size}&time=${timeElapsedInSeconds}`;
        },750
    );
  }

  // TODO #class: turn function into a method of GameComponent
  /* method GameComponent._flipCard */
  _flipCard(card) {
    if (this._busy) {
      return;
    }

    if (card.flipped) {
      return;
    }

    // flip the card
    card.flip();

    // if flipped first card of the pair
    if (!this._flippedCard) {
      // keep this card flipped and wait for the second card of the pair
      this._flippedCard = card;
    } else {
      // second card of the pair flipped...

      // if cards are the same
      if (card.equals(this._flippedCard)) {
        this._flippedCard.matched = true;
        card.matched = true;
        this._matchedPairs += 1;

        // reset flipped card for the next turn.
        this._flippedCard = null;

        if (this._matchedPairs === this._size) {
          this.goToScore();
        }
      } else {
        this._busy = true;

        // cards did not match
        // wait a short amount of time before hiding both cards
        setTimeout(
            // TODOne #arrow-function: use arrow function instead.
             () => {
              // hide the cards
              this._flippedCard.flip();
              card.flip();
              this._busy = false;

              // reset flipped card for the next turn.
              this._flippedCard = null;
            },
            500
        );
      }
    }
  }
}

// TODOne #card-component: Change images location to /app/components/game/card/assets/***.png
// TODO #import-assets: use ES default import to import images.

// TODO #class: use the ES6 class keyword
// TODO #extends: extends Component