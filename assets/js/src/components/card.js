import React from 'react';

import CardList from '../../../../models/data/cards.json';
import CardBackList from '../../../../models/data/cardBacks.json';

const Card = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    style: React.PropTypes.object,
    imgWidth: React.PropTypes.number
  },
  getInitialState: function () {
    return {
      card: null
    };
  },
  componentWillMount: function () {
    document.body.style.backgroundColor = 'darkgreen';

    this.setState({
      card: '../assets/images/cards/' + ((this.props.name == 'CardBack_blue5') ? CardBackList[this.props.name] : CardList[this.props.name])
    });
  },
  render: function () {
    var imgStyle = {
        width : this.props.imgWidth
    }
    
    return (
      <div style = {this.props.style}>
        <img src={ this.state.card } style={ imgStyle }></img>
      </div>
    );
  }
});

module.exports = Card;
