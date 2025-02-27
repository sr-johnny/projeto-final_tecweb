"use client";
import Image from "next/image";
import { Logo } from "@/components/interface";
import { useEffect, useState } from "react";

// Interface para tipagem dos itens da lista
interface ListItem {
  id: string;
  name: string;
  resp: string;
  date: string;
  desc: string;
}

export default function Form() {
  const [items, setItems] = useState<ListItem[]>([]);
  const [name, setName] = useState("");
  const [resp, setResp] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");

  // Captura o ID da URL
  const urlParams = new URLSearchParams(window.location.search);
  const idToEdit = urlParams.get("id");

  // Carrega os dados do localStorage e preenche o formulário
  useEffect(() => {
    const savedItems = localStorage.getItem("listItems");
    if (savedItems) {
      const parsedItems: ListItem[] = JSON.parse(savedItems);
      setItems(parsedItems);

      // Encontra o item a ser editado
      const itemToEdit = parsedItems.find(item => item.id === idToEdit);
      if (itemToEdit) {
        setName(itemToEdit.name);
        setResp(itemToEdit.resp);
        setDate(itemToEdit.date);
        setDesc(itemToEdit.desc);
      }
    }
  }, [idToEdit]);

  // Atualiza o item no localStorage
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedItems = items.map(item => 
      item.id === idToEdit ? { ...item, name, resp, date, desc } : item
    );

    localStorage.setItem("listItems", JSON.stringify(updatedItems));
    alert("Atualizado com sucesso!");
    window.location.href = "/lista"; // Redireciona de volta para a lista
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-1 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6 row-start-2 items-center">
        {Logo()}
        <h1 className="text-4xl mt-2 text-center font-[family-name:var(--font-geist-mono)]">
          Editar Atividade: 
        </h1>

        <form
          onSubmit={handleSubmit}
          className="p-4 rounded-xl border border-solid border-black/[.08] dark:border-white/[.145]"
        >
          <label className="font-[family-name:var(--font-geist-mono)]">
            Nome da atividade:{" "}
          </label>
          <input
            type="text"
            placeholder="Dê um título para sua atividade..."
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={resp}
            onChange={(e) => setResp(e.target.value)}
            className="mb-4 text-black w-full rounded-md pl-2 pr-2"
            required
          ></input>
          <br />
          <label className="font-[family-name:var(--font-geist-mono)]">
            Data:{" "}
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="text-black w-full rounded-md pl-2 pr-2"
            required
          ></input>

          <div className="flex mt-4 gap-4 w-full justify-center flex-col sm:flex-row">
            <button
              type="submit"
              className="rounded-xl border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              <Image
                src="/send.png"
                alt="Icone Cadastrar"
                width={20}
                height={20}
              />
              Atualizar
            </button>

            <a
              className="rounded-xl border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="./"
            >
              <Image
                className="dark:invert"
                src="/list.png"
                alt="Icone Lista"
                width={20}
                height={20}
              />
              Voltar à Lista
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}
