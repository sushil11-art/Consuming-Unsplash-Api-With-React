import React from 'react';
import './grid.css';
import ImageCard from './ImageCard';

const ImageList =(props)=>
{
    // console.log(props.images) const list =  
     const list= props.images.map((image) => {
        return  <ImageCard key={image.id} image={image} />;
        //return <img src={image.urls.regular} key={image.id} alt={image.descrpition}/>
    });
    return <div className="image-list" >{list}</div>;
    }

export default ImageList;

