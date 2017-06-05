import React from 'react';
import Popular from './Popular';
import PropTypes from 'prop-types';

class SelectLanguage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className="languages">
        { languages.map(lang => (
          <li key={lang}
              style={ lang === this.props.selectedLanguage ? {color: 'red'} : null }
              onClick={() => this.props.onSelect(lang)}
          >{lang}</li>
        )) }
      </ul>
    );
  }
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this)
  }
  updateLanguage(selectedLanguage) {
    this.setState({ selectedLanguage });
  }
  render() {
    return (
      <SelectLanguage
        selectedLanguage={this.state.selectedLanguage}
        onSelect={this.updateLanguage}
      />
    );
  }
}