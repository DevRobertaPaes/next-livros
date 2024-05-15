import { ControleLivro } from "@/classes/controle/ControleLivros";
import { Livro } from "@/classes/modelo/Livro";
import { NextApiRequest, NextApiResponse } from "next";

export const controleLivro = new ControleLivro();

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      try {
        const livros: Livro[] = controleLivro.obterLivros();
        res.status(200).json(livros);
      } catch (error) {
        res.status(500).json({ error: "Erro ao obter editoras" });
      }
      break;
    case "POST":
      try {
        const body: Livro = req.body;
        controleLivro.incluir(body);
        res.status(200).json({ message: "Sucesso" });
      } catch (error) {
        res.status(500).json({ error: "Erro ao adicionar livro" });
      }
    default:
      console.error(`Método não permitido: ${req.method}`);
      res.status(405).json({ error: "Método não permitido" });
      break;
  }
};

export default handler;
