import "../button/button.css";
import { useNavigate } from "react-router";

const Button = ({ children, viewport, handleSubmit, pathIndex }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`btn-container btn-container-${viewport} ${
        pathIndex > 0 ? "space-between" : ""
      }`}
    >
      {pathIndex > 0 && (
        <button onClick={() => navigate(-1)} className="go-back">
          Go Back
        </button>
      )}
      <button type="submit" onClick={handleSubmit} className="next-step">
        {" "}
        {children}
      </button>
    </div>
  );
};

export default Button;
