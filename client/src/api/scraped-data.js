import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ScrapedDataPage = () => {
    const [scrapedData, setScrapeData] = useState([]);

    useEffect(() => {
        axios.get('api/scraped-data')
        .then(response => {
            setScrapeData(response.data);
        })
        .catch(error => {
            console.error('Error fetching scraped data:', error);
        });
    }, []);

    return (
        <div>
            <h1>Scraped Data:</h1>
            <ul>
                {scrapedData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ScrapedDataPage;