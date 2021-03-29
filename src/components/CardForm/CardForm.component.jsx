import React, { Component } from "react";

import Button from "../../components/UI/Button.component";
import Input from "../../components/UI/Input.component";

import { StyledForm } from "./CardForm.styles";

class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardsForm: {
        name: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Name",
            id: "Name",
          },
          value: this.props.card ? this.props.card.name : "",
          validation: {
            required: true,
          },
          valid: false,
          message: null,
          touched: false,
        },
        number1: {
          elementType: "input",
          elementConfig: {
            type: "cardNumber",
            placeholder: "CardNumber#1",
            id: "CardNumber#1",
            group: "CardNumber",
          },
          value: this.props.card ? this.props.card.number : "",
          validation: {
            required: true,
          },
          valid: false,
          message: null,
          touched: false,
        },
        number2: {
          elementType: "input",
          elementConfig: {
            type: "cardNumber",
            placeholder: "CardNumber#2",
            id: "CardNumber#2",
            group: "CardNumber",
          },
          value: this.props.card ? this.props.card.number : "",
          validation: {
            required: true,
          },
          valid: false,
          message: null,
          touched: false,
        },
        number3: {
          elementType: "input",
          elementConfig: {
            type: "cardNumber",
            placeholder: "CardNumber#3",
            id: "CardNumber#3",
            group: "CardNumber",
          },
          value: this.props.card ? this.props.card.number : "",
          validation: {
            required: true,
          },
          valid: false,
          message: null,
          touched: false,
        },
        number4: {
          elementType: "input",
          elementConfig: {
            type: "cardNumber",
            placeholder: "CardNumber#4",
            id: "CardNumber#4",
            group: "CardNumber",
          },
          value: this.props.card ? this.props.card.number : "",
          validation: {
            required: true,
          },
          valid: false,
          message: null,
          touched: false,
        },
        expiryDate: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "ExpiresOn",
            id: "ExpiresOn",
          },
          value: this.props.card ? this.props.card.expiryDate : "",
          validation: {
            required: true,
          },
          valid: false,
          message: null,
          touched: false,
        },
      },
      cardNumberMessage: "",
      formIsValid: false,
    };
  }

  checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    return isValid;
  };

  onSubmit = (event) => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in this.state.cardsForm) {
      formData[formElementIdentifier] = this.state.cardsForm[
        formElementIdentifier
      ].value;
    }
    !this.props.card
      ? this.props.onSubmit(formData)
      : this.props.onEdit(formData);
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedCardsForm = { ...this.state.cardsForm };

    const updatedFormElement = {
      ...updatedCardsForm[inputIdentifier],
    };

    updatedFormElement.value = event.target.value;
    updatedCardsForm[inputIdentifier] = updatedFormElement;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    if (
      !updatedFormElement.valid &&
      updatedFormElement.elementConfig.group === "CardNumber"
    ) {
      this.setState({ cardNumberMessage: "Invalid value for CardNumber" });
    } else if (!updatedFormElement.valid) {
      updatedFormElement.message = `Invalid value for ${updatedFormElement.elementConfig.placeholder}`;
    } else {
      this.setState({ cardNumberMessage: "" });
      updatedFormElement.message = null;
    }

    updatedFormElement.touched = true;

    let formIsValid = true;

    for (inputIdentifier in updatedCardsForm) {
      formIsValid = updatedCardsForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ cardsForm: updatedCardsForm, formIsValid });
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.cardsForm) {
      formElementsArray.push({
        id: key,
        config: this.state.cardsForm[key],
      });
    }
    return (
      <div className={this.props.className}>
        <StyledForm onSubmit={this.onSubmit}>
          {formElementsArray.map((formElement) => (
            <>
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                message={formElement.config.message}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                onChange={(event) =>
                  this.inputChangedHandler(event, formElement.id)
                }
              />
              {formElement.id === "number4" && this.state.cardNumberMessage && (
                <div style={{ color: "red" }}>Invalid card number</div>
              )}
            </>
          ))}
          <Button
            disabled={!this.props.card && !this.state.formIsValid}
            label={this.props.card ? "Edit" : "Save"}
          />
        </StyledForm>
      </div>
    );
  }
}

export default CardForm;
