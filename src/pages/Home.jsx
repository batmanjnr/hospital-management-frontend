import React from "react";
import img from "../assets/first1.png";
import appoint from "../assets/appoint.JPG";
import expert1 from "../assets/expert1.png";
import expert2 from "../assets/expert2.png";
import expert3 from "../assets/expert3.jpg";
import "../styles/home.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="headdiv">
        <div className="headword">
          <div className="headword1">
            <h4>Compassionate, expert medical care  personalized for you</h4>
            <p>
              Personalized treatments and modern facilities to support your
              long-term health and wellbeing.
            </p>
            <div className="buttondiv">
              <button className="button1">Get Started</button>
              <button className="button2">View Services</button>
              <button className="button3">Book Appointment</button>
            </div>
          </div>
          <div className="headwhite">
            <div>
              <h2>24/7</h2>
              <p>Emergency Service</p>
            </div>
            <div className="boxwhite">
              <h2>4.9</h2>
              <p>Average Rating</p>
            </div>
            <div className="boxwhite1">
              <h2>150+</h2>
              <p>award winning</p>
            </div>
          </div>
        </div>
        <img src={img} alt="" className="headimg" />
      </header>

      {/* second paragraph */}
      <div className="second">
        <img src={appoint} alt="" />
        <div className="secondword">
          <h4>Book your appointment with our specialists</h4>
          <p>
            Schedule a consultation with our experienced medical team for
            quality, compassionate care.
          </p>
          <Link to="/appointment">
            <button>Book Appointment ⇥</button>
          </Link>
        </div>
      </div>

      {/* third paragraph */}
      <div className="third">
        <h2>OUR EXPERTS </h2>
        <p>Faces Of Some Expertise</p>
        <div className="thirdimg">
          <div className="div1">
            <img src={expert1} alt="" />
            <h1>Dr. Stephen Areo</h1>
            <p>Chief Consultant</p>
          </div>
          <div className="div2">
            <img src={expert2} alt="" />
            <h1>Dr.Ajala Promise</h1>
            <p>Medical Director</p>
          </div>
          <div className="div3">
            <img src={expert3} alt="" />
            <h1>Dr. Ajala Peace</h1>
            <p>Chief Neurosurgeon</p>
          </div>
        </div>
      </div>

      {/* fourth paragraph */}

      {/* services section: 10 small boxes */}
      <section className="services-section">
        <div className="service-grid">
          {[
            "Dental Care",
            "Radiology",
            "Cardiology",
            "Pediatrics",
            "Orthopedics",
            "Neurology",
            "Laboratory",
            "Pharmacy",
            "Emergency",
            "Physiotherapy",
          ].map((service) => (
            <div className="service-box" key={service}>
              <div className="icon">
                {service
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="service-title">{service}</div>
              <div className="service-sub">
                Learn more about {service.toLowerCase()}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
