import { Button} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div>
            <h1>Welcome to DuoCode</h1>
            <Link to="/question">
                <Button variant="outlined">
                    Start
                </Button>
            </Link>
        </div>
    );
};

export default Home;