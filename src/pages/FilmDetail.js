import React, { useEffect, useState } from "react";

import Header from "../components/Header";

import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../api/api";
import urls from "../api/urls";

const FilmDetail = () => {

  const params = useParams();
  const { filmsState } = useSelector((state) => state);
  const myFilm = filmsState.movies.find((item) => item.id == params.filmId);
  // const [myFilm, setMyFilm] = useState(myFilm);
  //console.log(myFilm);



  if (myFilm === null) return null;
  return (

    <div>
      <Header />
      <div className="container my-5">
        <h1 className="text-info">Details </h1> <hr />
        
        <h3 > <b> Name of Movie:</b> <p className="text-primary"> {myFilm.original_title} </p>  </h3> <hr />
        <h3> <b> Language:</b> <span> {myFilm.original_language} </span> </h3> <hr />
        <h3> <b> Vote Average: </b> {myFilm.vote_average}</h3> <hr />
        <h3> <b> Summary: </b> <p className="text-danger" > {myFilm.overview} </p>  </h3> <hr />
       <h3>  <Link  to={`${myFilm.homepage}`}> MovieLink  </Link> </h3>  <hr />

        <Link to={"/"}> <button className="btn btn-danger" > Back to HomePage</button>   </Link>
      </div>
    </div>


  );
};

export default FilmDetail;



/*useEffect(() => {
  
  api
    .get(`${urls.movie}/${params.filmId}`)
    .then((resFilm) => {
     // console.log(resFilm.data);
      setMyFilm(resFilm.data);
      
    })
    .catch((err) => {});
}, []);
*/

/**/