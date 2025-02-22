"use client";
import { useState, useEffect } from "react";

// Interface para tipagem dos itens da lista
interface ListItem {
  id: string;
  text: string;
}

export default function Detalhes() {
  const [items, setItems] = useState<ListItem[]>([]);

  // Carrega itens do localStorage ao iniciar
  useEffect(() => {
    const savedItems = localStorage.getItem("listItems");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  // Remove item
  const handleDelete = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id);

    // Atualiza state e localStorage
    setItems(updatedItems);
    localStorage.setItem("listItems", JSON.stringify(updatedItems));
  };

  return (
    <div className="justify-center pl-24 pr-24">
      <h1 className="text-4xl mt-12 text-center font-[family-name:var(--font-geist-mono)]">
      Detalhes da Atividade
      </h1>
      <div className="flex justify-around pl-24 pr-24 flex-row mt-16 mb-4">
        <h2>Nome da Atividade: </h2>
      </div>
      <ul className="list">
        <div className="pt-0 pb-4 ml-60 mr-60 rounded-xl border border-solid border-black/[.08] dark:border-white/[.145]">
          {items.map((item) => (
            <li key={item.id} className="list-item">
              <a href="detalhes" className="flex justify-between rounded-lg border dark:border-white/[.145] pl-12 pr-12 text-xl mt-6 font-[family-name:var(--font-geist-mono)]">
                <p>{item.name}</p>
                <p>{item.resp}</p>
              </a>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
