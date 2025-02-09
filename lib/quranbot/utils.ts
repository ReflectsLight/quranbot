import { createRestAPIClient } from "npm:masto";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const localbase = resolve(import.meta.dirname, "..", "..");
const quranbot  = resolve(localbase, "etc", "quranbot", "quranbot.json");
const parse = async (path: string) => {
  const raw = await readFile(path);
  return JSON.parse(raw.toString());
}

export const post = async ({status}: {status: string}) => {
  try {
    const config = await parse(quranbot);
    const masto = createRestAPIClient(config.mastodon);
    return [await masto.v1.statuses.create({status}), null];
  } catch (err) {
    return [null, err];
  }
}
