import "./addons.css";
import { useState } from "react";
import AddOn from "./AddOn";
import Button from "../../components/button/Button";
import { useOutletContext } from "react-router-dom";
import StepDescription from "../../components/stepDescription/StepDescription";

const allAddOns = [
  {
    id: 1,
    name: "Oneline service",
    description: "Access to multiplayer games",
    price: "+$1/mo",
    type: "monthly",
  },
  {
    id: 2,
    name: "Larger storage",
    description: "Extra 1TB cloud save",
    price: "+$2/mo",
    type: "monthly",
  },
  {
    id: 3,
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: "+$2/mo",
    type: "monthly",
  },
  {
    id: 4,
    name: "Oneline service",
    description: "Access to multiplayer games",
    price: "+$10/yr",
    type: "yearly",
  },
  {
    id: 5,
    name: "Larger storage",
    description: "Extra 1TB cloud save",
    price: "+$20/yr",
    type: "yearly",
  },
  {
    id: 6,
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: "+$20/yr",
    type: "yearly",
  },
];

const AddOns = () => {
  const planType =
    JSON.parse(localStorage.getItem("plan")) &&
    JSON.parse(localStorage.getItem("plan")).type;
  const storageAddOns = JSON.parse(localStorage.getItem("addons"));
  const [selectedAddOns, setSelectedAddOns] = useState(
    (storageAddOns && storageAddOns[0].type === planType && storageAddOns) || []
  );
  const [getIndexPath, submitNextbtn] = useOutletContext();

  const addOnsTypeFilter = allAddOns.filter((addOns) => {
    return addOns.type === planType;
  });

  const handleSelectChange = (addOnsId) => {
    var copySelectedAddOns = [...selectedAddOns];

    const findSelectedElement = allAddOns.find((addOns) => {
      return addOns.id === addOnsId;
    });

    const isSelected = selectedAddOns.find((addOns) => {
      return addOns.id === addOnsId;
    });

    if (isSelected) {
      const removeNotSelected = copySelectedAddOns.filter((addOns) => {
        return addOns.id !== addOnsId;
      });
      setSelectedAddOns(removeNotSelected);
    } else {
      setSelectedAddOns([...selectedAddOns, findSelectedElement]);
    }
  };

  const handleSubmit = () => {
    if (selectedAddOns.length > 0) {
      submitNextbtn("addons", selectedAddOns, 4, "/step-four");
      /*localStorage.setItem("addons", JSON.stringify(selectedAddOns));
      if (!activeStep.includes(4)) {
        const newStep = Number(activeStep.length) + 1;
        setActiveStep([...activeStep, newStep]);
        localStorage.setItem("steps", JSON.stringify([...activeStep, newStep]));
      }
      return navigate("/step-four");*/
    }
  };

  return (
    <div className="container">
      <div className="step step3">
        <StepDescription
          title={"Pick Add-Ons"}
          description={"Add-ons help enhance your gaming experience"}
        />

        <section className="add-ons-items">
          {addOnsTypeFilter.map(({ id, ...addOn }) => {
            return (
              <AddOn
                key={id}
                id={id}
                handleSelectAddOns={handleSelectChange}
                selectedAddOns={selectedAddOns}
                {...addOn}
              />
            );
          })}
        </section>
        <Button
          viewport="desktop"
          pathIndex={getIndexPath}
          handleSubmit={handleSubmit}
        >
          next step
        </Button>
      </div>

      <Button
        viewport="mobile"
        pathIndex={getIndexPath}
        handleSubmit={handleSubmit}
      >
        next step
      </Button>
    </div>
  );
};

export default AddOns;
