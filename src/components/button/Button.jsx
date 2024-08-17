import "../button/button.css";

const Button = ({ children, viewport, handleSubmit }) => {
  return (
    <div className={`btn-container btn-container-${viewport}`}>
      <button
        type="submit"
        onClick={handleSubmit(onsubmit)}
        className="next-step"
      >
        {" "}
        {children}
      </button>
    </div>
  );
};

export default Button;
