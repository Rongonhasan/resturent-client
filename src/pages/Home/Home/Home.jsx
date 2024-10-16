import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';
import AppStore from '../AppStore/AppStore';
import Contact from './Contact/Contact';
import HeadlineCards from '../HeadlineCards/HeadlineCards';



const Home = () => {
    return (
        <div>
              <Helmet>
        <title>Helium | Home</title>
      </Helmet>
            <Banner></Banner>
          <HeadlineCards></HeadlineCards>
            <Category></Category>
            
            <PopularMenu></PopularMenu>
             <Featured></Featured>
               
             <Testimonials></Testimonials>
             <AppStore></AppStore>
             <Contact></Contact>
        </div>
    );
};

export default Home;