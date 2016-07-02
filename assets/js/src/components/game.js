import React from 'react';
import Hand from './hand';
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
    // Set body's background color.
    document.body.style.backgroundColor = 'darkgreen';

    // Events will be emitted in this component
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
