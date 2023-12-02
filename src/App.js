import logo from './logo.svg';

import './App.css';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection"; 
import Footer from "./components/Footer"; 
import Projects from './components/Projects'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Contact from './components/Contact';
import { buyerReview, sellerReview } from './components/Reviews';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';






function App() { 
  
  return (
    

    <div>
      <div>
        <BrowserRouter>
            <Routes>
              <Route index element={<Projects/>} />
            </Routes>
        </BrowserRouter>

      </div>
      <Header />
      <HeroSection />
      <Projects />

      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Buyer Reviews">
        <buyerReview />
      </Tab>
      <Tab eventKey="profile" title="Seller Reviews">
        <sellerReview />
      </Tab>
      
    </Tabs>
      {/* <Reviews /> */}
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
