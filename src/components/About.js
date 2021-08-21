import React from 'react';
import "./About.css";
import { image } from './image';

function About() {
    return (
        <div className="about">
            <div className="about-title">
            <h1 className="title">What are you having<br/> for lunch ?</h1>
            <p className="about-details">Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. Quisque <br />tristique tincidunt enim ut tincidunt. <br />Pellentesque fermentum lorem non velit <br />pharetra, quis euismod elit condimentum. </p>

            </div>
        <div className="images">
            {image.map((data, key)=>{
                return(
                    
                    <div key={key}>
                        <Products
                        key={key}
                        image={data.image}
                        title={data.title}
                        />
                    </div>    
                )
            })}
            </div>
        </div>
    
    )
}

const Products = ({title,image})=>{
    return(
        <>
        <div className="products">
            <div className="image-gallery">
            <img className="image" src={image}/>
             <h6 className="title1">{title}</h6>
       
            </div>

        </div>
        </>   
    )
}

export default About