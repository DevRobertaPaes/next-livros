import React from "react";
import { ControleEditora } from "../classes/controle/ControleEditora";
import { Livro } from "../classes/modelo/Livro";

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  const handleExcluir = () => {
    excluir(Number(livro.codigo));
  };

  return (
    <tr key={livro.codigo}>
      <td className="d-flex flex-column">
        {livro.titulo}
        <button onClick={handleExcluir} className="btn btn-danger w-50">
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        {livro.autores.map((autor, index) => (
          <li key={index}>{autor}</li>
        ))}
      </td>
    </tr>
  );
};

export default LinhaLivro;
