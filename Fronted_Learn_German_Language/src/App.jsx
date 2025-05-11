import "./App.css";
import {RouterProvider} from "react-router-dom";
import "./router/MyRoute";
import MyRoute from "./router/MyRoute";

const App = () =>{
  return <RouterProvider router={MyRoute}>
  </RouterProvider>;
};

export default App;