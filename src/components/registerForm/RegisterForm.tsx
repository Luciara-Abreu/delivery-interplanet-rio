import React, { useState } from 'react';
import { ContainerForm, Form, ButtonStrap } from './styles';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import useFormState from '../../hook/useFormState';
import { IinitialData, RegisterFormProps } from '../../interface/Interface';
import InputField from '../inputField/inputFieldProps';
import EditModalSender from '../editModalSender/EditModalSender';


const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, initialData = {} as IinitialData }) => {
  const [formData, handleChange] = useFormState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [cadastrar, setCadastrar] = useState(false);

  const isFormValid = () => {
    const requiredFields: (keyof IinitialData)[] = [
      'fullName', 'phone', 'addressLine', 'address', 
      'addressNumber', 'addressCep', 'country', 'state'
    ];
    return requiredFields.every(field => formData[field]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    onSubmit(formData);
    if (cadastrar === false) {
      setCadastrar(true);
    }
  };

  const handleEditClick = () => {
    if (isFormValid()) {
      setShowModal(true);
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Edited Data:', formData);
    onSubmit(formData);
    setShowModal(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <ContainerForm>
          <h1>Remetente</h1>
          <Row>
            <InputField label="Nome *" name="fullName" value={formData.fullName} onChange={handleChange} required />
            <InputField label="Fone *" name="phone" value={formData.phone} onChange={handleChange} required />
            <InputField label="e-mail:" name="addressLine" value={formData.addressLine} onChange={handleChange} required />
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
            <Button variant="outline-dark" type="submit" onClick={handleEditClick}>Cadastrar</Button>{' '}
          </ButtonStrap>
        </ContainerForm>
      </Form>

      <EditModalSender
        show={showModal}
        handleClose={() => setShowModal(false)}
        formData={formData}
        handleChange={handleChange}
        handleModalSubmit={handleModalSubmit}
      />
    </>
  );
};

export default RegisterForm;

