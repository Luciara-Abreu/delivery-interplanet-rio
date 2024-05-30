import { ContainerBotton, ContainerCenter, ContainerFooter, ContainerLeft, SubContainer } from "./styles"


function Footer() {
  return (
    <ContainerFooter>
      <SubContainer>

        <ContainerLeft>
          <div> <h2>Sobre Luci Abreu</h2>
            <p>
              Eu sou uma mulher determinada, focada e objetiva, com sonhos e pensamentos positivos, mas sempre com os pés no chão. Venho de uma família humilde, e desde cedo entendi que precisava de força e determinação para alcançar uma vida melhor. 
              Sou apaixonado pela Tecnologia da Informação, área na qual obteve um diploma superior, resultado de muito esforço e dedicação. Penso e reflito constantemente sobre a vida, buscando sempre melhorar as situações e apoiar os outros. Acredito no valor da análise crítica e na importância de ponderar antes de agir. Isso define quem eu sou: uma pessoa reflexiva, analítica e dedicada.
            </p>
          </div>
        </ContainerLeft>

        <ContainerCenter>
          <h2>Contato</h2>          
     
          <div className='secction'>
          <p>GitHub</p>
           https://github.com/Luciara-Abreu </div>

      
          <div className='secction'>
          <p>linkedIn</p>
          https://www.linkedin.com/in/luciara-abreu/ </div>          

       
          <div className='secction'>
          <p>E-mail</p>
          luciara.abreu@gmail.com </div>       
          
        </ContainerCenter>     
      </SubContainer>

      <ContainerBotton>
        <div className="p-footer">
          Criado por Luci Abreu ©2024. Todos os direitos reservados.
        </div>   
      </ContainerBotton>
    </ContainerFooter>
  )
}

export default Footer
