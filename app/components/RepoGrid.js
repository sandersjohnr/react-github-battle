import React from 'react';
import PropTypes from 'prop-types';

const RepoGrid = ({ repos }) => (
  <div>
    <ul className='popular-list'>
      { repos.map((repo, index) => (
        <li
          key={repo.name}
          className='popular-item'>
          <div className='popular-rank'>#{index + 1}</div>
          <ul className='space-list-items'>
            <li>
              <img
                className='avatar'
                src={repo.owner.avatar_url}
                alt={repo.name}
              />
            </li>
            <li><a href={repo.html_url}>{repo.name}</a></li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count}</li>
          </ul>
        </li>
      )) }
    </ul>
  </div>
);

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
};

export default RepoGrid;