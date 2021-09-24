import Shape from '../shape/Shape';
import Heading from '../heading/Heading';
import Subtitle from '../subtitle/Subtitle';
import Paragraph from '../paragraph/Paragraph';
import Button from '../button/Button';
import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

export default function CardContent() {
    const [ articles, setArticles ] = useState();

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=brasil&apiKey=beb7491b207840d6aa8394d3c46ac7b1`)
        .then(response => response.json())
        .then((result) => {
            setArticles(result)
        })
    }, []);

    if(!articles){
        <p>Tente novamente</p>
    } else {
        return(
            <div className="card-content">
                <Shape></Shape>
                {articles.map((item) => (
                    <Fragment>
                        <Heading>{item.title}</Heading>
                        <Subtitle>{item.author}</Subtitle>
                        <Paragraph>{item.description}</Paragraph>
                        <Button />         
                    </Fragment>
                ))}
            </div>
        )
    }
};



      