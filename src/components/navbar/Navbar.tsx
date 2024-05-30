import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { CustomNavbar, ContainerNavbar, ContainerTitle } from './styles';
import ButtonNav from '../button/ButtonNav';

function NavbarComponent() {
    return (
        <ContainerNavbar fixed="top">
            <CustomNavbar expand="lg" className="bg-body-tertiary">
                <Container className='container-bootstrap'>
                    <ContainerTitle>
                        <Navbar.Brand className='link' href="#home">DELIVERY INTERPLANETÁRIO</Navbar.Brand>
                    </ContainerTitle>
                    <ButtonNav />
                </Container>
            </CustomNavbar>
        </ContainerNavbar>
    );
}

export default NavbarComponent;




