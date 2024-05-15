import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from ".";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    try {
      const id: number = Number(req.query.codigo);
      controleLivro.excluir(id);
      res.status(200).json({ message: "Sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao excluir livro" });
    }
  } else {
    console.error(`Método não permitido: ${req.method}`);
    res.status(405).json({ error: "Método não permitido" });
  }
};

export default handler;
