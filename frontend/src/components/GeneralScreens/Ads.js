import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import gunsData from './gunsData';

export default function Ads() {
  const navigate = useNavigate();
  const guns = gunsData.slice(0, 6);

  const handleCardClick = (formattedName) => {
    navigate(`/pet/${formattedName}`);
  };

  return (
    <Styles>
      <h3>RECOMMENDED FOR YOU</h3>
      <Row className="cards-container">
        {guns.map((gun, index) => {
          const formattedName = gun.name.replace(/\s+/g, '-').toLowerCase();
          return (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <div
                className="card-wrapper"
                onClick={() => handleCardClick(formattedName)}
              >
                <div className="img-wrapper">
                  <img src={gun.images[0]} alt={gun.name} className="ad-img" />
                </div>
                <div className="content">
                  <p className="name">{gun.name}</p>
                  <p className="price">{gun.price}</p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <div className="view-all-container">
        <button
          onClick={() => navigate('/all-pets')}
          className="view-all-button"
        >
          View All Pupps
        </button>
      </div>
    </Styles>
  );
}

const Styles = styled.div`
  margin: 1rem;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 0;
  }

  .card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1.5px solid #ddd;
    background-color: #fff;
    transition: box-shadow 0.3s ease, transform 0.2s ease;
    cursor: pointer;
    height: auto;
    padding: 1rem;
    overflow: hidden;
    text-align: center;

    &:hover {
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
      transform: scale(1.02);
    }
  }

  .img-wrapper {
    width: 100%;
    height: 150px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .ad-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
  }

  .price {
    font-size: 1.3rem;
    color: #f1c40f;
    font-weight: 900;
  }

  .view-all-container {
    margin-top: 1rem;
    text-align: center;
  }

  .view-all-button {
    padding: 0.75rem 1.5rem;
    background: none;
    color: black;
    border-radius: 10px;
    border: 1px solid black;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.2s;
    text-align: center;
    width: 100%;
    max-width: 200px;
    margin: 0 auto;

    &:hover {
      background-color: black;
      color: white;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    }
  }

  @media (min-width: 992px) {
    .cards-container {
      gap: 1.2rem;
    }

    .name {
      font-size: 1.2rem;
    }

    .price {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1200px) {
    h3 {
      font-size: 2rem;
    }

    .cards-container {
      gap: 1.5rem;
    }

    .name {
      font-size: 1.4rem;
    }

    .price {
      font-size: 1.7rem;
    }
  }
`;
