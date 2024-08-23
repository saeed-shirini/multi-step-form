import "./summary.css";
import { Link, useOutletContext } from "react-router-dom";
import Button from "../../components/button/Button";
import SummaryAddOns from "./SummaryAddOns";
import StepDescription from "../../components/stepDescription/StepDescription";

const Summary = () => {
  const [activeStep, setActiveStep, getIndexPath] = useOutletContext();
  const { name, price, type } = JSON.parse(localStorage.getItem("plan"));
  const addOns = JSON.parse(localStorage.getItem("addons"));

  const getPriceNumber = Number(price.split("/")[0].split("$")[1]);
  let sum = 0;
  /*const sumAllAddOns = addOns.reduce((total, current) => {
    console.log(Number(total.price));
    return (total +=
      Number(total.price.split("/")[0].split("$")[1]) +
      Number(current.price.split("/")[0].split("$")[1]));
  }, 0);*/

  addOns.forEach((addons) => {
    sum += Number(addons.price.split("/")[0].split("$")[1]);
  });

  const handleSubmit = () => {};

  return (
    <div className="container">
      <div className="step step4">
        <StepDescription
          title={"Finishing Up"}
          description={"Double-check everything looks OK before confirming."}
        />
        <section className="summary">
          <div className="summary-item">
            <div className="service-name">
              <span>
                {name} ({type})
              </span>
              <Link className="change-link" to="/step-two">
                Change
              </Link>
            </div>
            <div className="service-price">
              <p>{price}</p>
            </div>
          </div>

          {addOns.map(({ id, ...addOns }) => {
            return <SummaryAddOns key={id} id={id} {...addOns} />;
          })}
        </section>
        <div className="total-price">
          <p>Total (per {type})</p>
          <h3>
            +${sum + getPriceNumber /*getPriceNumber + sumAllAddOns*/}/
            {type === "monthly" ? "mo" : "yr"}
          </h3>
        </div>

        <Button
          viewport="desktop"
          pathIndex={getIndexPath}
          handleSubmit={handleSubmit}
        >
          confirm
        </Button>
      </div>

      <Button
        viewport="mobile"
        pathIndex={getIndexPath}
        handleSubmit={handleSubmit}
      >
        confirm
      </Button>
    </div>
  );
};

export default Summary;
