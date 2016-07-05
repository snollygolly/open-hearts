import Socket from 'socket.io-client';

import React from 'react';
import Hand from './hand';
import Card from './card';

const Game = React.createClass({
  propTypes: {
    // Property types would go here
  },
  getInitialState: function() {
    return {
      socket: null,
      hand : [
        "bottom",
        "left",
        "top",
        "right"
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

    this.setState({
      socket: socket
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
    var hands = this.state.hand.map((val) =>{
        return(
            <div className = {(val + "Hand")} key = {this.state.hand.indexOf(val)}>
                <Hand location = {val}/>
            </div>
        );
    });
    var playAreas = this.state.hand.map((val) => {
        var loc = this.state.hand.indexOf(val);
        return(
            <div className = {(val + "PlayArea")} key = {((loc+1)*10)}>
                <div className = {(val + "PlayCard")}>
                    <Card name = {(this.state.cardSigns[loc])}/>
                </div>
            </div>
        );
    });
    return (
      <div>
        {hands}
        {playAreas}
      </div>
    );
  }
});

module.exports = Game;
