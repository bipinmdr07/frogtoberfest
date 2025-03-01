import React from 'react';
import PropTypes from 'prop-types';
import dateFormatter from '../../../../../utils/dateFormater';

const PullRequestInfo = ({ pullRequest }) => (
  <div>
    <div className="text-grey-darker">
      <a className="text-grey-darker font-semibold link no-underline hover:underline" href={pullRequest.user.html_url}>
        {pullRequest.user.login}
      </a>{' '}
      submitted a pull request{' '}
      <a className="text-blue-dark link no-underline hover:underline" href={pullRequest.html_url}>
        {pullRequest.repository_url.split('repos/')[1]}#{pullRequest.number}
      </a>
    </div>
    <div className="text-grey-dark">
      {pullRequest.title} on {dateFormatter(pullRequest.created_at)}
    </div>
  </div>
);

// TODO: Convert to camelCase and enable camelcase rule.
PullRequestInfo.propTypes = {
  pullRequest: PropTypes.shape({
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired, // eslint-disable-line camelcase
    repository_url: PropTypes.string.isRequired, // eslint-disable-line camelcase
    created_at: PropTypes.string.isRequired, // eslint-disable-line camelcase
    user: PropTypes.shape({
      login: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired // eslint-disable-line camelcase
    }).isRequired
  })
};

export default PullRequestInfo;
