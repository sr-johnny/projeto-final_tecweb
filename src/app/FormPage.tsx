// FormPage.tsx

'use client'


import { useState } from 'react';
import { Registration } from './global/types';

const FormPage = () => {
  const [formData, setFormData] = useState<Registration>({
    id: '',
    name: '',
    email: '',
    age: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Gerar ID único
    const newRegistration = {
      ...formData,
      id: Date.now().toString()
    };

    // Salvar no LocalStorage
    const existingData = JSON.parse(localStorage.getItem('registrations') || '[]');
    const newData = [...existingData, newRegistration];
    localStorage.setItem('registrations', JSON.stringify(newData));

    // Resetar formulário
    setFormData({
      id: '',
      name: '',
      email: '',
      age: 0
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      
      <input
        type="number"
        placeholder="Idade"
        value={formData.age || ''}
        onChange={(e) => setFormData({...formData, age: Number(e.target.value)})}
      />
      
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default FormPage;