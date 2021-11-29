import React, { useState, useEffect } from 'react';
import { Typography, TableContainer, Table, TableBody, TableHead, TableCell, TableRow } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import './TopNResultPage.css'

export const TopNResultPage = () => {
    const [topN, setTopN] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const n = query.get('n');

    const getTopN = async () => {
        const body = { n }
        const content = JSON.stringify(body)
        const res = await fetch('http://127.0.0.1:5000/top', {
            method: 'POST',
            body: content,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            }
        }).then(response => response.json())
        setTopN(res);
    }

    useEffect(() => {
        getTopN()

    }, [])

    return (

        <div style={{ marginTop: '5%' }}>
            <div>
                <Link to='/top_n' style={{ marginLeft: '80%', color: 'black' }}>
                    Go Back To Search
                </Link>
            </div>
            <Typography variant='h6' style={{ marginRight: '54%' }}>
                Top-N Frequent Terms
            </Typography>
            <div style={{ width: '70%', marginLeft: '16%', marginTop: '3%'}}>
                <table>
                    <tbody>
                        <tr>
                            <th>Term</th>
                            <th>Frequencies</th>
                        </tr>
                        {topN.map((res, index) => (
                            <tr key={index}>
                                <td>{res[1]}</td>
                                <td>{res[0]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )

}