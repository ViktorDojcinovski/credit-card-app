import React from "react";
import PropTypes from "prop-types";

import {
  CardWrapper,
  StyledCardForm,
  StyledLabelsArea,
  CardNumberArea,
  UserNameArea,
} from "./SingleCard.styles";

function SingleCard({ onSubmit, onEdit, card }) {
  return (
    <CardWrapper>
      <h1>Insert card info</h1>
      <StyledLabelsArea>
        <CardNumberArea>
          <label htmlFor="CardNumber#1">1234</label>
          <label htmlFor="CardNumber#2">1298</label>
          <label htmlFor="CardNumber#3">6574</label>
          <label htmlFor="CardNumber#4">1287</label>
        </CardNumberArea>
        <UserNameArea>
          <label htmlFor="ExpiresOn">02/22</label>
          <label htmlFor="Name">User Name</label>
        </UserNameArea>
      </StyledLabelsArea>
      <StyledCardForm onSubmit={onSubmit} onEdit={onEdit} card={card} />
    </CardWrapper>
  );
}

SingleCard.propTypes = {
  onSubmit: PropTypes.func,
  onEdit: PropTypes.func,
  card: PropTypes.object,
};

export default SingleCard;
