import { Col } from 'react-bootstrap';
import { Label, Input } from './styles';
import { InputFieldProps } from '../../interface/Interface';



const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, required = false, type = 'text', colSize = 4 }) => {
  return (
    <Col xs={12} md={colSize}>
      <Label>{label}</Label>
      <Input type={type} name={name} value={value} onChange={onChange} required={required} />
    </Col>
  );
};

export default InputField;

