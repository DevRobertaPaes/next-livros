import { Livro } from "../modelo/Livro";

const livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 2,
    titulo: "Vidas Secas",
    resumo:
      "'Vidas Secas' denuncia o descaso social e a exploração humana. O romance conta a história de uma família de retirantes do sertão brasileiro.",
    autores: ["Graciliano Ramos"],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: "O Assassinato No Expresso Oriente",
    resumo:
      "Hercule Poirot, detetive particular e oficial aposentado da polícia belga, toma o Expresso Taurus para Istambul.",
    autores: ["Agatha Christie"],
  },
  {
    codigo: 3,
    codEditora: 4,
    titulo: "Morte no Nilo",
    resumo:
      "A tranquilidade de um cruzeiro de luxo pelo Nilo chega ao fim quando o corpo de Linnet Doyle, uma bela e jovem milionária, é descoberto em sua cabine.",
    autores: ["Agatha Christie"],
  },
];

export class ControleLivro {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(novoLivro: Livro): void {
    novoLivro.codigo =
      livros.length > 0 ? livros[livros.length - 1].codigo + 1 : 1;
    livros.push(novoLivro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}
