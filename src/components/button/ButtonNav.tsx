import { ComponentButton } from "./styles";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function ButtonNav() {

  const history = useNavigate()

  const handleClickHome = () => {
    history('/home');
  }

  const handleClickRegister = () => {
    history('/register');
  }

  const handleClickSend = () => {
    history('/send');
  }

  return (
    <ComponentButton>
      <Button variant="outline-secondary" onClick={handleClickHome}>HOME</Button>{' '}
      <Button variant="outline-secondary" onClick={handleClickRegister}>CADASTRO</Button>{' '}
     </ComponentButton>
  );
}

export default ButtonNav;


