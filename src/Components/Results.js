import React, { useMemo } from 'react';



const Results = ({data, loading, showFullRecpe}) => {


    return useMemo(()=>{

        return(
            <>
                <div className="results">
                        {
                            data.map((recipe) =>{
    
                                if(loading) {
                                    return <h2>Loading...</h2>
                                }
                                return(
                                    <>
                                        {console.log("Results Click")}
                                        <li key={recipe.recipe_id} onClick={showFullRecpe}>
                                            <a className="results__link results__link--active" href={`#${recipe.recipe_id}`}>
                                                <figure className="results__fig">
                                                    <img src={recipe.image_url} alt="Test"/>
                                                </figure>
                                                <div className="results__data">
                                                    <h4 className="results__name">{recipe.title}</h4>
                                                    <p className="results__author">{recipe.publisher}</p>
                                                </div>
                                            </a>
                                        </li>
                                    </>
                                )
                            })
                        }
                </div>
            </>
        );
    },[data,loading,showFullRecpe])
}


export default Results;