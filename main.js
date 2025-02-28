import express from "express";

const app = express();
const PORT = 6789;

app.get("/", (req, res) => {
  res.json({ message: "hello vanakam!", name: "sindhuja", phone: 9898787889 });
});

//crud functionality of movies

//c -creating the movie

app.post("/movies" , () => {

});

//r-reading of movie

app.get("/movies" , () => {

});

// u-update of movie
app.put("/movies:id" , () => {

});

// d-delete the movie
app.delete("/movies:id" , () => {

});


app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
