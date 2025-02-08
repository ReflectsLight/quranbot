import process from "node:process";
import { createRestAPIClient } from "npm:masto"

const post = async (masto, url: string) => {
  const status = url +
                 " \n\n " +
                 "#TheNobleQuran #TheQuran #Islam #Islamic";
  return await masto.v1.statuses.create({status});
}

(async () => {
  const url   = process.argv[2];
  const masto = createRestAPIClient({
    url: "https://mastodon.social",
    accessToken: process.env.access_token,
  });
  try {
    const res = await post(masto, url);
    console.log("ok:", res.url);
  } catch(e) {
    console.error("error:", e);
  }
})();
