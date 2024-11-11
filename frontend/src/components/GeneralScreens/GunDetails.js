import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import gunsData from "./gunsData";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiMail, FiHeart } from "react-icons/fi";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
};
// shihtzupuppy4adoption@gmail.com
// shihtzupuppy4adoption@gmail.com
// shihtzupuppy4adoption@gmail.com
// shihtzupuppy4adoption@gmail.com
// shihtzupuppy4adoption@gmail.com
export default function GunDetails() {
  const [like, setLike] = useState(false);
  const handleLike = () => setLike(!like);

  const handleEmailClick = () => {
    const email = "shihtzupuppyforadoption@gmail.com";
    const subject = `Purchase of ${gun.name}`;
    const body =
      `Dear Shih Tzu 4 Adoption Team,\n\n` +
      `I am interested in adopting ${gun.name} as part of my family\n\n` +
      `Could you please provide more details regarding its availability and delivery arrangements?\n\n` +
      `Thank you!\n\n` +
      `[Your Name]`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const { name } = useParams();
  const gun = gunsData.find(
    (g) => g.name.replace(/\s+/g, "-").toLowerCase() === name.toLowerCase()
  );

  if (!gun) {
    return (
      <GunNotFoundStyles>
        <h2>Gun not found</h2>
        <Link to="/all-pets" className="back-link">
          Go back to listings
        </Link>
      </GunNotFoundStyles>
    );
  }

  const relatedGuns = gunsData.filter(
    (g) => g.category === gun.category && g.name !== gun.name
  );

  return (
    <GunDetailsStyles>
      <div className="carousel-wrapper">
        <Slider {...sliderSettings}>
          {gun.images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={gun.name} className="carousel-img" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="details-content">
        <h1 className="name">{gun.name}</h1>
        <p className="description">{gun.description}</p>
        <div className="info">
          <div className="info-left">
            <p>
              <strong style={{ color: "#ff9900" }}>Category:</strong>{" "}
              {gun.category}
            </p>
            <p>
              <strong style={{ color: "#ff9900" }}>Sex:</strong> {gun.sex}
            </p>
            <p>
              <strong style={{ color: "#ff9900" }}>Age:</strong> {gun.age}
            </p>
            <p>
              <strong style={{ color: "#ff9900" }}>Price:</strong> {gun.price}
            </p>
          </div>
          <div className="info-right">
            <p>
              <strong style={{ color: "#ff9900" }}>Health:</strong> Regularly Vetted
            </p>
            <p>
              <strong style={{ color: "#ff9900" }}>Vaccination:</strong> Up to date
            </p>
          </div>
        </div>
      </div>

      <div className="hero-box">
        <FiHeart
          onClick={handleLike}
          style={{
            color: like ? "#ff9900" : "black",
            fill: like ? "#ff9900" : "none",
            fontSize: "2.4rem",
            cursor: "pointer"
          }}
        />
        <div className="block" onClick={handleEmailClick}>
          <FiMail
            style={{ fontSize: "2.4rem", marginRight: "1.5rem" }}
            className="mail"
          />
          <button className="send">Message</button>
        </div>
      </div>

      {relatedGuns.length > 0 && (
        <RelatedGunsStyles>
          <h2>You May Also Love</h2>
          <div className="horizontal-scroll">
            {relatedGuns.map((relatedGun, index) => (
              <Link
                key={index}
                to={`/pet/${relatedGun.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="related-gun-card"
              >
                <img
                  src={relatedGun.images[0]}
                  alt={relatedGun.name}
                  className="related-gun-img"
                />
                <div className="related-gun-info">
                  <p className="related-gun-name">{relatedGun.name}</p>
                  <p className="related-gun-price">{relatedGun.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </RelatedGunsStyles>
      )}
    </GunDetailsStyles>
  );
}

const GunDetailsStyles = styled.div`
  margin: 2rem auto;
  max-width: 1000px; /* Reduced for larger screens */
  font-family: "Arial", sans-serif;
  overflow-x: hidden;

  .carousel-wrapper {
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 2.5rem;
    overflow: hidden;
  }

  .carousel-img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 2px;
    transition: transform 0.3s ease-in-out;
  }

  .carousel-img:hover {
    transform: scale(1.05);
  }

  .details-content {
    width: 100%;
    text-align: left;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  .name {
    font-size: 2rem; /* Slightly reduced for larger screens */
    font-weight: 700;
    margin-bottom: 1rem;
    color: #333;
  }

  .description {
    font-size: 1.1rem; /* Slightly reduced for larger screens */
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: #555;
  }

  .info {
    display: flex;
    flex-direction: row;
    font-size: 1rem; /* Slightly reduced for larger screens */
    font-weight: 400;
    color: #333;
    justify-content: space-around;
  }

  .info-left {
    padding-bottom: 1rem;
  }

  .info-left p {
    margin: 0.5rem 0;
  }

   .info-right {
    padding-bottom: 1rem;
  }

  .info-right p {
    margin: 0.5rem 0;
  }

  .hero-box {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 600px;
    background-color: #f0f0f0;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    text-align: center;
    padding: 15px;
    font-size: 1.2rem; /* Slightly reduced for larger screens */
    font-weight: bold;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
  }

  .mail {
    color: black;
    transition: 1.5s;
  }

  .send {
    background-color: #ff9900;
    transition: 1.5s;
    border: none;
    padding: 0.5rem;
    border-radius: 6px;
  }

  .block:hover {
    .mail {
      color: #ff9900;
      transition: 1.5s;
    }
    .send {
      background-color: black;
      color: white;
      transition: 1.5s;
    }
  }

  @media (max-width: 768px) {
    .carousel-img {
      height: 250px;
    }

    .name {
      font-size: 1.5rem;
    }

    .description {
      font-size: 1.2rem;
      font-weight: 600;
    }

    .info-left p {
      font-size: 1.3rem;
    }
       .info-right p {
      font-size: 1.3rem;
    }
  }
`;

const GunNotFoundStyles = styled.div`
  text-align: center;
  margin: 2rem auto;
  font-family: "Arial", sans-serif;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  .back-link {
    font-size: 1rem;
    color: #007bff;
    text-decoration: none;
  }

  .back-link:hover {
    text-decoration: underline;
  }
`;

const RelatedGunsStyles = styled.div`
  margin-top: 2rem;
  background-color: #f0f0f0;
  padding: 1rem 0;

  h2 {
    margin: 1rem 0;
    font-size: 1.5rem;
    color: #333;
    font-weight: bold;
    text-align: center;
  }

  .horizontal-scroll {
    display: flex;
    overflow-x: auto;
    padding: 1rem 0;
    gap: 1rem;
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */
  }

  /* Hide scrollbar for Chrome, Safari, and Opera */
  .horizontal-scroll::-webkit-scrollbar {
    display: none;
  }

  .related-gun-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;
    min-width: 180px; /* Reduced width */
    padding: 15px;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .related-gun-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .related-gun-img {
    width: 160px; /* Reduced width */
    height: 120px; /* Reduced height */
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }

  .related-gun-info {
    text-align: center;
  }

  .related-gun-name {
    font-size: 1rem; /* Adjusted font size */
    color: #333;
    margin: 0.5rem 0;
  }

  .related-gun-price {
    font-size: 1rem; /* Adjusted font size */
    font-weight: bold;
    color: #ff9900;
  }

  @media (max-width: 768px) {
    .related-gun-card {
      min-width: 140px;
    }

    .related-gun-img {
      width: 100%;
      height: 100px;
    }

    .related-gun-name {
      font-size: 0.9rem;
      font-weight: 700;
    }

    .related-gun-price {
      font-size: 0.9rem;
      color: #ff9900;
    }
  }
`;
