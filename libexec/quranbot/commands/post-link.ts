import { post } from "../functions/utils.ts";
import { Quran } from "@0x1eef/quran";
import { memory } from "@quranbot/memory";

const rootUrl = "https://al-quran.reflectslight.io";
const locales = ["ar", "en"];
const surahId = await (async function() {
  if (await memory.exists("post-link")) {
    var id = await memory.get("post-link");
    return (++id > 114) ? 1 : id;
  } else {
    return 1;
  }
})();

async function main() {
  locales.forEach(async (locale) => {
    const surahs   = Quran.surahs[locale];
    const surah    = surahs[surahId - 1];
    const url      = [rootUrl, locale, surah.urlName].join("/");
    const hashtags = "#TheNobleQuran #TheQuran #Quran";
    const status   = [url, "\n", hashtags].join("\n");
    const [res, err] = await post({status});
    if (err instanceof Error) {
      console.error("quranbot:", "unexpected error", "\n", res.message);
      process.exit(1);
    } else {
      console.log("quranbot:", res.url);
    }
  });
  await memory.set("post-link", surahId);
}

await main();
