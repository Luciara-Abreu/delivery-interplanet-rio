import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { CustomNavbar, ContainerNavbar, ContainerTitle } from './styles';

function NavbarComponent() {
    return (
        <ContainerNavbar fixed="top">
            <CustomNavbar expand="lg" className="bg-body-tertiary">
                <Container className='container-bootstrap'>
                    <ContainerTitle>
                        <Navbar.Brand className='link' href="#home">DELIVERY INTERPLANETÁRIO</Navbar.Brand>
                    </ContainerTitle>
                </Container>
            </CustomNavbar>
        </ContainerNavbar>
    );
}

export default NavbarComponent;




