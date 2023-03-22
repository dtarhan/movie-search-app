import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import FilmDetail from "./pages/FilmDetail";
import ConfirmForm from "./pages/ConfirmForm";

import { useDispatch, useSelector } from "react-redux";
import actionTypes from "./redux/actions/actionTypes";
import api from "./api/api";
import urls from "./api/urls";


function App() {
  const [showComponent, setShowComponent]=useState(false)
  const dispatch = useDispatch();
  const { filmsState } = useSelector((state) => state);

  useEffect(() => {
    /* fetch films */
    dispatch({ type: actionTypes.filmActions.GET_FILMS_START });
    api
      .get(urls.movie)
      .then((res) => {
        dispatch({
          type: actionTypes.filmActions.GET_FILMS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.filmActions.GET_FILMS_FAIL,
          payload: "Serverda bir hata oluştu",
        });
      });
   
    
  }, []);

  if (filmsState.success === false )
    return null;

  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/film-detail/:filmId" element={<FilmDetail />} />
       
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;






 /* useEffect(() => {

    api
      .get(urls.movie)
     
      .then((response) => {
        console.log(response.data);
       
         setMovies(response.data);
       
      })


      .catch((error) => { });
  }, []);*/

  
    
