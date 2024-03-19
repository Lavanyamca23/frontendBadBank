import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import bank from './image/bank.jpg'
import './App.css';
function Home(){

  return(<>
  
  <Card className="text-center">
    <Card.Header className='header'><marquee>&quot; Taking Banking Technology to the Common Man &quot;</marquee></Card.Header>
    <Card.Body>
      <Card.Title className='title'>BAD BANK</Card.Title>
      <Card.Text>
        <div>
      <img className="homeimg" src={bank} alt='' height="200px" width='500px'></img>
      </div>
     {/* <img className='homeimg' src={bank} alt='' height='400px' width='700px'></img> */}
     <p className='msg'> Welcome to Bad Bank <br></br>
        &quot; Where Your Money is Our Money &quot;<br></br>
        Create an Account and Start Bad Banking Right Away.</p>
        
        </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Developed by &copy;Lavanya</Card.Footer>
  </Card>
  </>)
}

export default Home;
