import React from 'react';
import Banner from '../../components/Banner/Banner';
import DataSection from '../../components/DataSection/DataSection';
import TrendingApps from '../../components/TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <DataSection></DataSection>
            <TrendingApps data={data}></TrendingApps>
        </div>
    );
};

export default Home;