import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Card from "./Card";

class Youtube extends Component {

  constructor(props) {
    super(props)
    this.state = {
      people: []
    }
  }

  componentDidMount() {

    fetch('https://randomuser.me/api/?results=500').then(res => res.json()).then((data) => {
      console.log(data.results[0]);
      this.setState({people: data.results})
    })

    console.log("hii");

  }

  render() {
    return (<div >
      {
        this.state.people.map((users, i) => <div >
          
          <Card user={users}/>
        </div>)

      }
    </div>)
  }

}

export default Youtube;
