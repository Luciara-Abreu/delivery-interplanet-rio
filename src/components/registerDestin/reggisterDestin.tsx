import React, { useState } from 'react';
import { ContainerForm, Form, ButtonStrap } from '../registerForm/styles';
import { Row, Col, Button } from 'react-bootstrap';
import { IinitialData, RegisterFormProps } from '../../interface/Interface';
import InputField from '../inputField/inputFieldProps';
import useFormState from '../../hook/useFormState';

const RegisterDestin: React.FC<RegisterFormProps> = ({ onSubmit, initialData = {} as IinitialData }) => {
  const [formData, handleChange, resetForm] = useFormState(initialData);
  const [destinationPlanet, setDestinationPlanet] = useState('');

  const isFormValid = () => {
    if (destinationPlanet === 'Marte') {
      const requiredFields: (keyof IinitialData)[] = ['fullNameDestin', 'marsLot'];
      return requiredFields.every(field => formData[field]);
    } else {
      const requiredFields: (keyof IinitialData)[] = ['fullName', 'phone', 'addressLine', 'address', 'addressNumber', 'addressCep', 'country', 'state'];
      return requiredFields.every(field => formData[field]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Form Data:', formData);
      onSubmit(formData);
      alert('Remessa enviada com sucesso!! Anote o ID da sua remessa e acompanhe no nosso site ID: 55525.');
      resetForm(); // Limpar campos após enviar / Não está limpando. Não tive tempo para ajudar
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const handleDestinationChange = (planet: string) => {
    setDestinationPlanet(planet);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <ContainerForm>
          <h1>Destinatário</h1>
          <Row>
            <Col>
              <Button variant="outline-dark" onClick={() => handleDestinationChange('Terra')}>Enviar para Terra</Button>
            </Col>
            <Col>
              <Button variant="outline-dark" onClick={() => handleDestinationChange('Marte')}>Enviar para Marte</Button>
            </Col>
          </Row>
  
          {destinationPlanet === 'Marte' ? (
            <Row>
              <InputField label="Nome *" name="fullNameDestin" value={formData.fullNameDestin} onChange={handleChange} required />
              <InputField label="Lote (4 dígitos):" name="marsLot" value={formData.marsLot} onChange={handleChange} required />
            </Row>
          ) : (
            <Row>
              <InputField label="Nome *" name="fullName" value={formData.fullName} onChange={handleChange} required />
              <InputField label="Telefone *" name="phone" value={formData.phone} onChange={handleChange} required />
              <InputField label="E-mail:" name="addressLine" value={formData.addressLine} onChange={handleChange} required />
              <InputField label="Rua:" name="address" value={formData.address} onChange={handleChange} required />
              <InputField label="Número:" name="addressNumber" value={formData.addressNumber} onChange={handleChange} required />
              <InputField label="CEP:" name="addressCep" value={formData.addressCep} onChange={handleChange} required />
              <InputField label="Cidade *" name="country" value={formData.country} onChange={handleChange} required />
              <InputField label="Estado *" name="state" value={formData.state} onChange={handleChange} required />
            </Row>
          )}
          <ButtonStrap>
            <Button variant="outline-dark" type="submit">Enviar</Button>{' '}
          </ButtonStrap>
        </ContainerForm>
      </Form>     
    </>
  );
};

export default RegisterDestin;
