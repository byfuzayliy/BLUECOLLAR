import { Component, Fragment } from "react";
import { IoIosSettings } from "react-icons/io";
import { RiUserSettingsLine } from "react-icons/ri";
import { BsBuildingsFill, BsBuildingFillGear } from "react-icons/bs";
import { RiBuilding2Line } from "react-icons/ri";

import provide from "../../src/assets/images/provide.png";

import electricalImage from "../assets/images/electrical.png";

import "./home.css";

import styles from "./commercial.module.css";
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
        <section className="experience">
          <div className="container experience-wrapper">
            <div className="provide-img">
              <img src={provide} alt="" />
            </div>

            <div className="experience-info">
              <p className="quotis">
                {" "}
                <span>
                  <RiUserSettingsLine color="rgb(255, 179, 66)" />
                </span>
                Welcome BlueCollar
              </p>
              <h3>We Provide Your Future</h3>
              <p className="info-text">
                Bluecollar Electrical services was established in 2008. We are
                trusted and reliable electricians who serve customers in the
                city as well as throughout United States Of America.
              </p>
              <br />
              <p className="info-text">
                {" "}
                We have extensive experience of domestic and business electrical
                installations and no job is too small. Our customers value our
                professionalism, work ethic and our competitive prices.
              </p>

              <div className="card-info">
                <span className="card-value">
                  <h4>35</h4>
                  <p>Years Of Experience</p>
                </span>

                <div className="card-offer">
                  <p>- For all your system requirements</p>
                  <p>- All work undertaken by qualified</p>
                  <p>- Experienced office staff on hand</p>
                  <p>- A Full Guarantee On Workmanship</p>
                  <p>- Properties at a reasonable price.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.commercial}>
          <div className={`${styles.commercialWrapper} , container`}>
            <span className={styles.offer}>
              <RiUserSettingsLine />
              What We Offer
            </span>

            <h3 className={styles.heading}>Professional Main Services</h3>
            <p className={styles.infoOffer}>
              We have extensive experience of domestic and business electrical
              installations and no job is <br /> too small. Our customers value
              our professionalism, work ethic and our competitive prices.
            </p>

            <div className={styles.merchOffer}>
              <div className={styles.listOfOffer}>
                <span>
                  <BsBuildingsFill />
                </span>
                <h4>Commerical</h4>
              </div>
              <div className={styles.listOfOffer}>
                <span>
                  <BsBuildingFillGear />
                </span>
                <h4>Residential</h4>
              </div>
              <div className={styles.listOfOffer}>
                <span>
                  <RiBuilding2Line />
                </span>
                <h4>Indestrial</h4>
              </div>
            </div>

            <div className={styles.electrical}>
              <div className={styles.electricalInfo}>
                <p>
                  <span>
                    <BsBuildingsFill />
                  </span>
                  Electrical installation
                </p>

                <h3>Commercial</h3>

                <p className={styles.infoText}>
                  Electrical & Maintenance Services Ltd offers a full range of
                  electrical services to suit your needs – from moving a light
                  switch to complete house rewires.
                </p>

                <br />

                <p className={styles.infoText}>
                  In addition to providing fully qualified, competent
                  electricians in and around London, the company also runs an
                  electrical wholesale shop.
                </p>

                <button className={styles.offerBtn}>Read More</button>
              </div>

              <div className={styles.electricalImage}>
                <img src={electricalImage} alt="" />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;
