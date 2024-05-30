import NavbarComponent from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import RegisterForm from "../../components/registerForm/RegisterForm";
import { ContainerRegister, BodyRegister } from "./styles";

function Register() {
   return (
    <ContainerRegister>
      <NavbarComponent />
      <BodyRegister>
        <h1>FAÇA SEU CADASTRO AGILIZE SUAS ENTREGAS.</h1>

        <RegisterForm onSubmit={function (data: { address: string; addressNumber: string; addressCep: string; fullName: string; phone: string; country: string; state: string; adressLine: string; }): void {
          throw new Error("Function not implemented.");
        } }/>

      </BodyRegister>
      <Footer />
    </ContainerRegister>
  )
}

export default Register;







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