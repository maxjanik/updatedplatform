import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
const API = 'http://www.elludo.com/wp-json/wp/v2/posts';
class Roster extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        id: '2346',
        slug: 'Dog',
        title: 'title',
        link: 'Cat',
        author: 'y'}  }

  fetchProfile(id) {

      let url = `${API}/2346`;
      fetch(url)
        .then((res) => res.json() )
        .then((data) => {
          this.setState({
            id: data.id,
            slug: data.slug,
            title: data.title,
            link: data.link,
            author: data.author,

          })
        })
        .catch((error) => console.log('Oops! . There Is A Problem') )
    }
    componentDidMount() {
      this.fetchProfile(this.state.link);
      this.fetchProfile(this.state.slug);
      this.fetchProfile(this.state.author);
    }
    render() {
      return (
        <div>
        <ul>
<li>{this.state.link}</li>
<li>{this.state.slug}</li>
<li>{this.state.author}</li>
</ul>
</div>
      )
    }
  }

export default Roster;
