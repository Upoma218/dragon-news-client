import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';


const Category = () => {
    const news = useLoaderData();

    return (
        <div>
            <h1 >Total news : {news.length}</h1>
            {
                news.map(news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;