import NavbarComponent from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { ContainerHome, BodyHome, ContainerForm } from "./styles";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Home() {
  const history = useNavigate()

  const handleClick = () => {
    history('/register');
  }


  return (
    <ContainerHome>
      <NavbarComponent />

      <BodyHome className="bodyHome">
        <p>Bem-vindo ao Sistema de Delivery Interplanetário!</p>
        <ContainerForm> 
          Faça seu cadastro & agilize o envio de sua mercadoria.

          <Button variant="outline-dark" type="submit" onClick={handleClick}>CADASTRO</Button>     

        </ContainerForm>
      </BodyHome>

      <Footer />
    </ContainerHome>
  )
}

export default Home;







/**
 * 
 *   return (
   <ContainerHome>
     <NavbarComponent />
     <BodyHome className="bodyHome">
     <ContainerForm>
     <form onSubmit={handleSubmit}>
       <input type="text" value={numeroPL} onChange={e => setNumeroPL(e.target.value)} placeholder="Número do PL" />
       <input type="text" value={dataPL} onChange={e => setDataPL(e.target.value)} placeholder="Data do PL" />
       <button type="submit">Buscar</button>
     </form>

     <ul>
       {propositions.map(proposition => (
         <li key={proposition}>
           {proposition}        
         </li>
       ))}
     </ul>

   </ContainerForm>
     </BodyHome>
     <Footer />
   </ContainerHome>
 )
 */