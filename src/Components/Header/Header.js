import React, { useContext } from 'react';
import Logo from '../../images/mainamazon.png'
import './Header.css';
import { Nav, Form, FormControl, Button, Navbar } from 'react-bootstrap';
import Small from '../../images/amazon.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Header = () => {

const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="headers" >

<img style={{marginTop: "20px"}} src={Logo} alt=""/>


<Navbar style={{marginTop: "20px" , backgroundColor: 'purple' }}  variant="dark">

    <Navbar.Brand as={Link} to="/"> <img style={{height: '20px' , width: '20px' }} src={Small} alt=""/> amazon</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/shop" >Shop</Nav.Link>
      <Nav.Link as={Link} to="/review">Review</Nav.Link>
      <Nav.Link as={Link} to="/inventory" >Manage Inventory</Nav.Link>
      <Nav.Link as={Link} to="/login" >Login</Nav.Link>
      
    </Nav>
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="dark">Search</Button>
    </Form>
    <Button onClick={() => setLoggedInUser({}) } variant="light" style={{margin: '10px 40px'}} > Sign Out </Button>
  </Navbar>

</div>
    );
};

export default Header;