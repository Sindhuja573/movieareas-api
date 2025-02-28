import express from "express";
import movieRoutes from './routes/movies.routes.js';

const app = express();
const PORT = 6789;

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "hello vanakam!!", name: "sindhuja", phone: 9898787889 });
});

app.use('/movies', movieRoutes);

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});
