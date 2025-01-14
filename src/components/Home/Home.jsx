import React from 'react';
import { Hero } from '../Hero/Hero';
import { Features } from '../Features/Features';
import Collection from '../collection/Collection';
import OfficePopularChoice from '../OfficePopular/OfficePopular';
import RoomPopular from '../RoomPopular/RoomPopular';
import ChairPopular from '../ChairPopular/ChairPopular';
import ProductPage from '../ProductPage/ProductPage';
import ProductSlider from '../ProductSlider/ProductSlider';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
 
const Home = () => {
    return (
        <div>
            <Hero />
              <Features />
              <Collection />
              <OfficePopularChoice />
              <RoomPopular />
              <ChairPopular />
              <ProductPage />
              <ProductSlider />
              <CustomerReviews />
        
        </div>
    );
};

export default Home;