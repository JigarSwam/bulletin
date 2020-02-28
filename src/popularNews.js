import React, {useState, useEffect} from 'react';
import {newsArticles} from './mockAPI';
import NewsArticle from './NewsArticle';

const PopularNews = ({ index }) => {
    const [feed, setFeed] = useState([]);

    // useEffect(() => {
    //     displayData();
    // }, []);

    useEffect(() => {
        const API_KEY = `&apiKey=7c33092ea64d4e8990ae75778715703e`;
        const URL = `http://newsapi.org/v2/top-headlines?country=us`;
        let req = `${URL}${API_KEY}`;
        fetch(req).then(r => r.json()).then(r => setFeed(r));
      }, []);
      
    return (
        feed.articles ? (
        <div>
            {feed.articles.map(article =>  <NewsArticle article= {article}></NewsArticle>)}
            // <NewsArticle article = {feed.articles[0]}/>
            // <NewsArticle article = {feed.articles[1]}/>
            // <NewsArticle article = {feed.articles[2]}/>
        </div>) : "No data yet"
    )
}

export default PopularNews;
