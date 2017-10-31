import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
const API = 'http://sportsjournal.herokuapp.com/posts';
class Schedule extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        id: '',
        content: '',
        title: '',
        sport: '',
        user_id: '',
        score: '',
        writer: '',
        date: '',
      }  }

  fetchProfile(id) {

      let url = `${API}/1`;
      fetch(url)
        .then((res) => res.json() )
        .then((data) => {
          this.setState({
            id: data.post.id,
            content: data.post.content,
            title: data.post.title,
            sport: data.post.sport,
            score: data.post.score,
            writer: data.post.writer,
            date: data.post.created_at,

          })
        })
        .catch((error) => alert(error) )
    }
    componentDidMount() {
      this.fetchProfile(this.state.id);

    }
    render() {
      return (
        <div className="post">
            <div className="title">
              {this.state.title}
            </div>
            <div className="meta">
              by:&nbsp;{this.state.writer}&nbsp;&nbsp;on:&nbsp;&nbsp;{this.state.date}
            </div>
            <div className="category">
              Sorted under: {this.state.sport}
            </div>
            <div className="content">
            {this.state.content}
            </div>
        </div>
      )
    }
  }

export default Schedule;
