import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
const API = 'https://api.github.com/users';
class Roster extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        username: 'hesmaili',
        name:'',
        avatar:'',
        location:'',
        repos:'',
        followers: '',
        following:'',
        homeUrl:'',
        notFound:''
      }
    }
    fetchProfile(username) {
      let url = `${API}/${username}`;
      fetch(url)
        .then((res) => res.json() )
        .then((data) => {
          this.setState({
            username: data.login,
            name: data.name,
            avatar: data.avatar_url,
            location: data.location,
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            homeUrl: data.html_url,
            notFound: data.message
          })
        })
        .catch((error) => console.log('Oops! . There Is A Problem') )
    }
    componentDidMount() {
      this.fetchProfile(this.state.username);
    }
    render() {
      return (
        <div>
           <section id="card">
             <Profile data={this.state} />
           </section>

        </div>
      )
    }
  }

class Profile extends React.Component {
    render() {
      let data = this.props.data;
      let followers = `${data.homeUrl}/followers`;
      let repositories = `${data.homeUrl}?tab=repositories`;
      let following = `${data.homeUrl}/following`;
      if (data.notFound === 'Not Found')
        return (
           <div className="notfound">
              <h2>Oops !!!</h2>
              <p>The Component Couldnt Find The You Were Looking For . Try Again </p>
           </div>
        );
        else
        return (
          <section className="github--profile">
            <div className="github--profile__info">
              <a href={data.homeUrl} target="_blank" title={data.name || data.username}><img src={data.avatar} alt={data.username}/></a>
              <h2><a href={data.homeUrl} target="_blank">{data.name}</a></h2>

            </div>
            <div className="github--profile__state">
              <ul>
                 <li>
                    <a href={followers} target="_blank" title="Number Of Followers"><i>{data.followers}</i><span>Followers</span></a>
                 </li>
                 <li>
                    <a href={repositories} target="_blank" title="Number Of Repositoriy"><i>{data.repos}</i><span>Repositoriy</span></a>
                 </li>
                 <li>
                    <a href={following} target="_blank" title="Number Of Following"><i>{data.following}</i><span>Following</span></a>
                 </li>
              </ul>
            </div>
          </section>
        );
    }
  }

export default Roster;
