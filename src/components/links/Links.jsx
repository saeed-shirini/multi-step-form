import { Link } from "react-router-dom";

const Links = ({
  id,
  stepNumber,
  stepName,
  stepDescription,
  path,
  activeStep,
  pathIndex,
}) => {
  const activeElems = activeStep.find((active) => {
    return active === id;
  });
  const checkDisabledElements = (event) => {
    if (activeElems === undefined) {
      event.preventDefault();
    }
  };

  return (
    <div className="ring-info">
      <Link
        onClick={checkDisabledElements}
        className={`ring-link ${pathIndex + 1 === id ? "active" : ""}`}
        to={path}
      >
        {stepNumber}
      </Link>
      <div className="ring-desctiption">
        <p>{stepName}</p>
        <h3>{stepDescription}</h3>
      </div>
    </div>
  );
};

export default Links;
