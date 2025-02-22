// ListPage.tsx
'use client'

import { useEffect, useState } from 'react';
import { Registration } from './global/types';

const ListPage = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem('registrations');
    if (savedData) {
      setRegistrations(JSON.parse(savedData));
    }
  }, []);

  return (
    <div>
      <h1>Cadastros</h1>
      <ul>
        {registrations.map((reg) => (
          <li key={reg.id}>
            <h3>{reg.name}</h3>
            <p>Email: {reg.email}</p>
            <p>Idade: {reg.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;