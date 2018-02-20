import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import dev from "../img/dev.png";

class First extends Component {





onMouseClick(){




  }






  render() {


    return (
      <section id="showcase">

          <div className="row">
            <div className="col-xl-6 col-centered">

              <h1>React Developer</h1>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <button type="button" onClick={this.onMouseClick} className="btn btn-outline-danger">Get API Stuff</button>
            </div>
            <div className="col-xl-6 col-centered">
              <img src={dev} className="laptop"/>
            </div>
          </div>

      </section>
    );
  }
}

export default First;
