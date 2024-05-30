import NavbarComponent from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { ContainerHome, BodyHome, ContainerForm } from "./styles";


function Home() {
  return (
    <ContainerHome>
      <NavbarComponent />
      <BodyHome className="bodyHome">
        <ContainerForm> 
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