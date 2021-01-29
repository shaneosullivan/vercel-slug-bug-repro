import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

export default function anApiFn(req: NextApiRequest, res: NextApiResponse) {
  res.send("Some output");
  res.status(200);
  res.end();
}
