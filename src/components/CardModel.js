import React from 'react';
import './cardModel.css';

const CardModel = (props) =>  {
    return(
       
         <div className="flex-container">
            <div className="flex-card">
                <img src={props.image} alt="Logo" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p>Price:<span>{props.price}</span></p>
                    <a href="/" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>    
    );
}

export default CardModel;
