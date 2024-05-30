import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';
import { IinitialData } from '../../interface/Interface';
import RegisterForm from '../registerForm/RegisterForm';

const initialFormData: IinitialData = {
  address: '',
  addressNumber: '',
  addressCep: '',
  fullName: '',
  phone: '',
  country: '',
  state: '',
  adressLine: ''
};

const ParentComponent: React.FC = () => {
  const [data, setData] = useState<IinitialData[]>([]);
  const [editingData, setEditingData] = useState<IinitialData | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (formData: IinitialData) => {
    if (editingData) {
      // Update existing data
      setData((prevData) => prevData.map((item) => (item.address === editingData.address ? formData : item)));
      setEditingData(null);
    } else {
      // Add new data
      setData((prevData) => [...prevData, formData]);
    }
    setShowModal(false); // Close modal after submit
  };

  const handleEditClick = (item: IinitialData) => {
    setEditingData(item);
    setShowModal(true); // Open modal on edit
  };

  const handleAddClick = () => {
    setEditingData(null);
    setShowModal(true); // Open modal for new entry
  };

  return (
    <div>
      <Button variant="primary" onClick={handleAddClick}>Add New</Button>
      <ul>
        {data.map((item) => (
          <li key={item.address}>
            {item.fullName} - {item.phone}
            <Button variant="outline-primary" onClick={() => handleEditClick(item)}>Editar</Button>
          </li>
        ))}
      </ul>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingData ? 'Editar Registro' : 'Novo Registro'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm
            onSubmit={handleFormSubmit}
            initialData={editingData || initialFormData}      
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ParentComponent;
