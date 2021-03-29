import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Card.styles";

function Card({ data }) {
  const { name } = data;

  return <Wrapper>{name}</Wrapper>;
}

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
