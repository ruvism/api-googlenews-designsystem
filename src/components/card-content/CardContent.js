import React, { useEffect, useState } from 'react';
import axios from 'axios';
import heading from '../../styles/core-components/heading';
import paragraph from '../../styles/core-components/paragraph';
import subtitle from '../../styles/core-components/subtitle';
import button from '../../styles/core-components/button';
import shape from '../../styles/core-components/shape';
import './card-content.scss';

export default function CardContent() {
    const [ news, setNews ] = useState([]);

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=brasil&apiKey=beb7491b207840d6aa8394d3c46ac7b1`)
        .then((result) => {
            console.log(result)
            setNews(result.data.articles)
        })
        .catch(er => {
            console.log(er);
        })
    }, []);

    if(!news){
        <p>Tente novamente</p>
    } else {
        return(
            <div className="card-content">
                {news.map((item) => (
                    <div style={shape} className="shape">
                        <div  style={heading}>{item.title}</div>
                        <div  style={subtitle}>{item.author}</div>
                        <div  style={paragraph}>{item.description}</div>
                        <button style={button} label="Leia mais" />
                    </div> 
                ))}
            </div>
        )
    }
};