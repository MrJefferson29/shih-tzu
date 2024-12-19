import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gunsData from './gunsData';
import { FiHeart } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';

export default function AllGuns() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGuns, setFilteredGuns] = useState(gunsData);
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();
  const location = useLocation(); // Get the location object

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryFromQuery = queryParams.get('category') || 'All';
    setCategory(categoryFromQuery);
    filterGuns(searchTerm, categoryFromQuery);
  }, [location.search, searchTerm]); // Add dependencies to re-filter on search or category change

  const categories = ['All', ...new Set(gunsData.map(gun => gun.category))];

  const truncateDescription = (description) => {
    if (!description) return ''; 
    const words = description.split(' ');
    return words.slice(0, 15).join(' ') + (words.length > 20 ? '...' : '');
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    filterGuns(term, category);
  };

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
    filterGuns(searchTerm, selectedCategory);
    navigate(`/all-pets?category=${encodeURIComponent(selectedCategory)}`); // Update URL
  };

  const filterGuns = (term, selectedCategory) => {
    const filtered = gunsData.filter(gun => {
      const matchesSearchTerm =
        gun.name.toLowerCase().includes(term) ||
        gun.description.toLowerCase().includes(term);

      const matchesCategory = selectedCategory === 'All' || gun.category === selectedCategory;

      return matchesSearchTerm && matchesCategory;
    });
    setFilteredGuns(filtered);
  };

  const handleCardClick = (name) => {
    const formattedName = name.replace(/\s+/g, '-').toLowerCase();
    console.log('Card Clicked:', name);  // Log the name
    console.log('Formatted Name:', formattedName);  // Log the formatted name
    const url = `/pet/${formattedName}`;
    console.log('Navigating to:', url);  // Log the final URL
    navigate(url);
  };
  
  
  return (
    <AllGunsStyles>
      <h2></h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          autoFocus={true}
          autoSave='true'
        />
      </div>

      <p style={{fontWeight: 600}}>BROWSE ALL AVAILABLE PUPPS</p>

      <div className="categories">
        {categories.map((cat, index) => (
          <p
            key={index}
            className={`filter ${category === cat ? 'active' : ''}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </p>
        ))}
      </div>

      <div className="cards-container">
        {filteredGuns.map((gun, index) => (
          <div className="card-wrapper" key={index} onClick={() => handleCardClick(gun.name)}>
            <div className="img-wrapper">
              <img src={gun.images[0]} alt={gun.name} className="ad-img" />
            </div>
            <span className='name'>{gun.name}</span>
            <div className='info'>
              <div className='info-left'>
                <span className='text'>Category</span> {gun.category}<br />
                <span className='text'>Sex</span> {gun.sex}<br />
                <span className='text'>Age</span> {gun.age}<br />
              </div>
              <div className='info-right'>
                <span className='text'>{gun.views}</span> Views<br />
                <span className='text'>Verification</span> {gun.certificate}<br />
                <span className='text'>Vaccinated</span> Checked<br />
              </div>
            </div>
            <span className='description'>{truncateDescription(gun.description)}
              <hr />
            </span>
            <div className='bottom-wrapper'>
              <div className='Price' style={{fontSize: '1.2rem', fontWeight: 700}}>{gun.price}</div>
              <div className='like'><FiHeart size={23}/></div>
            </div>
          </div>
        ))}
      </div>
    </AllGunsStyles>
  );
}



const AllGunsStyles = styled.div`
  margin: 2rem auto;
  max-width: 1200px;
  padding: 0 1rem;
  font-family: 'Arial', sans-serif;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 5rem;
    text-align: center;
    color: #333;
    font-weight: 700;
  }
.info-left {
font-weight: 900;
}
.info-right {
font-weight: 900;
}
  .search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  .search-bar input {
    width: 100%;
    max-width: 600px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 3px;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;

    &:focus {
      outline: none;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    }
  }

  /* Category Buttons */
  .categories {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    gap: 0.5rem;
  }

  .filter {
    padding-left: 0.5rem;
    border: none;
    padding-right: 0.5rem;
    color: #68cd1d;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease-in-out;
    font-weight: 600;
    border-right: 2px solid grey;

    &.active, &:hover {
    color: black;
    borer-bottom: 1px solid;
    }
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.25rem;
  }

  .card-wrapper {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    }
  }

  .img-wrapper {
    width: 100%;
    text-align: center;
    margin-bottom: 0.55rem;
  }

  .ad-img {
    width: 100%;
    height: 190px;
    object-fit: cover;
    border-radius: 8px;
  }
.name {
font-size: 1.2rem;
font-weight: 800;
margin-left: 0.3rem;
}
.info {
display: flex;
flex-direction: row;
justify-content: space-between;
padding-left: 0.5rem;
padding-right: 0.5rem;
font-size: 0.8rem;
font-weight: 400
}
.text {
font-size: 0.9rem;
font-weight: 800;
color: #68cd1d;
}
.description {
font-size: 0.9rem;
padding-left: 0.5rem;
padding-right: 0.5rem;
line-height: 1.3;
margin-top: 5px;
font-weight: 600;
}
.bottom-wrapper {
display: flex;
justify-content: space-between;
margin-left: 0.6rem;
margin-right: 0.6rem;
margin-bottom: 0.6rem;
}

  @media (max-width: 768px) {
  }
`;
