import React from "react";

const Input = ({
  elementType,
  elementConfig,
  value,
  invalid,
  message,
  onChange,
}) => {
  let inputElement = null;

  switch (elementType) {
    case "input":
      inputElement = (
        <div
          style={
            elementConfig.type == "cardNumber"
              ? styles.cardNumberWrapper
              : styles.textWrapper
          }
        >
          <div style={styles.inputWrapper}>
            <input
              {...elementConfig}
              value={value}
              onChange={onChange}
              style={
                elementConfig.type == "cardNumber"
                  ? styles.cardNumber
                  : styles.text
              }
            />
          </div>
          {invalid && elementConfig.group !== "CardNumber" && (
            <div style={styles.errorMessage}>{message}</div>
          )}
        </div>
      );
      break;
    case "select":
      inputElement = (
        <select value={value} onChange={onChange}>
          {elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input {...elementConfig} value={value} onChange={onChange} />
      );
  }

  return <>{inputElement}</>;
};

const styles = {
  errorMessage: {
    color: "red",
  },
  label: {
    display: "flex",
    flexDirection: "column",
  },
  inputWrapper: {
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardNumberWrapper: {
    width: "calc(20% - 35px)",
    marginRight: "35px",
    display: "inline-block",
  },
  cardNumber: {
    width: "100%",
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
  },
  text: {
    width: "80%",
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
  },
};

export default Input;
