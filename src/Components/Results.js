import React,{useContext} from 'react';
import Result from './Result';
import {Context} from './Context';


const Results = () => {

// useContent Here
const { currentPosts, loading, showFullRecpe } = useContext(Context);

        return(
            <div>
                <div className="results">
                        {
                            currentPosts.map((recipe) =>{
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