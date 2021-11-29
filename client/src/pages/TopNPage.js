import React, { useState } from 'react';
import { Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export const TopNPage = (props) => {
    const [n, setN] = useState('');
    const submitSearch = () => {
        props.history.push(`/inverted_indices?n=${n}`);
    }
    return (
        <div style={{ marginTop: '10%' }}>
            <Typography variant='h4' style={{ fontWeight: "bold" }}>
                Enter Your N Value
            </Typography>
            <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Type Your N"
                style={{ marginTop: '3%', width: '20%' }}
                onChange={e => setN(e.target.value)}
                 />
            <div>
                <Button variant="outlined" color='primary' style={{ marginTop: '3%', width: '15%' }} onClick={submitSearch}>
                    Search
                </Button>
            </div>
        </div>
    )

}