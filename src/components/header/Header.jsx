import "./header.css";
import Links from "../links/Links";
const links = [
  {
    id: 1,
    stepNumber: 1,
    stepName: "STEP1",
    stepDescription: "YOUR INFO",
    path: "/",
  },
  {
    id: 2,
    stepNumber: 2,
    stepName: "STEP2",
    stepDescription: "SELECT PLAN",
    path: "step-two",
  },
  {
    id: 3,
    stepNumber: 3,
    stepName: "STEP3",
    stepDescription: "ADD-ONS",
    path: "step-three",
  },
  {
    id: 4,
    stepNumber: 4,
    stepName: "STEP4",
    stepDescription: "SUMMARY",
    path: "step-fourth",
  },
];

const Header = ({ activeStep }) => {
  return (
    <div className="container">
      <header className="header">
        <div className="steps-rings">
          {links.map(({ id, ...link }) => {
            return <Links key={id} id={id} activeStep={activeStep} {...link} />;
          })}
        </div>
      </header>
    </div>
  );
};

export default Header;
