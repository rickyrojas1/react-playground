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

      <div className="card text-center" >
        <div className="card-header">
        <strong><h1>{this.props.user.name.first + " " + this.props.user.name.last }  <img src={this.props.user.picture.thumbnail} className="thumbnail"/></h1></strong>
        </div>
        <div className="card-block">
          <div className="left-card">

          <p className="card-text"><strong>Adress:</strong> </p>
          <p className="card-text"><strong>Street:</strong> {this.props.user.location.street}</p>
          <p className="card-text"><strong>City:</strong> {this.props.user.location.city}</p>
          <p className="card-text"><strong>State:</strong> {this.props.user.location.state}</p>
</div>
<div className="right-card">
          <p className="card-text"><strong>Gender:</strong> {this.props.user.gender}</p>
          <p className="card-text"><strong>Email:</strong> {this.props.user.email}</p>
          <p className="card-text"><strong>Cell Phone:</strong> {this.props.user.cell}</p>
          <p className="card-text"><strong>Date of Birth:</strong> {this.props.user.dob}</p>

          </div>

        </div>
        <div className="card-footer text-muted">
          <a href="#" className="btn btn-primary">View Profile</a>
            <a href="#" className="btn btn-primary">Send Message</a>
        </div>
      </div>

  );
  }

}

export default Card;
