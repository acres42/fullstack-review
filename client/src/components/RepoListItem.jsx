import React from 'react';

const RepoListItem = (props) => (
  <tr>
    <td>{props.repo.owner_login}</td>
    <td>{props.repo.name}</td>
    <td><a href={props.repo.html_url}>{props.repo.html_url}</a></td>
    <td>{props.repo.stargazers_count}</td>
  </tr>
)

export default RepoListItem;