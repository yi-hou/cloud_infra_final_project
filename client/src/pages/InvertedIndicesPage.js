import React, { useState } from 'react';
import { Typography, Button, TextField } from '@mui/material';
import { useLocation } from 'react-router-dom';

export const InvertedIndicesPage = (props) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const n = query.get('n');
    const submitSearch = () => {
        props.history.push(`/top_n_result?n=${n}`);
    }
    return (

        <div style={{ marginTop: '10%' }}>
            <Typography variant='h4' style={{ fontWeight: "bold" }}>
                Inverted Indices were constructed successfully!
            </Typography>
            <TextField
                id="outlined-basic"
                variant="outlined"
                value={n}
                style={{ width: '20%', marginTop: '3%' }} />
            <div>
                <Button variant="outlined" color='primary' style={{ width: '15%', marginTop: '3%' }} onClick={submitSearch}>
                    Search
                </Button>
            </div>
        </div>
    )

}