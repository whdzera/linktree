import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

window.Stimulus = Application.start();

import MessageController from "./controllers/message_controller.js";
Stimulus.register("message", MessageController);
