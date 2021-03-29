import React, { Component } from "react";

import CardsList from "./CardsList.component";

export default class Page extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    this.setState({ cards: this.props.dataManager.data });
  }

  render() {
    return (
      <>
        <h1>List of cards</h1>
        <CardsList cards={this.state.cards} />
      </>
    );
  }
}
