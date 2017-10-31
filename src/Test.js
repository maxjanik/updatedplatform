import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Test extends React.Component {

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
          let pictures = data.posts.map((post) => {
            return(
              <div key={post.posts}>
                <h1>{post.post.title}</h1>
                <h2>{post.post.content}</h2>
              </div>
            )
            })
            this.setState({pictures: pictures});
            console.log("state", this.state.posts);

          })
        }

        render() {
          return(

            <div className="container2">
            <div className="container1">
              {this.state.pictures}
            </div>
            </div>
          )
}
}

export default Test;
