import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import Ratingo from './Ratingo';


function Navigation({ setSearch,setValue }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home"  >Home</Nav.Link>
            <Nav.Link >About</Nav.Link>
            <Nav.Link as={Link} to="/Movies" >Movies</Nav.Link>
            <Ratingo setValue={setValue} />
            <input type="text" placeholder='search' style={{marginLeft:'200px',border:'none', borderRadius:'30px'}} onChange={(e)=>setSearch(e.target.value)}></input>
            <button style={{backgroundColor:'	#a6a6a6', color:'white',border:'none', borderRadius:'30px', marginLeft:'10px'}}>GO!</button>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default Navigation;