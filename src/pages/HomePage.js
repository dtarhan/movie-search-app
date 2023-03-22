import React from "react";
import Header from "../components/Header";
import ListFilms from "../components/ListFilms";
import ConfirmForm from "./ConfirmForm";




const HomePage = () => {
    

    
    return (
        <div>
            <ConfirmForm />
            <Header />            
            <ListFilms />
        </div>




    )

}
export default HomePage