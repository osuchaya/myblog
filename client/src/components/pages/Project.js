import React from "react";
import image from '../../assets/github-icon.png'
import Card from 'react-bootstrap/Card';
function Project(props) {


  return (   

<Card style={{ width: '18rem', height: '23rem' }} className="projectcard">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title><a href={props.link}>{props.name}</a></Card.Title>
        <Card.Text>
        <p>{props.description}</p>
        <a href={props.github}><img width="30px" src={image} alt="github icon"></img></a>
        </Card.Text>
       
      </Card.Body>
    </Card>   
  );
}

export default Project;