import React, { useState } from 'react';
import { ContainerForm, Form, Input, Label, ButtonStrap } from './styles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

interface RegisterProps {
  onSubmit: (data: { address: string; addressNumber: string; addressCep: string; fullName: string, phone: string, country: string, state: string, adressLine: string }) => void;
  initialData?: { address: string; addressNumber: string, addressCep: string, fullName: string, phone: string, country: string, state: string, adressLine: string };
}

const RegisterForm: React.FC<RegisterProps> = ({ onSubmit, initialData = {} }) => {
  const [address, setAddress] = useState(initialData.address || '');
  const [addressNumber, setAddressNumber] = useState(initialData.addressNumber || '');
  const [addressCep, setAddressCep] = useState(initialData.addressCep || '');

  const [fullName, setFullName] = useState(initialData.fullName || '');
  const [country, setCountry] = useState(initialData.country || '');
  const [state, setState] = useState(initialData.state || '');
  const [adressLine, setAdressLine] = useState(initialData.adressLine || '');
  const [phone, setPhone] = useState(initialData.phone || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { address, addressNumber, addressCep, fullName, phone, country, state, adressLine };
    console.log(formData);
    onSubmit(formData);
    setAddress('');
    setAddressNumber('');
    cleaner();
  };

  function cleaner() {
    setAddress('');
    setAddressNumber('');
    setAddressCep('');
    setFullName('');
    setPhone('');
    setCountry('');
    setState('');
    setAdressLine('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <ContainerForm>
        <Row>
          <Col xs={12} md={4}>
            <Label>Nome *</Label>
            <Input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required />
          </Col>

          <Col xs={12} md={4}>
            <Label>Fone *</Label>
            <Input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required />
          </Col>

          <Col xs={12} md={4}>
            <Label>e-mail:</Label>
            <Input
              type="text"
              value={adressLine}
              onChange={(e) => setAdressLine(e.target.value)}
              required />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <Label>Rua:</Label>
            <Input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required />
          </Col>

          <Col xs={12} md={4}>
            <Label>Número:</Label>
            <Input
              type="text"
              value={addressNumber}
              onChange={(e) => setAddressNumber(e.target.value)}
              required />
          </Col>

          <Col xs={12} md={4}>
            <Label>Cep:</Label>
            <Input
              type="text"
              value={addressCep}
              onChange={(e) => setAddressCep(e.target.value)}
              required />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <Label>Cidade *</Label>
            <Input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required />
          </Col>

          <Col xs={12} md={6}>
            <Label>Estado *</Label>
            <Input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required />
          </Col>
        </Row>

        <ButtonStrap>
          <Button variant="outline-dark" type="submit">CADASTRO</Button>{' '}    
          <Button variant="outline-dark" type="submit">Editar</Button>{' '}         
        </ButtonStrap>
      </ContainerForm>
    </Form>
  );
};

export default RegisterForm;
