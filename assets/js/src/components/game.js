import Socket from 'socket.io-client';

import React from 'react';
import Hand from './hand';
import Card from './card';

var Radium = require('radium');

const Game = React.createClass({
  propTypes: {
    // Property types would go here
  },
  getInitialState: function() {
    return {
      socket: null,
      gameConfig : {
          playerCount : 4,
          deckSize : 52,
          sizeRatio : 1.2,
          heightRatio : 1.357142857142857,
          signRatio : 4,
          gameHeight : window.innerHeight - document.getElementById("navBar").clientHeight,
      },
      hand : [
        "top",
        "right",
        "bottom",
        "left"
      ],
      cardSigns : [
        "2H",
        "3H",
        "4H",
        "5H",
      ],
    };
  },
  componentWillMount: function() {
    // Set body's background color.
    document.body.style.backgroundColor = 'darkgreen';
    const socket = Socket();
    const gameId = document.URL.substr(document.URL.lastIndexOf("/") + 1);

    socket.emit("join", {
      game: gameId,
      name: 'Zach'
    });

    this.createListeners(socket);

    var maxHandWidth = window.innerWidth / this.state.gameConfig.sizeRatio,
        cards = this.state.gameConfig.deckSize / this.state.gameConfig.playerCount,
        signSize = (maxHandWidth / cards) / this.state.gameConfig.signRatio;
    this.setState({
      socket: socket,
      maxHandWidth,
      maxCardWidth : maxHandWidth / cards,
      maxCardHeight : (maxHandWidth / cards) * this.state.gameConfig.heightRatio,
      signSize,
    });
  },
  createListeners: function(socket) {
    socket.on('onJoin', this.handleJoin);
    socket.on('onError', this.handleError);
  },
  handleReceiveCard: function() {

  },
  handleSendCard: function() {

  },
  handleJoin: function(data) {
    console.log(data);
  },
  handleError: function(err) {
    console.log(err);
  },
  render: function() {
    var cardStyles = [
        {
            transform : "rotate(0deg) translate(0px,0px)",
            zIndex : 1,
        },
        {
            transform : "rotate(90deg) translate(" + this.state.signSize * 2 + "px,-" + this.state.signSize * 2 + "px)",
            zIndex : 2,
        },
        {
            transform : "rotate(180deg) translate(" + 0 + "px,-" + this.state.signSize * 4 + "px)",
            zIndex : 3,
        },
        {
            transform : "rotate(270deg) translate(-" + this.state.signSize * 2 + "px,-" + this.state.signSize * 2 + "px)",
            zIndex : 4,
        }
    ];

    var hands = this.state.hand.map((val) =>{
        return(
            <div className = {(val + "Hand")} key = {this.state.hand.indexOf(val)}>
                <Hand location = {val} settings = {{
                    maxHandWidth : this.state.maxHandWidth,
                    maxCardWidth : this.state.maxCardWidth,
                    signSize : this.state.signSize,
                }}/>
            </div>
        );
    }),
    playAreas = this.state.hand.map((val) => {
        var loc = this.state.hand.indexOf(val);
        //console.log(loc,cardStyles[loc]);
        return(
            <Card className = {(val + "PlayerCard")} name = {(this.state.cardSigns[loc])} key = {((loc+1)*10)} imgWidth = {this.state.maxCardWidth} style = {cardStyles[loc]}/>
        );
    }),
    innerStyle = {
        transform : "translate(" + ((window.innerWidth / 2) -(this.state.maxCardWidth / 2)) + "px," +((this.state.gameConfig.gameHeight / 2) - (this.state.maxCardHeight)) + "px)",
    };

    return (
      <div>
        {hands}
            <div className = "innerPlayArea" style = {innerStyle}>
                {playAreas}
            </div>
      </div>
    );
  }
});

module.exports = Game;
