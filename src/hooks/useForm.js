import { useState } from 'react';

function useForm(formDataDefault) {
  const [formData, setFormData] = useState(formDataDefault);

  function setValue(key, value) {
    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setFormData(formDataDefault);
  }

  return {
    formData,
    handleChange,
    clearForm,
  };
}

export default useForm;
