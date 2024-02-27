import app from "/app";

app.get("/", (c) => {
  return c.json("hello");
});
