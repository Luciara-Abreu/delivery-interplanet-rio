export interface RegisterProps {
  onSubmit: (data: { address: string; addressNumber: string; addressCep: string; fullName: string, phone: string, country: string, state: string, adressLine: string }) => void;
  initialData?: { address: string; addressNumber: string, addressCep: string, fullName: string, phone: string, country: string, state: string, adressLine: string };
}

export interface RegisterFormProps {
  onSubmit: (data: IinitialData) => void;
  initialData?: IinitialData;
}

export interface  IinitialData { 
  fullName: string;
  phone: string;
  adressLine: string;
  address: string;
  addressNumber: string;
  addressCep: string;
  country: string;
  state: string;
};

  export interface InputFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: string;
    colSize?: number;
  }

  export interface EditModalProps {
    show: boolean;
    handleClose: () => void;
    formData: IinitialData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleModalSubmit: (e: React.FormEvent) => void;
  }