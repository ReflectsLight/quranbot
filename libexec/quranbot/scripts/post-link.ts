import process from "node:process";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createRestAPIClient } from "npm:masto"

const post = async (masto, url: string) => {
  try {
    const hashtags = "#TheNobleQuran #TheQuran #Islam #Islamic";
    const status = [url, "\n", hashtags].join("\n");
    return await masto.v1.statuses.create({status});
  } catch (err) {
    return err;
  }
}

const parse = async (path: string) => {
  try {
    const raw = await readFile(path);
    return JSON.parse(raw.toString());
  } catch (err) {
    return err;
  }
}

async function main() {
  const url  = process.argv[2];
  const path = resolve(import.meta.dirname, "..", "..", "..", "etc", "quranbot", "quranbot.json");
  const etc  = await parse(path);
  if (etc instanceof Error) {
    console.error("quranbot:", "read or parse error");
    process.exit(1);
  }

  const masto = createRestAPIClient(etc.mastodon);
  const res = await post(masto, url);
  if (res instanceof Error) {
    console.error("quranbot:", "mastodon error");
    process.exit(1);
  }
  console.log("quranbot:", res.url);
}

await main();
