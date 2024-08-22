const AddOn = ({
  id,
  selectedAddOns,
  handleSelectAddOns,
  name,
  description,
  price,
}) => {
  const findSelectedAddOns =
    selectedAddOns.length > 0 &&
    selectedAddOns.find((addOns) => {
      return addOns.id === id;
    });

  const isSelected = findSelectedAddOns ? "selected" : "";
  return (
    <div
      className={`add-ons-item ${isSelected}`}
      onClick={() => handleSelectAddOns(id)}
    >
      <div className="left">
        <input type="checkbox" checked={isSelected} />
        <label className="add-ons-description">
          <p>{name}</p>
          <span>{description}</span>
        </label>
      </div>

      <div className="right">{price}</div>
    </div>
  );
};

export default AddOn;
