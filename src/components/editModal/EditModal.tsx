import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import InputField from '../inputField/inputFieldProps';
import { EditModalProps } from '../../interface/Interface';
import { ContainerForm, ButtonStrap } from './styles';



const EditModal: React.FC<EditModalProps> = ({ show, handleClose, formData, handleChange, handleModalSubmit }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edite seu registro, ou Salve</Modal.Title>
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
              <Button variant="outline-dark" type="button" onClick={handleClose}>Cancelar</Button>
            </ButtonStrap>
          </ContainerForm>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
