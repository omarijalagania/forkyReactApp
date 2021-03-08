import React from 'react';

const Result = ({recipe_id, image_url, title, publisher, showFullRecpe, recipe}) => {
    return(
        <div>
                                        <li key ={recipe_id} onClick={(e)=> {
                                            e.preventDefault();
                                            showFullRecpe(recipe)}}>
                                            <a className="results__link results__link--active" href={`#${recipe_id}`}>
                                                <figure className="results__fig">
                                                    <img src={image_url} alt="Test"/>
                                                </figure>
                                                <div className="results__data">
                                                    <h4 className="results__name">{`${title}`.substring(0,17) + "..."}</h4>
                                                    <p className="results__author">{publisher}</p>
                                                </div>
                                            </a>
                                        </li>
        </div>
        
    );

    
}


export default Result;