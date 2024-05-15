import type { NextPage } from "next";
import React, { useState } from "react";
import styles from "../styles/livrodados.module.css";
import { ControleEditora } from "@/classes/controle/ControleEditora";
import { Livro } from "@/classes/modelo/Livro";
import { Editora } from "@/classes/modelo/Editora";
import { useRouter } from "next/router";

const LivroDados: NextPage = () => {
  const controleEditora: ControleEditora = new ControleEditora();

  const [opcoes, setOpcoes] = useState(
    controleEditora.getEditoras().map((item: Editora) => ({
      value: item.codEditora,
      text: item.nome,
    }))
  );
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const router = useRouter();

  const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(evento.target.value));
  };

  const baseURL: string = "http://localhost:3000/api/livros";

  const incluirLivro = async (livro: Livro) => {
    const req = await fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(livro),
    });
    return req;
  };

  const incluir = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const livro = {
      codigo: 0,
      codEditora: codEditora,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split("\n"),
    };
    incluirLivro(livro);
    router.push("/LivroLista");
  };

  return (
    <main className="w-75 mt-4" style={{ margin: "auto" }}>
      <h1 className="mb-2">
        <b>Dados do Livro</b>
      </h1>
      <form onSubmit={incluir}>
        <div className="row">
          <div className="col-12 d-flex flex-column mb-2">
            <label htmlFor="input-livro">Título</label>
            <input
              id="input-livro"
              className="form-control"
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="col-12 d-flex flex-column mb-2">
            <label htmlFor="input-resumo">Resumo</label>
            <textarea
              id="input-resumo"
              className="form-control"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
            />
          </div>
          <div className="col-12 d-flex flex-column mb-2">
            <label>Editora</label>
            <select
              value={codEditora}
              onChange={tratarCombo}
              className="form-control"
            >
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 d-flex flex-column mb-2">
            <label htmlFor="input-autores">Autores</label>
            <textarea
              id="input-autores"
              className="form-control"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Salvar Dados
        </button>
      </form>
    </main>
  );
};

export default LivroDados;
