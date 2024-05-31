export interface IFormData {
  fullName: string;
  fullNameDestin: string;
  phone: string;
  addressLine: string;
  address: string;
  addressNumber: string;
  addressCep: string;
  country: string;
  state: string;
  marsLot: string;
  product: string;
}


export interface RegisterFormProps {
  onSubmit: (data: IinitialData) => void;
  initialData?: IinitialData;
}

export interface  IinitialData { 
  fullName: string;
  fullNameDestin: string;
  phone: string;
  addressLine: string;
  address: string;
  addressNumber: string;
  addressCep: string;
  country: string;
  state: string;
  marsLot:string;
  product:string;
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