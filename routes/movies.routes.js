import express from "express";
import { moviecreate,movieread,movieupdate,moviedelete } from "./controllers/movies.controllers.js"; 

const router = express.Router();


//crud functionality of movies

//c -creating the movie

router.post("/" , moviecreate);

//r-reading of movie

router.get("/" , movieread);

// u-update of movie
router.put("/:id" ,movieupdate );

// d-delete the movie
router.delete("/:id" , moviedelete);

export default router;