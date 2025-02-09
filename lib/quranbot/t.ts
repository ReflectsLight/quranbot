import { readFileSync } from "node:fs";
import { resolve, join } from "node:path";

type PhraseMap<T> = {
  [key: string]: undefined | string | PhraseMap<T>;
};

const localbase = resolve(import.meta.dirname, "..", "..");
const translations = join(localbase, "share", "quranbot", "t.json");
const parse = function(): PhraseMap<string>  {
  const content = readFileSync(translations);
  return JSON.parse(content.toString());
};

export const t = function (locale: string, key: string) {
  const phrases = parse();
  const path = key.split(".");
  const phrase = path.reduce(
    (o, k) => (typeof o === "object" ? o[k] : o),
    phrases[locale],
  );
  return typeof phrase === "string" ? phrase : key;
}
