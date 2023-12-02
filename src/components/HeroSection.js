import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import pic from '../assets/images/MyPhoto.jpg'

const HeroSection = () => {
  return (
    <div className='container hero-section-margin'>
        <div className='row'>
          <div className='col col-sm-12 col-md-6 col-lg-6'>
                <h1 className='name-section'>Hi, Toufeeque here</h1>
                <h3 className='subheading'>Data Scientist</h3>
          </div>

          <div className='col col-sm-12 col-md-6 col-lg-6'>
              {/* <img src={pic} alt='Profile' style={{width: '650px', height:'500'}}></img> */}
              <img src={pic} alt='Profile' ></img>
          </div>

        </div>
    </div>
    );
}

export default HeroSection;
