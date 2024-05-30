import NavbarComponent from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { ContainerHome, BodyHome, ContainerForm } from "./styles";
import Banner from "../../components/banner/BannerHome";


function Home() {
  return (
    <ContainerHome>
      <NavbarComponent />
      <BodyHome className="bodyHome">
        <ContainerForm> 
          <Banner />    
        </ContainerForm>
      </BodyHome>
      <Footer />
    </ContainerHome>
  )
}

export default Home;
