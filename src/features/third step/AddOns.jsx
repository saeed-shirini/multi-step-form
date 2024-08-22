import "./addons.css";
import { useState } from "react";
import AddOn from "./AddOn";
import Button from "../../components/button/Button";
import { useNavigate, useOutletContext } from "react-router-dom";

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
    price: "+$10/mo",
    type: "yearly",
  },
  {
    id: 5,
    name: "Larger storage",
    description: "Extra 1TB cloud save",
    price: "+$20/mo",
    type: "yearly",
  },
  {
    id: 6,
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: "+$20/mo",
    type: "yearly",
  },
];

const AddOns = () => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const planType = JSON.parse(localStorage.getItem("plan")).type;
  const [activeStep, setActiveStep, getIndexPath] = useOutletContext();
  const navigate = useNavigate();

  const addOnsTypeFilter = allAddOns.filter((addOns) => {
    return addOns.type === planType;
  });

  const handleSelectChange = (addOnsId) => {
    var copySelectedAddOns = [...selectedAddOns];

    const findSelectedElement = allAddOns.find((addOns) => {
      return addOns.id === addOnsId;
    });

    const issSelected = selectedAddOns.find((addOns) => {
      return addOns.id === addOnsId;
    });
    if (issSelected) {
      const removeNotSelected = copySelectedAddOns.filter((addOns) => {
        return addOns.id !== addOnsId;
      });
      setSelectedAddOns(removeNotSelected);
    } else {
      setSelectedAddOns([...selectedAddOns, findSelectedElement]);
    }
  };

  const handleSubmit = () => {
    alert();
  };
  return (
    <div className="container">
      <div className="step step3">
        <div className="description">
          <h1>Pick Add-Ons</h1>
          <p>Add-ons help enhance your gaming experience</p>
        </div>

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
