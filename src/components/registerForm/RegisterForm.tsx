import React, { useState } from 'react';
import { ContainerForm, Form, ButtonStrap } from './styles';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import useFormState from '../../hook/useFormState';
import { IinitialData } from '../../interface/Interface';
import InputField from '../inputField/inputFieldProps';
import { Modal } from 'react-bootstrap';

interface RegisterFormProps {
  onSubmit: (data: IinitialData) => void;
  initialData?: IinitialData;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, initialData = {} as IinitialData }) => {
  const [formData, handleChange] = useFormState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [cadastrar, setCadastrar] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    onSubmit(formData);

    console.log("cadastrar", cadastrar) 

    if (cadastrar ===  false) {
      setCadastrar(true);  
    }
  };

  const handleEditClick = () => {
    setShowModal(true);
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
            <Button variant="outline-dark" type="submit" onClick={handleEditClick}>CADASTRAR</Button>{' '}         
          </ButtonStrap>  

        </ContainerForm>
      </Form>


      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleModalSubmit}>
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
                <Button variant="outline-dark" type="submit">Salvar</Button>{' '}
                <Button variant="outline-dark" type="button" onClick={() => setShowModal(false)}>Cancelar</Button>
              </ButtonStrap>
            </ContainerForm>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterForm;
