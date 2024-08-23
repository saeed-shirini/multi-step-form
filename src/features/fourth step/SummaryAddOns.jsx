const SummaryAddOns = ({ id, name, price }) => {
  return (
    <div key={id} className="summary-item">
      <div className="service-name">
        <span>{name}</span>
      </div>
      <div className="service-price">
        <p>{price}</p>
      </div>
    </div>
  );
};

export default SummaryAddOns;
