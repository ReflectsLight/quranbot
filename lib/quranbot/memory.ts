import { resolve, join } from "node:path";
import { writeFile, readFile, access } from "node:fs/promises";
import { existsSync } from "node:fs";

type Key = string;
type Cell = number;
type Maybe<T> = T | undefined;

const localbase = resolve(import.meta.dirname, "..", "..");
const sharedir  = join(localbase, "share", "quranbot");
const database  = join(sharedir, "memory.json");

export const memory = {
  set: async function(key: Key, cell: Cell): Promise<void> {
    if (await this.exists(database)) {
      var content = await readFile(database);
      var memory  = JSON.parse(content.toString());
    } else {
      var memory = {}
    }
    memory[key] = cell;
    return writeFile(database, JSON.stringify(memory));
  },

  get: async function(key: string): Promise<Maybe<Cell>> {
    return readFile(database)
      .then((content) => JSON.parse(content.toString()))
      .then((memory) => memory[key]);
  },

  exists: async function(key: Key): Promise<boolean> {
    if (existsSync(database)) {
      return readFile(database)
        .then((content) => JSON.parse(content.toString()))
        .then((memory) => memory.hasOwnProperty(key));
    } else {
      return false;
    }
  }
}
