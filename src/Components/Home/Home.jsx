import React from "react";
import dataStore from "./home.json"
const Home = () => {
    return (
        <div className="">
            <h1>{dataStore["header-1"]}</h1>
        </div>
    );
};

export default Home;
