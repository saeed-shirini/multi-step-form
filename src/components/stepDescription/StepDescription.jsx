const StepDescription = ({ title, description }) => {
  return (
    <div className="description">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default StepDescription;
