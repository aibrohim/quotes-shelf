import { createRouter, createWebHistory } from "vue-router";
import { QuotesView, SingleQuote, EditQuote, AddQuote } from "@/pages";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "list",
      component: QuotesView,
    },
    {
      path: "/quote/:id",
      name: "single-quote",
      children: [
        {
          path: "",
          component: SingleQuote,
        },
        {
          path: "edit",
          component: EditQuote,
        },
      ],
    },
    {
      path: "/add",
      component: AddQuote,
    },
  ],
});
