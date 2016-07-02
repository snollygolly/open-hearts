import React from 'react';
import Card from './card';

const Game = React.createClass({
  propTypes: {
    // Property types would go here
  },
  getInitialState: function () {
    return {
      // State variables go here
    };
  },
  componentWillMount: function () {
    // Set body's background color
    document.body.style.backgroundColor = 'darkgreen';
  },
  render: function () {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <div className="bottomHand">
          <div className="bottomCards">
            <Card name="2H" />
            <Card name="2H" />
          </div>
        </div>
        <div className="leftHand">
          <div className="leftCards">
            <Card name="CardBack_blue5" />
          </div>      
        </div>
        <div className="topHand">
          <div className="topCards">
            <Card name="CardBack_blue5" />
          </div>      
        </div>
        <div className="rightHand">
          <div className="rightCards">
            <Card name="CardBack_blue5" />
          </div>      
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
