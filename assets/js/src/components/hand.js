import React from 'react';

import Card from './card';
import Emitter from '../config/event-emitter';

const Hand = React.createClass({
  propTypes: {
    user: React.PropTypes.string,
    location: React.PropTypes.string
  },
  getInitialState: function () {
    return {
      hand: []
    };
  },
  componentWillMount: function () {
    Emitter.on('playCard', this.playCard);

    this.setState({
      hand: this.loadHand()
    });
  },
  loadHand: function () {
    const json = [
      { name: '2H' },
      { name: '2S' }
    ];

    return json;
  },
  playCard: function (card) {
    console.log("card played...");
  },
  render: function () {
    let cards = [];

    if (this.state.hand !== null) {
      cards = this.state.hand.map(function (result) {
        return <Card name={ result.name } />
      });
    }

    return (
      <div className={ this.props.location + 'Cards' }>
        { cards }
      </div>
    );
  }
});

module.exports = Hand;
