import React, {useContext} from 'react';
import {Context} from './Context';

const Pagination = () => {

    const {postPerPage, totalPosts, paginate} = useContext(Context);

    const pageNumbers = [];

    for(let i = 1; i <=Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }

    return(
            <nav className="nav_nav">
                <ul className="nav_uls">
                        { pageNumbers.map(number => (
                            <li key={number} className="nav_lis">
                                <button onClick={() => paginate(number)} className="nav_as">
                                    {number}
                                </button>
                            </li>
                        ))}
                </ul>
            </nav>
            
    );
}

export default Pagination;