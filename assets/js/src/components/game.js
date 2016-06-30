import React from 'react';

var Game = React.createClass({
  propTypes: {
    // Property types would go here
  },
  getInitialState: function () {
    return {
      // State variables go here
    };
  },
  componentWillMount: function () {
    document.body.style.backgroundColor = 'darkgreen';
  },
  render: function () {
    return (
      <div>
        <h1>HEARTS!/h1>
      </div>
    );
  }
});

module.exports = Game;
