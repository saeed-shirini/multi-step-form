const Plan = ({
  id,
  slectedPlanId,
  handleSelect,
  checked,
  svgImage,
  name,
  price,
}) => {
  return (
    <div
      className={`plan-card ${slectedPlanId === id ? "selected" : ""}`}
      onClick={() => handleSelect(id)}
    >
      <div className="plan-image">{svgImage}</div>
      <div className="plan-info">
        <p>{name}</p>
        <span>{price}</span>
        {!checked && <p className="free-time">2 months free</p>}
      </div>
    </div>
  );
};
export default Plan;
