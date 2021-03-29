import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "../../components/Card/Card.component";
import Button from "../../components/UI/Button.component";

function CardsList({ cards }) {
  return (
    <>
      <Link to="/cards/add">
        <Button label="Add New" />
      </Link>
      {cards &&
        cards.map((card) => {
          return (
            <Link key={card.id} to={`/cards/${card.id}/edit`}>
              <Card data={card} />
            </Link>
          );
        })}
    </>
  );
}

CardsList.propTypes = {
  cards: PropTypes.array,
};

export default CardsList;
