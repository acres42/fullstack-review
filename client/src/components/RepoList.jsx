import React from 'react';
import RepoListItem from './RepoListItem.jsx';

const RepoList = (props) => (
  <div>
    <h4> Top 25 Repositories </h4>
    <table>
      <tbody>
        <tr>
          <th>REPO OWNER</th>
          <th>REPO NAME</th>
          <th>REPO LINK</th>
          <th>STARGAZERS</th>
        </tr>
        {props.repos.map((item, i) => {
          return <RepoListItem repo={item} key={i}/>
        })}
      </tbody>
    </table>
  </div>
)

export default RepoList;