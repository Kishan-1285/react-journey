import React from 'react'
import { useContext } from 'react';
import { themeContext } from './App';


function Home() {
    const home = useContext(themeContext);

    const themeStyle = {
        background: home.theme === "light" ? "blue" : "black",
        color: home.theme === "light" ? "black" : "blue",
    }

    const handleChange = () => {
        home.setTheme((curr) => curr === "light" ? "dark" : "light")
    }
    return (
        <div>
            <div style={themeStyle}>
                <h1>Home</h1>
                <button onClick={handleChange}>Click</button>
            </div>
        </div>
    )
}

export default Home