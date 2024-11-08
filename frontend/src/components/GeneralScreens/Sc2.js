import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import be from "../../Assets/be.webp";
import de from "../../Assets/de.webp";
import TestimonialSlider from "./Testimonies";
import email from "../../Assets/email.webp";
import Red from "./Red";

export default function Sc2() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email.trim() === "") {
      alert("Please enter your email address.");
    } else {
      alert(`Thank you for subscribing to our newsletter, ${email}`);
      setEmail("");
    }
  };

  return (
    <Styles>
      <Container>
        <Row className="rowa">
          <Col md={12} className="text-center">
            <FiMail color="white" size={50} />
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <div className="subscribe-form">
              <input
                type="email"
                placeholder="Your Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="submit-button" onClick={handleSubmit}>
                Submit
              </div>
            </div>

            <div className="checkboxes">
              <div className="checkbox">
                <input type="checkbox" id="bogs-newsletter" />
                <label htmlFor="bogs-newsletter">
                  Sign me up to our newsletter
                </label>
              </div>
              <div className="checkbox">
                <input type="checkbox" id="third-party-offers" />
                <label htmlFor="third-party-offers">
                  Send me offers and promotions!!
                </label>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="content-row">
          <Col md={12} lg={6}>
            <img src={de} alt="Advice" />
          </Col>
          <Col md={12} lg={6}>
            <h2>Kids and dogs: tips for unproblematic friendship</h2>
            <p>
              Research shows that contact between kids and dogs has many
              benefits, both physical and emotional. Learning how to care for a
              dog and understanding the responsibility involved is invaluable
              for kids. Children can even learn how to cope with loss when the
              time comes for their pet to leave them. Children and dogs are a
              great mix for other reasons too: dogs can provide companionship, a
              playmate, and even therapeutic support in times of trouble or
              illness.
            </p>
            <p className="read-more">read more</p>
            <hr />
          </Col>
        </Row>

        <Row className="content-row">
          <Col md={12} lg={6}>
            <img src={be} alt="News" />
          </Col>
          <Col md={12} lg={6}>
            <h2>Dog health issues by breed type</h2>
            <p>
              Dog health issues by breed type Dogs Health General Breed Facts
              Health & Safety •10 March 2023 Dr Lizzie Youens BSc(Hons) BVSc
              Dogs have evolved a long way from their wild ancestors, and are
              now a truly diverse species, coming in a huge variety of sizes,
              body shapes, coat types, features and personalities. Both humans
              and dogs have benefitted from canine domestication (they are man’s
              best friend, after all!), but the rigorous selection of certain
              genetic traits has its downsides. Many of our most popular breeds
              today have certain physical features that bring some associated
              health issues.
            </p>
            <p className="read-more">read more</p>
            <hr />
          </Col>
        </Row>
        <Red />
        <center>
          <p style={{ fontSize: "1.7rem", fontWeight: "700" }}>
            What they say about us
          </p>
        </center>
        <TestimonialSlider />
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
  .rowa {
    background-color: #212527;
    color: white;
    padding: 2rem 1rem;
    border-radius: 8px;
    margin: 1rem auto;
    max-width: 800px; /* Adjust width for larger screens */
  }

  .subscribe-form {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }

  input[type="email"] {
    width: 60%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 3px;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;
    margin-right: 1rem;
  }

  .submit-button {
    padding: 0.55rem;
    background-color: #ff9900;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
  }

  .checkboxes {
    margin-top: 1rem;
  }

  .checkbox {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .checkbox input {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }

  .content-row {
    padding: 1rem 0;
    display: flex;
    align-items: center;
  }

  img {
    width: 100%;
    border-radius: 3px;
  }

  h2 {
    font-size: 1.6rem;
    margin-top: 1rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
  }

  .read-more {
    font-weight: 700;
    color: #ff9900;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    .rowa {
      max-width: 1200px; /* Adjust the width for larger screens */
    }

    .subscribe-form input[type="email"] {
      width: 50%;
    }
  }
`;
