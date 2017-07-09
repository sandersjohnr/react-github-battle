import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';
import RepoGrid from './RepoGrid';

const SelectLanguage = (props) => {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="languages">
      { languages.map(lang => (
        <li key={lang}
            style={ lang === props.selectedLanguage ? {color: 'red'} : null }
            onClick={() => props.onSelect(lang)}
        >{lang}</li>
      )) }
    </ul>
  );
};

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState({
      selectedLanguage: lang,
      repos: null
    });

    api.fetchPopularRepos(lang)
      .then(repos => this.setState({ repos }));
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage.bind(this)}
        />
        { !this.state.repos
        ? 'Loading ...'
        : <RepoGrid repos={this.state.repos}/> }
      </div>
    );
  }
}