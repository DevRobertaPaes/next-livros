import { ControleEditora } from "@/classes/controle/ControleEditora";
import { Editora } from "@/classes/modelo/Editora";
import { NextApiRequest, NextApiResponse } from "next";

export const controleEditora = new ControleEditora();

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const editoras: Editora[] = controleEditora.getEditoras();
      res.status(200).json(editoras);
    } catch (error) {
      res.status(500).json({ error: "Erro ao obter editoras" });
    }
  } else {
    console.error(`Método não permitido: ${req.method}`);
    res.status(405).json({ error: "Método não permitido" });
  }
};

export default handler;
