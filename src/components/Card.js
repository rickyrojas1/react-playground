import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    gender: "male"
  };
  componentDidMount() {}

  render() {
    return (

      <div className="card text-center">
        <div className="card-header">
        <h1>{this.props.user.name.first + " " + this.props.user.name.last} </h1>
        </div>
        <div className="card-block">
          <h4 className="card-title">The Gender is: {this.props.user.gender}</h4>
          <p className="card-text">The Cell Phone is: {this.props.user.cell}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div>
      </div>

  );
  }

}

export default Card;
