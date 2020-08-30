import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import { Zoom } from '@material-ui/core';
import '../styles/myStyles.css';

export class imageresult extends Component {
    state = {
        open : false,
        currentImg : ''
    }
    handleClose = () => {
        this.setState({ open: false });
      };
    render() {
        let imageList;
        const {images} = this.props;
        if (images)
           imageList = (
            <GridList cols={3}>
            {
                images.map(image=>(
                    <GridListTile>
                        <img src = {image.largeImageURL}/>
                        <GridListTileBar
                            title= {image.tags}
                            subtitle = {
                                    <span>
                                        by:<strong>{image.user}</strong>
                                    </span>
                                }
                            actionIcon={
                                <IconButton>
                                    <InfoIcon className="infoIcon"/>
                                </IconButton>
                                }    
                        />
                    </GridListTile>
                ))
            } 
           </GridList>  
           )
        else 
             imageList = null;
             
        
    
        return (
            <div>
                {imageList}
                
            </div>
        )
    }
}

export default imageresult;
