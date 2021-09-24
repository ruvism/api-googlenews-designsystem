import heading from '../../styles/core-components/heading';
import PropTypes from 'prop-types';
// import React, { useState, useEffect } from "react";
// // import axios from 'axios';

function Heading (){

    return(
        <div className="heading" styles={heading}>
          Título da Notícia
        </div>
    )
};

export default Heading;

Heading.propTypes ={
    fontSize: PropTypes.string,
    lineHeight: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.number,
    color: PropTypes.string,
    marginBottom: PropTypes.string,
}




// .then(response => {
//     return response.json;
//   }).then(json => {
//     const news = json.articles; //array of article objects/hashes
//     setArticles({ articles: news, loading: false });
//     console.log('parsed json', articles);
//   }).catch(ex => {
//     console.log('parsing failed', ex);
//   });