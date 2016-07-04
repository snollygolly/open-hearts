import Socket from 'socket.io-client';

import React from 'react';
import Hand from './hand';
import Card from './card';

const Game = React.createClass({
  propTypes: {
    // Property types would go here
  },
  getInitialState: function () {
    return {
      socket: null
    };
  },
  componentWillMount: function () {
    // Set body's background color.
    document.body.style.backgroundColor = 'darkgreen';

    const socket = Socket();
    const gameId = document.URL.substr(document.URL.lastIndexOf("/") + 1);

    socket.emit("join", {
      game: gameId,
      name: 'Zach'
    });

    this.setState({
      socket: socket
    });
  },
  render: function () {
    return (
      <div>
        <div className="bottomHand">
          <Hand location="bottom" />
        </div>
        <div className="leftHand">
          <Hand location="left" />    
        </div>
        <div className="topHand">
          <Hand location="top" />     
        </div>
        <div className="rightHand">
          <Hand location="right" />   
        </div>

        <div className="bottomPlayArea">
          <div className="bottomPlayCard">
            <Card name="2H" />
          </div>
        </div>

        <div className="leftPlayArea">
          <div className="leftPlayCard">
            <Card name="3H" />
          </div>
        </div>

        <div className="topPlayArea">
          <div className="topPlayCard">
            <Card name="4H" />
          </div>
        </div>

        <div className="rightPlayArea">
          <div className="rightPlayCard">
            <Card name="5H" />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Game;
