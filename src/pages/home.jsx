import React, { Component, Fragment } from "react";
import { IoIosSettings } from "react-icons/io";

import "./home.css";
export class Home extends Component {
  render() {
    return (
      <Fragment>
        <section className="herro">
          <div className="herro-wrapper container">
            <div className="info-wrapper">
              <p>
                <IoIosSettings />
                Improve our customers’ lives by providing effective solutions.
              </p>
              <h2>A recognized leader in services industry</h2>

              <a href="#" className="herro-btn">
                View Services
              </a>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;
