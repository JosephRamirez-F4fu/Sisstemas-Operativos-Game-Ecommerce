import React from "react";
import { Helmet} from "react-helmet";
import  Navbar from  "../../components/NavBar/NavBar"
import { useEffect,useState } from "react";

export default function Home () {

    return (
        <div>
            <Navbar />
            <Helmet>
                <title>Game| Home</title>
            </Helmet>
            <div className="Home-Container">
                
            </div>
            
        </div>);
};