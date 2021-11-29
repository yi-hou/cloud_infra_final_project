import React, { useState } from 'react';
import { Typography, Button, TextField } from '@mui/material';

export const SearchPage = (props) => {
    const [term, setTerm] = useState('');
    const submitSearch = () => {
        props.history.push(`/search_result?term=${term}`);
    }

    return (
        <div style={{ marginTop: '10%' }}>
            <Typography variant='h5' style={{ fontWeight: "bold" }}>
                Enter Your Search Term
            </Typography>
            <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Type Your Search Here ..."
                style={{ marginTop: '3%', width: '20%'}}
                onChange={e => setTerm(e.target.value)} />
            <div>
                <Button variant="outlined" color='primary' style={{ marginTop: '3%', width: '15%'}} onClick={submitSearch}>
                    Search
                </Button>
            </div>
        </div>
    )

}