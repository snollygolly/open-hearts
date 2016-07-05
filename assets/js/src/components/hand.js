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
<<<<<<< HEAD
      maxHandWidth : window.innerWidth/3.5,
=======
      maxHandWidth : window.innerWidth / 3.5
>>>>>>> 012cfc2b2fd76fc1f2ed5d9421700afbf70f1038
    };
  },
  componentWillMount: function() {
    window.addEventListener('resize', this.handleResize);

    Emitter.on('playCard', this.playCard);
    this.setState({
      hand: this.loadHand(),
<<<<<<< HEAD
    });
},
  loadHand: function () {
=======
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
>>>>>>> 012cfc2b2fd76fc1f2ed5d9421700afbf70f1038
    const json = [
      { key: 1, name: '2H' },
      { key: 2, name: '2S' },//Remove below
      { key: 3, name: '2S' },
      { key: 4, name: '2S' }
<<<<<<< HEAD
=======
    ];
>>>>>>> 012cfc2b2fd76fc1f2ed5d9421700afbf70f1038

    ];
    return json;
  },
  playCard: function(card) {
    console.log("card played...");
  },
<<<<<<< HEAD
  render: function () {
     /* this.setState({
          cardCount : Object.keys(this.state.hand).length,
          cardWidth : this.state.maxHandWidth/this.state.cardCount,
          cardSign : this.state.cardWidth/5
      });*/
    let cards = [];
    var cardStyles;
    var cardCount = Object.keys(this.state.hand).length,
        cardWidth = this.state.maxHandWidth/cardCount,
        cardSign = cardWidth/4;
    if (this.state.hand !== null) {
      cards = this.state.hand.map((result) =>{

          var trans = "translateX(-" + ((result.key === 1) ? "0" : (((result.key-1) * cardWidth) - cardSign * (result.key-1))) + "px)";
         // console.log(this.state);
          cardStyles = {
              transform : trans,
              zIndex : result.key,
          };
        return <Card key={ result.key } style = {cardStyles} name={ result.name } imgWidth = {cardWidth} />
      });
    }
    var handWidth = (cardCount-1) * cardSign + cardWidth;
    var innerStyle = {
        width : handWidth,
        display : "flex"
    }
=======
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

>>>>>>> 012cfc2b2fd76fc1f2ed5d9421700afbf70f1038
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
