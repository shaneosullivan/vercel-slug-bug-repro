import { NextApiRequest, NextApiResponse } from "next";

export default function anApiFn(req: NextApiRequest, res: NextApiResponse) {
  res.send("Some output");
  res.status(200);
  res.end();
}
