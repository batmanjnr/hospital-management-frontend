import React, { useState } from "react";
import "../styles/appoint.css";
import doctor from "../assets/doc.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Appointment = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAppointment = (e) => {
    e.preventDefault();
    setLoading(true);
    const patientData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      homeAddress,
    };
    axios
      .post("http://localhost:3700/patient/appointment", patientData)
      .then(() => {
        setLoading(false);
        toast.success("Email Sent");
        // clear all inputs after showing toast
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setHomeAddress("");
        setTimeout(() => navigate("/appointment"), 800);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.response || err);
        toast.error("Error !");
      });
  };
  return (
    <>
      <div className="formdiv">
        <img src={doctor} alt="" className="doctor" />

        <form className="appointmentform" onSubmit={handleAppointment}>
          <h3>BOOK YOUR APPOINTMENT </h3>
          <div>
            <span>First Name</span>
            <input
              type="text"
              placeholder="John"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div>
            <span>Last Name</span>
            <input
              type="text"
              placeholder="Steve"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div>
            <span>PhoneNumber</span>
            <input
              type="tel"
              placeholder="081*********1"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div>
            <span>Email Address</span>
            <input
              type="email"
              placeholder="example@gmail.com"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <span>Home Address</span>
            <input
              type="text"
              placeholder="address"
              name="homeAddress"
              value={homeAddress}
              onChange={(e) => {
                setHomeAddress(e.target.value);
              }}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Kindly wait..." : "BOOK APPOINTMENT"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Appointment;
