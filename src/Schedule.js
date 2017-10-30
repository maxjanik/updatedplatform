import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
const API = 'http://www.elludo.com/wp-json/wp/v2/posts';
class Schedule extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        id: '',
        slug: '',
        title: '',
        link: '',
        author: ''}  }

  fetchProfile(id) {

      let url = `${API}/${id}`;
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
      this.fetchProfile(this.state.id);

    }
    render() {
      return (
        <div>
        <ul>
<li>{this.state.slug}</li>
</ul>
</div>
      )
    }
  }

export default Schedule;
