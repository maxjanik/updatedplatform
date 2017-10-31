import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Teams extends React.Component {

  constructor() {
      super();
      this.state = {
        pictures: [],
      };
    }


    componentDidMount() {
      fetch(`https://randomuser.me/api/?results=500`)
        .then(results => {
          return results.json();
        }).then(data => {
          let pictures = data.results.map((pic) => {
            return(
              <div>
                <img src={pic.picture.medium}/>
              </div>
            )
            })
            this.setState({pictures: pictures});
            console.log("state", this.state.pictures);

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

export default Teams ;
