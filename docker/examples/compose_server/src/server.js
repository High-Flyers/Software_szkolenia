const express = require("express");
const redis = require("redis");
const app = express();
const port = 3000;

const main = async () => {
  const client = redis.createClient({ url: "redis://redis:6379" });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  app.get("/write/:key/:text", async (req, res) => {
    await client.set(req.params.key, req.params.text);
    res.send("OK");
  });

  app.get("/read/:key", async (req, res) => {
    let text = await client.get(req.params.key);
    if (text) res.send(text);
    else res.send("NOT FOUND");
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

main().catch((e) => console.error(e));
