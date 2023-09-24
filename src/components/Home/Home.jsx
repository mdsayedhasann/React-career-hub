import React from 'react';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import CategoryList from '../CategoryList/CategoryList';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <CategoryList></CategoryList>
            <Featured></Featured>
        </div>
    );
};

export default Home;