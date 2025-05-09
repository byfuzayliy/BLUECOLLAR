import React, { Component, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

import { MdEmail, MdPhone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import EnterAnimation from "../animations/circle";

import "./header.css";

import logo from "../../../src/assets/images/logo.png";
import WildcardKeyframes from "../animations/wildcard";
import { menu } from "motion/react-client";
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  };
  render() {
    const { menuOpen } = this.state;
    console.log(menuOpen);

    return (
      <header>
        <div className="header-wrapper">
          <div className="header-top">
            <div className="top-info container">
              <span>Opening Hours: 06:00 to 20:00</span>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EnterAnimation>
                    <FaFacebook color="#fff" />
                  </EnterAnimation>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EnterAnimation>
                    <FaTwitter color="#fff" />
                  </EnterAnimation>
                </a>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EnterAnimation>
                    <FaPinterest color="#fff" />
                  </EnterAnimation>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EnterAnimation>
                    <FaInstagram color="#fff" />
                  </EnterAnimation>
                </a>
              </div>
            </div>
          </div>
          <div className="header-herro">
            <div className="container herro-main">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>

              <div className="connect">
                <WildcardKeyframes>
                  <div className="message email">
                    <span className="mconnect">
                      <MdEmail color="2px solid rgb(28, 39, 82)" />
                    </span>
                    <div className="info-us">
                      <p>Mail Us</p>
                      <a href="mailto:Info@bluecollar.com">
                        Info@bluecollar.com
                      </a>
                    </div>
                  </div>
                </WildcardKeyframes>

                <WildcardKeyframes>
                  <div className="message phone">
                    <span className="mconnect">
                      <MdPhone color="2px solid rgb(28, 39, 82)" />
                    </span>
                    <div className="info-us">
                      <p>Call Us</p>
                      <a href="tel:+01569896654">+01 569 896 654</a>
                    </div>
                  </div>
                </WildcardKeyframes>
              </div>
              <button onClick={this.toggleMenu} className="btn-menu">
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
          <nav className={menuOpen ? "show" : "navbar"}>
            <div className="nav container">
              <ul className="list">
                <li>
                  <a className="list-item-link" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="list-item-link" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="list-item-link" href="#">
                    Pages
                  </a>
                </li>
                <li>
                  <a className="list-item-link" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="list-item-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>

              <button className="question-btn">Have Any Question ?</button>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
