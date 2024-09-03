import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import "./styles/app.css";
import { useEffect, useState } from "react";

const path = ["/", "/step-two", "/step-three", "/step-four"];

function App() {
  const [activeStep, setActiveStep] = useState(
    JSON.parse(localStorage.getItem("steps")) || [1]
  );

  const navigate = useNavigate();

  const findUrlPath = path.find((p) => {
    return p === window.location.pathname;
  });
  const getIndexPath = path.indexOf(findUrlPath);

  const submitNextbtn = (storageName, data, stepLevel, redirect) => {
    if (data !== null) {
      localStorage.setItem(storageName, JSON.stringify(data));
      if (!activeStep.includes(stepLevel)) {
        const newStep = Number(activeStep.length) + 1;
        setActiveStep([...activeStep, newStep]);
        localStorage.setItem("steps", JSON.stringify([...activeStep, newStep]));
      }
    }
    return navigate(redirect);
  };

  useEffect(() => {
    if (getIndexPath + 1 > activeStep.length) {
      return navigate(path[activeStep.length - 1]);
    }
  }, []);

  return (
    <div className="app">
      <Header activeStep={activeStep} pathIndex={getIndexPath} />
      <Outlet context={[getIndexPath, submitNextbtn]} />
    </div>
  );
}

export default App;
