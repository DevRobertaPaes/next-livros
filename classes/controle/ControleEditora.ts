import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
  { codEditora: 1, nome: "Alta Books" },
  { codEditora: 2, nome: "Bookman" },
  { codEditora: 3, nome: "Addison Wesley" },
  { codEditora: 4, nome: "Pearson" },
];

export class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    if (editora) {
      return editora.nome;
    } else {
      return "Editora não encontrada";
    }
  }
}
