import React from 'react';

import Card from './card';
import Emitter from '../config/event-emitter';

const Hand = React.createClass({
  propTypes: {
    user: React.PropTypes.string,
    location: React.PropTypes.string
  },
  getInitialState: function() {
    return {
      hand: [],
      maxHandWidth : window.innerWidth / 3.5
    };
  },
  componentWillMount: function() {
    window.addEventListener('resize', this.handleResize);

    Emitter.on('playCard', this.playCard);

    this.setState({
      hand: this.loadHand(),
    });
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },
  handleResize: function(e) {
    this.setState({
      maxHandWidth: window.innerWidth / 3.5
    });
  },
  loadHand: function() {
    const json = [
      { key: 1, name: '2H' },
      { key: 2, name: '2S' },//Remove below
      { key: 3, name: '2S' },
      { key: 4, name: '2S' }
    ];

    return json;
  },
  playCard: function(card) {
    console.log("card played...");
  },
  render: function() {
    let cards = [];
    var cardStyles;
    var cardCount = Object.keys(this.state.hand).length,
      cardWidth = this.state.maxHandWidth / cardCount,
      cardSign = cardWidth / 4;

    if (this.state.hand !== null) {
      cards = this.state.hand.map((result) => {
        var trans = "translateX(-" + ((result.key === 1) ? "0" : (((result.key - 1) * cardWidth) - cardSign * (result.key - 1))) + "px)";

        cardStyles = {
            transform : trans,
            zIndex : result.key,
        };

        return <Card key={ result.key } style={ cardStyles } name={ result.name } imgWidth={ cardWidth } />
      });
    }
    var handWidth = (cardCount - 1) * cardSign + cardWidth;
    var innerStyle = {
      width : handWidth,
      display : "flex"
    };

    return (
      <div className={ this.props.location + 'Cards' }>
        <div style = {innerStyle}>
            { cards }
        </div>
      </div>
    );
  }
});

module.exports = Hand;
