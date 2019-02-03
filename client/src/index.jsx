import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.fetch = this.fetch.bind(this);
    // this.search = this.search.bind(this);
    // this.fetch();
  }
// https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount(){
     this.fetch();
  }

  search (term) {
    // axios.post('/repos', {searchterm: term})
    // .then((response) => response.json())
    // .then(response => {
    //   this.fetch();
    // })
    console.log(`${term} was searched`);
    $.ajax({
      url: 'http://localhost:1128/repos',
      method: 'POST',
      contentType: 'text/plain',
      data: term,
      success: (response) => { this.fetch() },
      error: () => console.log('POST error!')
    });
  }

  fetch(){
  //   axios.get('/repos')
  //   .then(response => {
  //     this.setState({repos: response.data})
  //   })
  //   .catch(err => {console.log(err)})

    $.ajax({
        url: 'http://localhost:1128/repos',
        method: 'GET',
        success: (data) => {this.setState({repos: data});},
        error: () => console.log('GET error!')
      });
    }

  render () {
    console.log(this.state.repos);
    return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));