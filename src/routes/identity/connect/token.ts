import app from "/app";

app.get("/identity/connect/token", (c) => {
  return c.json("hello");
});
