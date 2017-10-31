import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import Leaderboard from './components/Leaderboard';

class HomePage extends React.Component {

  constructor() {
      super();
      this.state = {
        posts: [],
      };
    }


    componentDidMount() {
      fetch(`http://sportsjournal.herokuapp.com/posts`)
        .then(results => {
          return results.json();
        }).then(data => {
          let posts = data.posts.map((post) => {
            return(
              <div key={post.posts}>
                  <div className="posttitle">
                      <h1>{post.post.title}</h1>
                  </div>
                  <div className="postcontent">
                      <p>{post.post.content}</p>
                  </div>
                  <div className="posttitle">
                      <p>{post.post.writer}</p>
                  </div>
              </div>
        )})
            this.setState({posts: posts});
            console.log("state", this.state.posts);
        })}

        render() {
          return(
            <div className="container">
              {this.state.posts}
              <Leaderboard />
            </div>

          )}}

export default HomePage;
