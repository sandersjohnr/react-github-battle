import React from 'react';
import PropTypes from 'prop-types';
import PlayerInput from './PlayerInput';

const PlayerAvatar = ({ name, image }) => {
  return (
    <div>
      <img className='avatar' src={image} alt={image}/>
      <h3>{name}</h3>
    </div>
  );
};

PlayerAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

class Battle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(id, username) {
    this.setState(() => {
      const newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = `https://github.com/${username}.png?size=200`;
      return newState;
    });
  }
  render() {
    const {
      playerOneName, playerOneImage,
      playerTwoName, playerTwoImage
    } = this.state;

    return (
      <div className='battle-container'>
        <div className='row'>
          { !playerOneName
            ? <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit}/>
            : <PlayerAvatar name={playerOneName} image={playerOneImage}/>}
          { !playerTwoName
            ? <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit}/>
            : <PlayerAvatar name={playerTwoName} image={playerTwoImage}/>}
        </div>
      </div>
    );
  }
}

export default Battle;