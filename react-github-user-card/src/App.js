import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/user-card';
import Followers from './components/followers';

// const data = {
//   "login": "rachelkwaynick",
//   "id": 21144883,
//   "node_id": "MDQ6VXNlcjIxMTQ0ODgz",
//   "avatar_url": "https://avatars1.githubusercontent.com/u/21144883?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/rachelkwaynick",
//   "html_url": "https://github.com/rachelkwaynick",
//   "followers_url": "https://api.github.com/users/rachelkwaynick/followers",
//   "following_url": "https://api.github.com/users/rachelkwaynick/following{/other_user}",
//   "gists_url": "https://api.github.com/users/rachelkwaynick/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/rachelkwaynick/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/rachelkwaynick/subscriptions",
//   "organizations_url": "https://api.github.com/users/rachelkwaynick/orgs",
//   "repos_url": "https://api.github.com/users/rachelkwaynick/repos",
//   "events_url": "https://api.github.com/users/rachelkwaynick/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/rachelkwaynick/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Rachel Waynick",
//   "company": null,
//   "blog": "",
//   "location": "Rogers, AR",
//   "email": null,
//   "hireable": true,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 67,
//   "public_gists": 1,
//   "followers": 3,
//   "following": 4,
//   "created_at": "2016-08-20T16:31:09Z",
//   "updated_at": "2020-10-12T17:06:51Z"
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}, 
      followers: {},
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    axios.get(`https://api.github.com/users/rachelkwaynick`)
      .then(res => {
        this.setState({
          data: res.data
        })
      })
      .catch(err => console.log(err))
    
    axios.get(`https://api.github.com/users/rachelkwaynick/followers`)
      .then(res => {
        console.log(res.data)
        this.setState({
          followers: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        This is app.
        <UserCard
          data={this.state.data}
        />
        <Followers
          followers={this.state.followers}
        />
      </div>
    );
  }
  
}

export default App;
