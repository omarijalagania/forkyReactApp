import React from 'react';
import Result from './Result';


const Results = ({data, loading, showFullRecpe}) => {


        return(
            <div>
                <div className="results">
                        {
                            data.map((recipe) =>{
                                if(loading) {
                                    return <h2>Loading...</h2>
                                }
                                return(
                                    <div>
                                    <Result showFullRecpe={showFullRecpe} {...recipe} recipe={recipe}/>
                                    </div>
                                )
                                ;
                            })
                        }
                </div>
            </div>
        );
        
}


export default Results;