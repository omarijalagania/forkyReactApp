import React from 'react';


const Pagination = ({postPerPage, totalPosts, paginate}) => {

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
                {console.log("Pagination")}
            </nav>
            
    );
}

export default Pagination;