import React from 'react';
import PropTypes from 'prop-types';


class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ username: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  }

  render() {
    const { label } = this.props;

    return (
      <form className='column' onSubmit={this.handleSubmit.bind(this)}>
        <label className='header' htmlFor="username">
          {label}
        </label>
        <input
          type="text"
          id='username'
          placeholder='github username'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange.bind(this)}/>
        <button
          className='button'
          type='submit'
          disabled={!this.state.username}
        >Submit</button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PlayerInput;
