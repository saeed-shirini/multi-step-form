const Input = ({
  register,
  label,
  name,
  placeholder,
  errors,
  value,
  change,
  validationSchema,
}) => {
  return (
    <div className={`${name}-info"`}>
      <label>{label}</label>
      <input
        {...register(name, validationSchema)}
        type="text"
        placeholder={placeholder}
        className={errors[name] === undefined ? "" : "errors"}
        name={name}
        value={value}
        onChange={change}
      />
      {errors[name] && <span>{errors[name]?.message}</span>}
    </div>
  );
};

export default Input;
