import React, { useState, useEffect } from 'react';
import { Typography, TableContainer, Table, TableBody, TableHead, TableCell, TableRow, Paper } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export const SearchResultPage = () => {
    const [frequency, setFrequency] = useState('');
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const term = query.get('term');
    const getFrequency = async () => {
        const body = { term }
        const content = JSON.stringify(body)
        const res = await fetch('http://127.0.0.1:5000/search', {
            method: 'POST',
            body: content,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            }
        }).then(response => response.json())
        setFrequency(res);
    }

    
    useEffect(() => {
        getFrequency()
    }, [])

    function createData(Doc_ID, Doc_Folder, Doc_Name, Frenquencies) {
        return { Doc_ID, Doc_Folder, Doc_Name, Frenquencies };
    }
    const columns = [
        { id: 'Doc_ID', label: 'Doc\u00a0ID', minWidth: 170 },
        { id: 'Doc_Folder', label: 'Doc\u00a0Folder', minWidth: 100 },
        {
            id: 'Doc_Name',
            label: 'Doc\u00a0Name',
            minWidth: 170,
        },
        {
            id: 'Frenquencies',
            label: 'Frenquencies',
            minWidth: 170,
        },
    ];
    const rows = [
        createData(1, 'histories', '1kinghenryiv', frequency)
    ];

    return (
        <div style={{ marginTop: '5%' }}>
            <div>
                <Link to='/search' color='black' style={{ marginLeft: '80%' }}>
                    Go Back To Search
                </Link>
            </div>

            <Typography variant='h6' style={{ marginRight: '76%' }}>
                You searched for the term: {term}
            </Typography>

            <TableContainer sx={{ maxHeight: 440, marginTop: '2%' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>


        </div >
    )

}