import React from 'react';

const Hand = React.createClass({
  propTypes: {
    user: React.PropTypes.string
  },
  getInitialState: function () {
    return {
      hand: []
    };
  },
  componentWillMount: function () {
    document.body.style.backgroundColor = 'darkgreen';

    this.setState({
      card: './assets/images/cards/' + CardList[0][this.props.name]
    });

    console.log(this.state.card);
  },
  render: function () {
    return (
      <div>
        <img src={ this.state.card }></img>
      </div>
    );
  }
});

module.exports = Hand;
