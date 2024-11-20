import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ToDoPage from "./pages/ToDoPage";

const routerConfig = [
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: ToDoPage,
        path: "/",
      },
    ],
  },
];

const router = createBrowserRouter(routerConfig);

export default router;
