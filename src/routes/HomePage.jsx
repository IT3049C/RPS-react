import { Link } from "react-router-dom";
import { NameContext } from "../contexts/NameContext";
import { useContext, useState } from "react";


const HomePage = () => {
const {name} = useContext(NameContext);

    return (
            <div>
                <h1>Welcome to the Home Page, {name}</h1>
                <p>This is a simple home page component.</p>
                <button>HI</button> 
                <ul>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                </ul>
            </div>
    );
};

export default HomePage;