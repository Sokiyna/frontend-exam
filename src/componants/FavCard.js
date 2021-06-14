import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

class FavCard extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }} key={this.props.key}>
                    <Card.Img variant="top" src={this.props.digimon.name} />
                    <Card.Body>
                        <Card.Title>{this.props.digimon.img}</Card.Title>
                        <Card.Text>
                           {this.props.digimon.level}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>this.props.deleteDigimon(this.props.index)}>Delete</Button>
                        <Button variant="primary" onClick={()=>this.props.showUpdateForm(this.props.index)}>Update</Button>

                    </Card.Body>
                </Card>


            </>
        )
    }
}

export default FavCard;
