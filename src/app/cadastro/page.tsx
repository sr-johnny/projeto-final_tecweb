'use client'
import Image from 'next/image';
import { Logo } from '@/components/interface';
import { useState } from 'react';

// Interface para tipagem dos itens da lista
interface ListItem {
  id: string;
  name: string;
  resp: string;
  date: string;
  desc: string;
}

export default function Form() {
  // Estados para o input e lista
  const [inputName, setInputName] = useState('');
  const [inputResp, setInputResp] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const [items, setItems] = useState<ListItem[]>([]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cadastrado com sucesso!");
    if (!inputName.trim()) return;

    const newItem: ListItem = {
      id: Date.now().toString(),
      name: inputName,
      resp: inputResp,
      date: inputDate,
      desc: inputDesc
    };

    const newItems = [...items, newItem];

    // Atualiza state e localStorage
    setItems(newItems);
    localStorage.setItem('listItems', JSON.stringify(newItems));
    
    setInputName('');
    setInputResp('');
    setInputDate('');
    setInputDesc('');
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-1 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6 row-start-2 items-center">
        {Logo()}
        <ul className="text-center font-[family-name:var(--font-geist-mono)]">
          <li>Cadastro de Atividades Acadêmicas</li>
          <li>Monitoramento dos Participantes</li>
        </ul>

        <form  onSubmit={handleSave} className="p-4 rounded-xl border border-solid border-black/[.08] dark:border-white/[.145]">
      <label className="font-[family-name:var(--font-geist-mono)]">
        Nome da atividade:{" "}
      </label>
      <input
        type="text"
        placeholder="Dê um título para sua atividade..."
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        className="mb-4 text-black w-full rounded-md pl-2 pr-2"
        required
      ></input>
      <br />
      <label className="font-[family-name:var(--font-geist-mono)]">
        Responsável:{" "}
      </label>
      <input
        type="text"
        placeholder="Digite o nome do responsável..."
        value={inputResp}
        onChange={(e) => setInputResp(e.target.value)}
        className="mb-4 text-black w-full rounded-md pl-2 pr-2"
        required
      ></input>
      <br />
      <label className="font-[family-name:var(--font-geist-mono)]">
        Data:{" "}
      </label>
      <input
        type="date"
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
        className="mb-4 text-black rounded-md pl-2 pr-2"
        required
      ></input>
      <br />
      <label className="font-[family-name:var(--font-geist-mono)]">
        Descrição:{" "}
      </label>
      <input
        name="desc"
        type="text"
        placeholder="Descreva a atividade..."
        value={inputDesc}
        onChange={(e) => setInputDesc(e.target.value)}
        className="text-black w-full rounded-md pl-2 pr-2"
        required
      ></input>

      <div className="flex mt-4 gap-4 w-full justify-center flex-col sm:flex-row">
      <button
          type="submit"
          className="rounded-xl border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          <Image src="/send.png" alt="Icone Cadastrar" width={20} height={20} />
          Cadastrar
        </button>

        <a
          className="rounded-xl border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="lista"
          target="_blank"
        >
          <Image
            className="dark:invert"
            src="/list.png"
            alt="Icone Lista"
            width={20}
            height={20}
          />
          Ver Lista
        </a>
      </div>
    </form>
      </main>
      
    </div>
  );
}