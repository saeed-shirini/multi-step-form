import {Outlet} from "react-router-dom";
import Header from "./components/header/Header";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>

  );
}

export default App;
