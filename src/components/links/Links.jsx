import { Link } from "react-router-dom";

const Links = ({
  id,
  stepNumber,
  stepName,
  stepDescription,
  path,
  activeStep,
}) => {
  const activeElems = activeStep.find((active) => {
    return Number(active) === Number(id);
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
        className={`ring-link ${activeElems !== undefined ? "active" : ""}`}
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
