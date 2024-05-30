import styled from 'styled-components'



export const ContainerFooter = styled.div`
width: 100%;
bottom: 0;
background: #1d1e22;

h2{
  padding-bottom: 7px;
 } 
`

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  border: none;
  border-bottom: 1px solid #ccc;
  padding-top: 10px;

}
`

export const ContainerLeft = styled.div`
flex: 1;
color: #ffff;

p{
  color: #495057;
  text-indent: 10%; 
  margin: 2%;
}
p:hover {
  color: #adb5bd; 
}
`

export const ContainerCenter = styled.div`
width: 100%;
flex: 1;
color: #ffff;
gap: 10px;


p{
  margin: 10px;
}

.secction{
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 23%;
  gap: 13px; /* Espaçamento entre o <p> e o link */
  color: #495057;
  cursor: pointer;
}

.secction:hover {
  color: #adb5bd; 
}

`

export const ContainerRight = styled.div`
flex: 1;
color: #ffff;
`

export const ContainerBotton = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;

.p-footer{
  width: 50%;
  color: #495057;
  font-size: 15px; 
}
.p-footer:hover{
  color: #adb5bd; 
}


.Redes-sociais{
  width: 50%;
  display: flex;
  color: #495057;
  justify-content: center;
  padding-bottom: 25px;
}
`