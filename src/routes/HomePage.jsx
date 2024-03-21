import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
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