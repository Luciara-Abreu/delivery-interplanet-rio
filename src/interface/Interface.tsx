export interface RegisterProps {
  onSubmit: (data: { address: string; addressNumber: string; addressCep: string; fullName: string, phone: string, country: string, state: string, adressLine: string }) => void;
  initialData?: { address: string; addressNumber: string, addressCep: string, fullName: string, phone: string, country: string, state: string, adressLine: string };
}

export interface  IinitialData { 
  address: string; 
  addressNumber: string, 
  addressCep: string, 
  fullName: string, 
  phone: string, 
  country: string, 
  state: string, 
  adressLine: string };

  export interface InputFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: string;
    colSize?: number;
  }