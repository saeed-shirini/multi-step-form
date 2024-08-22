import "../css/first-step.css";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/Input/Input";

const PersonalInfo = () => {
  const { name, email, phone } =
    JSON.parse(localStorage.getItem("form-info")) || [];
  const [userInfo, setUserInfo] = useState({
    name: name,
    email: email,
    phone: phone,
  });
  const [activeStep, setActiveStep, getIndexPath, submitNextbtn] =
    useOutletContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    //submitNextbtn("fonr-info", userInfo, 2, "/step-two");
    if (data !== null) {
      localStorage.setItem("form-info", JSON.stringify(userInfo));
      if (!activeStep.includes(2)) {
        setActiveStep([...activeStep, Number(activeStep) + 1]);
        localStorage.setItem(
          "steps",
          JSON.stringify([...activeStep, Number(activeStep) + 1])
        );
      }
    }
    return navigate("/step-two");
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="step step1">
        <div className="description">
          <h1>Personal Info</h1>
          <p>please provide name,email,address,phone number</p>
        </div>

        <form className="form-info">
          <Input
            register={register}
            validationSchema={{ required: "please fill out name field" }}
            label="Name"
            name="name"
            placeholder="e.g. stephen king"
            errors={errors}
            value={userInfo.name}
            change={handleChange}
          />
          <Input
            register={register}
            validationSchema={{
              required: "please fill out email field",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            label="Email Address"
            name="email"
            placeholder="e.g. stephen king@lorem.com"
            errors={errors}
            value={userInfo.email}
            change={handleChange}
          />
          <Input
            register={register}
            validationSchema={{
              required: "please fill out phone number field ",
              minLength: {
                value: 7,
                message: "must be greather than 7 char",
              },
              pattern: {
                value: /^\d+$/,
                message: "must be number",
              },
            }}
            label="Phone Number"
            name="phone"
            placeholder="e.g. 123 456 7890"
            errors={errors}
            value={userInfo.phone}
            change={handleChange}
          />
        </form>
        <Button
          viewport="desktop"
          pathIndex={getIndexPath}
          handleSubmit={handleSubmit(onSubmit)}
        >
          next step
        </Button>
      </div>
      <Button
        viewport="mobile"
        pathIndex={getIndexPath}
        handleSubmit={handleSubmit(onSubmit)}
      >
        next step
      </Button>
    </div>
  );
};

export default PersonalInfo;
