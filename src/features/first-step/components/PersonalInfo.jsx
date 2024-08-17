import "../css/first-step.css";
import { useForm } from "react-hook-form";
import Button from "../../../components/button/Button";
import "../../../components/Input/Input";

const PersonalInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="step step1">
        <div className="description">
          <h1>Personal Info</h1>
          <p>please provide name,email,address,phone number</p>
        </div>
        <form className="form-info">
          <div className="name-info">
            <label>Name</label>
            <input
              {...register("name", { required: "please fill out name field" })}
              type="text"
              placeholder="e.g. stephen king"
              className={errors.name === undefined ? "" : "errors"}
            />
            {errors.name && <span>{errors.name?.message}</span>}
          </div>

          <div className="email-info">
            <label>Email Address</label>
            <input
              {...register("email", {
                required: "please fill out email field",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              type="text"
              placeholder="e.g. stephen king@lorem.com"
              className={errors.email === undefined ? "" : "errors"}
            />
            {errors.email && <span>{errors.email?.message}</span>}
          </div>

          <div className="phone-info">
            <label>Phone Number</label>
            <input
              {...register("phone", {
                required: "please fill out phone number field ",
                minLength: {
                  value: 7,
                  message: "must be greather than 7 char",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "must be number",
                },
              })}
              type="text"
              placeholder="e.g. 123 456 7890"
              className={errors.phone === undefined ? "" : "errors"}
            />
            {errors.phone && <span>{errors.phone?.message}</span>}
          </div>
        </form>
        <Button viewport="desktop" handleSubmit={handleSubmit}>
          next step
        </Button>
      </div>
      <Button viewport="mobile" handleSubmit={handleSubmit}>
        next step
      </Button>
    </div>
  );
};

export default PersonalInfo;
