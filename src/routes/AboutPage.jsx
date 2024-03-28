import { useState, useContext } from "react";
import { Paragraph } from "../components/Paragraph";
import { NameContext } from "../contexts/NameContext";

const AboutPage = () => {
    const {name, setName} = useContext(NameContext);

    const changeName = () => {
        setName(`changed in the about`)
    }
    return (
        <>
            <div>
                <h1>About Page</h1>
                <p>This is the about page content.</p>
            </div>
            <p>test</p>
                <Paragraph color={`red`}>
                    Some text here
                </Paragraph>
                <Paragraph color={`red`}>
                    Some text here
                </Paragraph>
            <button onClick={changeName}>Change Name</button>
        </>
    );
};

export default AboutPage;
