import App from "../containers/App/";
import Login from "../containers/Login/";
import NotFound from "../containers/NotFound/";

const routes = [
  {
    path: "/",
    component: App,
    auth: true
  },
  {
    path: "/login",
    component: Login
  },
  {
    component: NotFound
  }
];

export default routes;
