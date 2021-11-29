import React from 'react';
import { Typography, Button } from '@mui/material'
import { DropzoneArea } from 'material-ui-dropzone';
import './LoadPage.css';
import { Link } from 'react-router-dom';

export const LoadEnginePage = () => {
    return (
        <div className="my-container">
            <div className="load-title">
                <Typography variant='h4' style={{ fontWeight: 'bold' }}>Load My Engine</Typography>
            </div>
            <div className="drop-zone">
                <DropzoneArea />
            </div>
            <Link to='/select'>
                <Button variant="outlined" color='primary' className='convert-btn' style={{ marginTop: '2%', marginLeft: '2%' }}>
                    Load Engine
                </Button>
            </Link>
        </div>
    )
}