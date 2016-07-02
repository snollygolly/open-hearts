import React from 'react';

import CardList from '../../../../models/data/cards.json';

const Card = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },
  getInitialState: function () {
    return {
      card: null
    };
  },
  componentWillMount: function () {
    document.body.style.backgroundColor = 'darkgreen';

    this.setState({
      card: './assets/images/cards/' + CardList[this.props.name]
    });

    console.log(this.state.card);
  },
  render: function () {
    return (
      <div style={{ textAlign: 'center', verticalAlign: 'middle'}}>
        <img src={ this.state.card }></img>
      </div>
    );
  }
});

module.exports = Card;
