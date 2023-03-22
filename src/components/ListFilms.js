import React, { useState, useEffect } from "react";

import { useSelector} from "react-redux";


import api from "../api/api";
import urls from "../api/urls";
import actionTypes from "../redux/actions/actionTypes";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




const ListFilms = () => {
    
    const { filmsState } = useSelector((state) => state);


    const [myFilm, setMyFilm] = useState(filmsState.movies)
    //console.log(myFilm)

    const [searchText, setSearchText] = useState("");
    const [filteredFilms, setFilteredFilms] = useState(filmsState.movies);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(searchText);
        const temp = filmsState.movies.filter(
            (item) =>
                item.original_title.toLowerCase().includes(searchText.toLowerCase()) === true

        );
        setFilteredFilms(temp);
    }, [searchText, filmsState]);




    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between">

                <input
                    className="form-control w-75"
                    type="text"
                    placeholder="Enter the name of the movie you want to search..."
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                />


            </div>
            <table className="table table-striped mx-2">
                <thead>
                    <tr>
                        <th scope="col"> No</th>
                        <th scope="col">Movie Name</th>
                        <th scope="col">Vote Average</th>
                        <th scope="col">Time</th>
                        <th scope="col">Details</th> 

                    </tr>
                </thead>
                <tbody>
                    {filteredFilms.map((film, index) => {

                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{film.original_title}</td>
                                <td>{film.vote_average}</td>
                                <td>{film.runtime} minutes</td>
                                <td> <Link to={`/film-detail/${film.id}`} className="btn btn-sm btn-success"> Detail </Link>
                                        
                                </td> 

                            </tr>
                        );
                    })}
                </tbody>

            </table>


        </div>
    );
};

export default ListFilms;