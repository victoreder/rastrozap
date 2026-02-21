import React, { createContext, useContext } from 'react';

interface FormContextType {
  values: Record<string, any>;
  handleChange: (name: string, value: any) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (formData: Record<string, any>) => void;
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  children,
  className = '',
  ...props
}) => {
  const [values, setValues] = React.useState<Record<string, any>>({});

  const handleChange = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <FormContext.Provider value={{ values, handleChange }}>
      <form
        onSubmit={handleSubmit}
        className={`space-y-4 font-inter ${className}`}
        {...props}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a Form');
  }
  return context;
};

Form.displayName = 'Form';

export { Form, useFormContext, type FormProps, type FormContextType };
