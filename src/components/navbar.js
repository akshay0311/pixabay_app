import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import '../styles/myStyles.css';

function navbar() {
    return (
        <div>
            <AppBar position="static" color="default">
                <Typography className="title" variant="h4" color="inherit">
                    Pixabay App        
                </Typography>        
            </AppBar>
        </div>
    )
}

export default navbar;
