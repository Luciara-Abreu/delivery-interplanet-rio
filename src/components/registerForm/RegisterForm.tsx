import { ContainerForm, Form, ButtonStrap } from './styles';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { IinitialData } from '../../interface/Interface';
import useFormState from '../../hook/useFormState';
import InputField from '../inputField/inputFieldProps';



const RegisterForm: React.FC<{ onSubmit: (data: IinitialData) => void; initialData?: IinitialData }> = ({ onSubmit, initialData = {} as IinitialData }) => {
  const [formData, handleChange, resetForm] = useFormState(initialData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);  
    onSubmit(formData);
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContainerForm>
        <Row>
          <InputField label="Nome *" name="fullName" value={formData.fullName} onChange={handleChange} required />
          <InputField label="Fone *" name="phone" value={formData.phone} onChange={handleChange} required />
          <InputField label="e-mail:" name="adressLine" value={formData.adressLine} onChange={handleChange} required />
        </Row>
        <Row>
          <InputField label="Rua:" name="address" value={formData.address} onChange={handleChange} required />
          <InputField label="Número:" name="addressNumber" value={formData.addressNumber} onChange={handleChange} required />
          <InputField label="Cep:" name="addressCep" value={formData.addressCep} onChange={handleChange} required />
        </Row>
        <Row>
          <InputField label="Cidade *" name="country" value={formData.country} onChange={handleChange} required colSize={6} />
          <InputField label="Estado *" name="state" value={formData.state} onChange={handleChange} required colSize={6} />
        </Row>
        <ButtonStrap>
          <Button variant="outline-dark" type="submit">CADASTRO</Button>{' '}
          <Button variant="outline-dark" type="button" onClick={resetForm}>Editar</Button>{' '}
        </ButtonStrap>
      </ContainerForm>
    </Form>
  );
};

export default RegisterForm;