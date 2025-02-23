"use client";
import { useState, useEffect } from "react";

// Interface para tipagem dos itens da lista
interface ListItem {
  id: string;
  name: string;
  resp: string;
  date: string;
  desc: string;
}

export default function Detalhes() {
  const [items, setItems] = useState<ListItem[]>([]);
  // Captura o ID da URL
  const urlParams = new URLSearchParams(window.location.search);
  const idSelected = urlParams.get("id");

  // Encontra o item correspondente ao ID
  const selectedItem = items.find(item => item.id === idSelected);

  // Carrega itens do localStorage
  useEffect(() => {
    const savedItems = localStorage.getItem("listItems");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  const formatDate = (dateString: string): string => {
    // Divide a string em partes: [ano, mês, dia]
    const [year, month, day] = dateString.split("-");
    
    // Formata para "dd/mm/yyyy" (padStart garante 2 dígitos, ex: 05)
    return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
  };

  return (
    <div className="justify-center pl-24 pr-24">
      <h1 className="text-4xl mt-12 text-center font-[family-name:var(--font-geist-mono)]">
        Detalhes da Atividade
      </h1>
      <ul className="list">
        {selectedItem ? (
        <div className="mt-16 pt-6 p-8 ml-24 mr-24 rounded-xl border border-solid border-black/[.08] dark:border-white/[.145] font-[family-name:var(--font-geist-mono)]">
          <>
            <h2 className="text-2xl mb-12">{selectedItem.name}</h2>
            <div>
              <p className="text-xl mb-4"><strong>Responsável:</strong> {selectedItem.resp}</p>
              <p className="text-xl mb-4"><strong>Data:</strong> {formatDate(selectedItem.date)}</p>
              <p className="text-xl mb-4"><strong>Descrição:</strong> {selectedItem.desc}</p>
            </div>
          </>
        </div>
        ) : (
          <p className="text-red-500">
            {items.length === 0 ? "Carregando..." : "Item não encontrado!"}
          </p>
        )}
      </ul>
    </div>
  );
}
