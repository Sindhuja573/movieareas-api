import express from "express";

const app = express();
const PORT = 6789;

app.get("/", (req, res) => {
  res.json({ message: "hello vanakam!", name: "sindhuja", phone: 9898787889 });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
