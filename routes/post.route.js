const { Router } = require("express");
const {
  getAllPost,
  createPost,
  getPost,
  editPost,
  deletePost,
} = require("../controllers/post.controller");
const { Post } = require("../models/post.model");

const router = Router();
router.route("/posts").get(getAllPost).post(createPost);
router.route("/posts/:id").get(getPost).patch(editPost).delete(deletePost);

router.route("/new/post").get((req, res) => {
  res.render("new.ejs");
});
router.route("/edit/post/:id").get(async (req, res) => {
  let { id } = req.params;
  const post = await Post.findById(id);
  res.render("edit.ejs", { post });
});

// app.get("/posts/:id",(req,res)=>{
//     let {id} = req.params;
//     // console.log(id);
//     let post = posts.find((p) => id === p.id);
//     // console.log(post);
//     res.render("show.ejs",{posts});
//     // res.send("request working");
// })

// app.get("/posts/:id/edit",(req,res)=>{
//     let {id}  = req.params;
//     let post = posts.find((p) => id === p.id);
//     res.render("edit.ejs",{post})
//     res.redirect("/posts");

// })

module.exports = router;
