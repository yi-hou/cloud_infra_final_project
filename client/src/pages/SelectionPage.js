import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const SelectionPage = () => {
    return (
        <div className='engine_selecion' style={{ marginTop: '10%' }}>
            <Typography variant='h5' style={{ fontWeight: "bold" }}>
                Engine was loaded
            </Typography>
            <Typography variant='h5' style={{ fontWeight: "bold" }}>
                &
            </Typography>
            <Typography variant='h5' style={{ fontWeight: "bold" }}>
                Inverted indices were constructed successfully!
            </Typography>
            <Typography variant='h5' style={{ fontWeight: "bold", marginTop: "2%" }}>
                Please Select Action
            </Typography>
            <div>
                <Link to='/search'>
                    <Button variant="contained" color="inherit" style={{ margin: '3%', width: "15%", color: 'black' }}>
                        Search for Term
                    </Button>
                </Link>
            </div>
            <div>
                <Link to='/top_n'>
                    <Button variant="contained" color="inherit" style={{ width: "15%", color: 'black' }}>
                        Top-N
                    </Button>
                </Link>
            </div>
        </div>
    )
}