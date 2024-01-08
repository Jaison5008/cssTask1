
import './App.css'; 

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
  return (  
    <div  style={{margin:'20px'}}> 
    <center style={{background:'gray'}}>   
    <div style={{paddingTop:"20px"}}>
    <h3 > 
         Lovely Ice cream
    </h3>
    <h5 className='quate'>  
    
    Life is better  with ice cream  !!!!
    </h5> </div>
      <div style={{display:'flex',padding:'25px'}}>
      <Card style={{marginRight:'5px', background:'blue'}} >  
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>

      </Card>
    
    
      <Card style={{background :"green"}}>  
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>

      </Card>
    </div> 
    <div style={{margin:'20px'}}> 
      <Card style={{background:'green'}}>  
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>

      </Card >
    
      <Card style={{marginTop:'5px', background:"red"}}>  
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>

      </Card>
    </div>  
    <div style={{display:'flex', margin:'20px'}}>
      <Card style={{marginRight:'5px', background:"blue"}}>  
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>

      </Card>
    
    
      <Card style={{background:"green"}}>  
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>

      </Card>
    </div> 
    <div style={{margin:'20px'}}> 
      <Card style={{background:'red'}}>  
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>

      </Card>
      </div> 
      <div style={{margin:'20px'}}> 
      <Card style={{background:'blue'}}>  
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>

      </Card>
    </div> 

    </center>
    </div>
  );
}

export default App;
