import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

import MessageController from "./controllers/message_controller.js";

window.Stimulus = Application.start();
Stimulus.register("message", MessageController);
