import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const nomeEditora: string = controleEditora.getNomeEditora(
        Number(req.query.codEditora)
      );
      res.status(200).json(nomeEditora);
    } catch (error) {
      res.status(500).json({ error: "Erro ao obter editoras" });
    }
  } else {
    console.error(`Método não permitido: ${req.method}`);
    res.status(405).json({ error: "Método não permitido" });
  }
};

export default handler;
