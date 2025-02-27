"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// Interface para tipagem dos itens da lista
interface ListItem {
  id: string;
  name: string;
  resp: string;
  date: string;
  desc: string;
}

export default function Lista() {
  const [items, setItems] = useState<ListItem[]>([]);

  // Carrega itens do localStorage ao iniciar
  useEffect(() => {
    const savedItems = localStorage.getItem("listItems");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir esta atividade?")) {
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
      localStorage.setItem("listItems", JSON.stringify(updatedItems));
    }
  };

  return (
    <div className="justify-center pl-24 pr-24 mb-12">
      <h1 className="text-4xl mt-12 text-center font-[family-name:var(--font-geist-mono)]">
        Lista de Atividades Cadastradas
      </h1>
      <div className="flex justify-between pl-16 pr-8 flex-row mt-16 mb-4">
        <p className="text-2xl font-[family-name:var(--font-geist-mono)]">
          Nome da Atividade
        </p>
        <div className="flex flex-row justify-between w-1/5">
        <p className="text-2xl font-[family-name:var(--font-geist-mono)]">
          Editar
        </p>
        <p className="text-2xl font-[family-name:var(--font-geist-mono)]">
          Excluir
        </p>
        </div>
      </div>
      <ul className="list">
        <div className="pt-1 self-center bg-black p-6 rounded-lg">
          {items.map((item) => (
            <li key={item.id} className="list-item">
              <div className="flex pt-2 justify-between h-12 bg-stone-900 rounded-lg border dark:border-white/[.145] pl-12 pr-12 text-xl mt-6 font-[family-name:var(--font-geist-mono)]">
                <a target="_blank" href={`lista/detalhes?id=${item.id}`}>
                  <p>{item.name}</p>
                </a>
                <div className="flex flex-row justify-between w-2/12">
                <a className="mb-2 ml-6" href={`lista/editar?id=${item.id}`}>
                  <Image
                    src="/edit.png"
                    className="dark:invert"
                    alt="Icone Lista"
                    width={25}
                    height={25}
                  />
                </a>
                <button className="mb-2" onClick={() => handleDelete(item.id)}>
                  <Image
                    src="/delete.png"
                    alt="Icone Lista"
                    width={25}
                    height={25}
                  />
                </button>
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
