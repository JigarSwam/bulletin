import React, {useState} from 'react';
import {newsArticles} from './mockAPI';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric';

export default function NewsArticle ({ article }) {
    const style = {
        width: 100,
    };

    return (
        <Fabric className="App">
             <img style = {style} src={ article && article.urlToImage } ></img>
             <a href={ article && article.url }>{ article && article.title }</a>
             <p>{ article && article.description }</p>
        </Fabric>
    )
}
