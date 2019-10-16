import {Store} from "cx/data";
import {History, startHotAppLoop} from "cx/ui";
import {Debug} from "cx/util";
import Routes from "./routes";

//import css
import "cx/dist/widgets.css";

//uncomment two lines below if you use cx/charts
//import "cx/dist/svg.css";
//import "cx/dist/charts.css";

import "./index.scss";


//store will hold the application state
const store = new Store();

//setup client-side routing
History.connect(store, "url");

//dump app state in the console
Debug.enable("app-data");

//start the application with hot module reloading
startHotAppLoop(
    module,
    document.getElementById("app"),
    store,
    Routes
);
