import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import SingleCard from "./SingleCard.component";

class Page extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (formData) => {
    this.props.dataManager.save(formData);

    this.props.history.push("/cards");
  };

  onEdit = (id, formData) => {
    this.props.dataManager.edit(id, formData);

    this.props.history.push("/cards");
  };

  render() {
    const { id } = this.props.match.params;

    console.log(id);

    const card = id ? this.props.dataManager.getElement(id) : null;

    return (
      <SingleCard
        onSubmit={this.onSubmit}
        onEdit={(formData) => this.onEdit(id, formData)}
        card={card}
      />
    );
  }
}

Page.propTypes = {
  saveAdapter: PropTypes.string,
};

export default withRouter(Page);
