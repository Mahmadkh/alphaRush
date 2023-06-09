import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./components/home/Home";
import Launchpad from "./components/launchpad/Launchpad";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Launchpad", element: <Launchpad /> },
  ]);
  return routes;
};
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
export default AppWrapper;
