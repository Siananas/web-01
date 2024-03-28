// TODO #import-router: use ES named imports to import the router
// TODO #import-components: use ES named imports to import WelcomeComponent, GameComponent a ScoreComponent
// TODO #import-css: use ES side-effect imports to import styles/style.css

import { Router } from "./app/scripts/router";
import { NavbarComponent} from "./app/components/navbar/navbar.component";
import { WelcomeComponent } from "./app/components/welcome/welcome.component";
import { GameComponent } from "./app/components/game/game.component";
import { ScoreComponent } from "./app/components/score/score.component";
import { FooterComponent } from "./app/components/footer/footer.component";
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import "./app/styles/style.css"

customElements.define("my-navbar", NavbarComponent);
customElements.define("my-footer", FooterComponent);

const outlet = document.querySelector("#content-outlet");
const router = new Router(outlet);
router



  .register("", {
    component: WelcomeComponent,
    // TODO #import-html: remove the templateUrl property.
    //templateUrl: "/src/app/views/welcome.component.html",
  })
  .register("welcome", {
    component: WelcomeComponent,
    // TODO #import-html: remove the templateUrl property.
    //templateUrl: "/src/app/views/welcome.component.html",
  })
  .register("game", {
    component: GameComponent,
    // TODO #import-html: remove the templateUrl property.
    //templateUrl: "/src/app/views/game.component.html",
  })
  .register("score", {
    component: ScoreComponent,
    // TODO #import-html: remove the templateUrl property.
    //templateUrl: "/src/app/views/score.component.html",
  });
