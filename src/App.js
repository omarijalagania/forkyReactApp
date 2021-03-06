import React, {useState} from 'react';
import Header from './Components/Header';
import Pagination from './Components/Pagination';

import axios from 'axios';
import Results from './Components/Results';
import FullResult from './Components/FullResult';





function App() {

  //----state-----

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  //state for pagination

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  

  //pagination calcs

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  //----functions----

  const showFullRecpe = () => {

  }



  //Change Page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
}

  //Api call

  let actualCall = () => {
  }
  
        actualCall = async (e) => {
          e.preventDefault();
        try {
            setLoading(true);
            const result = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
            setData(result.data.recipes);
            setLoading(false);
            console.log("ApiCall Click")
        } catch (error) {
            console.log(error);
    }
        }

  return (
    <div className="container">
      
        <Header actualCall={actualCall} setQuery={setQuery} query={query}/>
        <ul className="results__list">
          <Results data={currentPosts} loading={loading}/>
          <Pagination postPerPage={postPerPage} totalPosts={data.length} paginate={paginate}/>
        </ul>
        <FullResult data={data} showFullRecpe={showFullRecpe}/>
    </div>
    
  );
}

export default App;
