import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import style from "../styles/livrolista.module.css";
import { Livro } from "@/classes/modelo/Livro";
import Head from "next/head";
import LinhaLivro from "@/componentes/LinhaLivro";

const LivroLista: NextPage = () => {
  const [livros, setLivros]: any = useState(false);
  const [carregado, setCarregado] = useState(false);

  const baseURL: string = "http://localhost:3000/api/livros";

  const obter = async () => {
    const req = await fetch(baseURL).then((resp) => resp.json());
    return req;
  };

  const excluirLivro = async (codigo: number) => {
    const req = await fetch(`${baseURL}/${codigo}`, { method: "DELETE" }).then(
      (resp) => resp.json()
    );
    return req;
  };

  const excluir = async (codigo: number) => {
    await excluirLivro(codigo);
    return setCarregado(false);
  };

  useEffect(() => {
    obter().then((resp) => {
      setLivros(resp);
      setCarregado(true);
    });
  }, [carregado]);

  return (
    <main>
      <h1 className="w-100 text-center mb-2 mt-2" style={{ fontSize: "36px" }}>
        <b>Catálogo de Livros</b>
      </h1>
      {carregado && (
        <table className={style.table}>
          <thead className={style.thead}>
            <tr className={style.tr}>
              <th className={style.th}>Título</th>
              <th className={style.th}>Resumo</th>
              <th className={style.th}>Editora</th>
              <th className={style.th}>Autores</th>
            </tr>
          </thead>
          <tbody className={style.tbody}>
            {livros.map((livro: Livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default LivroLista;
