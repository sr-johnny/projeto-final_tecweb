import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-1 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/ufc_out.png"
          alt="UFC logo"
          width={360}
          height={75}
          priority
        />
        <ul className="text-center font-[family-name:var(--font-geist-mono)]">
          <li>Cadastro de Atividades Acadêmicas</li>
          <li>Monitoramento dos Participantes</li>
        </ul>

        <form className="p-4 rounded-xl border border-solid border-black/[.08] dark:border-white/[.145]">
          <label className="font-[family-name:var(--font-geist-mono)]">Nome da atividade: </label>
          <input type="text" className="mb-4 text-black w-full rounded-md pl-2 pr-2" name="nome"></input>
          <br/>
          <label className="font-[family-name:var(--font-geist-mono)]">Responsável: </label>
          <input type="text" className="mb-4 text-black w-full rounded-md pl-2 pr-2" name="resp"></input>
          <br/>
          <label className="font-[family-name:var(--font-geist-mono)]">Data: </label>
          <input type="date" className="mb-4 text-black rounded-md pl-2 pr-2" name="data"></input>
          <br/>
          <label className="font-[family-name:var(--font-geist-mono)]">Descrição: </label>
          <textarea name="desc" rows={2} cols={40}  className="text-black w-full rounded-md pl-2 pr-2"></textarea>
        </form>

       

        <div className="flex gap-4 items-center flex-col sm:flex-row">

          <button
            className="rounded-xl border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            
          >
            <Image
              src="/send.png"
              alt="Icone Cadastrar"
              width={20}
              height={20}
            />
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
      </main>
      
    </div>
  );
}
