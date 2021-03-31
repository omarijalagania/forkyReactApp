import React, { useState } from 'react';
import Header from './Components/Header';
import Pagination from './Components/Pagination';
//import context 
import { Context } from './Components/Context';
import axios from 'axios';
import Results from './Components/Results';
import FullResult from './Components/FullResult';


function App() {

  //----state-----

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [recipe, setRecipe] = useState([]);
  //state for pagination

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const [showFullRecipe, setShowFullRecipe] = useState(false);

  //pagination calcs

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts=data.length;
  //----functions----


  const clearSearch = () => {
    setQuery('');
  }


  const showFullRecpe = (recipe) => {
    setRecipe(recipe)
    setShowFullRecipe(true);
    
  }
  // const takeReipe = ({recipe}) => {
    
  //   setRecipe(recipe);
  // }

  //Change Page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
}

  //Api call

        const actualCall = async (e) => {
          e.preventDefault();
        try {
            setLoading(true);
            const result = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
            setData(result.data.recipes);
            setLoading(false);
            clearSearch();
        } catch (error) {
            console.log(error);
    }
        }

  return (
    <Context.Provider value={{currentPosts, loading, showFullRecpe, actualCall, setQuery, query, postPerPage, totalPosts, paginate, recipe}}>
      <div className="container">
          <Header />
          <ul className="results__list">
            <Results />
            <Pagination />
          </ul>
          {/* {showFullRecipe && <FullResult recipe={recipe} />} */}
          { showFullRecipe && <FullResult />}
      </div>
    </Context.Provider>
    
  );
}

export default App;
