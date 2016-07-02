import React from 'react';

import CardList from '../../../../models/data/cards.json';
import CardBackList from '../../../../models/data/cardBacks.json';

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
      card: './assets/images/cards/' + ((this.props.name == 'CardBack_blue5') ? CardBackList[this.props.name] : CardList[this.props.name])
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
