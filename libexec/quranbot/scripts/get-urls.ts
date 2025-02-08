import { readFile } from "node:fs/promises"
import process from "node:process";
import { resolve, join } from "node:path";

const getAllByName = async (): string[] => {
  const path = join(import.meta.dirname, "..", "..", "..", "share", "quranbot", "nameById.json")
  const json = resolve(path);
  const raw  = await readFile(json);
  const record: Record<string, string> = JSON.parse(raw.toString());
  return Object.values(record);
}

const getRandomName = async (): string => {
  const allByName  = await getAllByName();
  return allByName[Math.floor(Math.random() * allByName.length)];
}

(async () => {
  const randomName = await getRandomName();
  const locales = ["en", "ar"];
  const rootUrl = `https://al-quran.reflectslight.io`;
  locales.forEach((locale) => {
    console.info([rootUrl, locale, randomName].join("/"));
  });
})();
