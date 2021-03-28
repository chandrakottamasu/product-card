import React from 'react';
import {Card,Button} from 'react-bootstrap';
const CardModel = (props) =>  {
    return(
       
        //  <div className="flex-container">
        //     <div className="flex-card">
        //         <img src={props.image} alt="Logo" />
        //         <div className="card-body">
        //             <h5 className="card-title">{props.title}</h5>
        //             <p>Price:<span>{props.price}</span></p>
        //             <a href="/" className="btn btn-primary">Add to Cart</a>
        //         </div>
        //     </div>
        // </div>    

        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.category}
                    </Card.Text>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                    <Button>
                        Add To Cart
                            </Button>
                </Card.Body>
            </Card>
    );
}

export default CardModel;
