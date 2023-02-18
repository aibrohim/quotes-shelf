import { createApp } from "vue";

import App from "./App.vue";
import { router } from "./providers";

import "@/shared/assets/main.css";

export const app = createApp(App).use(router);
