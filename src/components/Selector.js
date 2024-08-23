import Select from "react-select";

const customStyles = {
  indicatorSeparator: (defaultStyles) => ({
    ...defaultStyles,
    display: "none",
  }),
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    display: "none", // your changes to the arrow
  }),
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    fontSize: "16px",
    fontFamily: "inter",
    color: state.isSelected ? "#fff" : "#181818",
    backgroundColor: state.isSelected ? "#181818" : "#fff",
    "&:hover": {
      backgroundColor: "#f8f8f8",
      cursor: "pointer",
      color: "inherit",
    },
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    width: "100%",
    padding: "4px 10px",
    height: 48,
    borderColor: "#79747E",
    borderRadius: "0.5rem",
    boxShadow: "none",
    "&:focus-within": {
      borderColor: "#DE2242",
      // boxShadow: "0 0 0 3px rgba(17, 24, 39, 0.1)",
    },
  }),
  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    color: "#1C1B1F",
    padding: "6px 0px",
    height: "100%",
    fontSize: "16px",
    fontFamily: "inter",
    "&:focus": {
      outline: "none",
      borderColor: "none",
      border: "none",
    },
  }),
};

export default function Selector({
  selectedOption,
  setSelectedOption,
  className,
  ...rest
}) {
  return (
    <div>
      <Select styles={customStyles} {...rest} />
    </div>
  );
}
