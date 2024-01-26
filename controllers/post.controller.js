const { Post } = require("../models/post.model");

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.render("index.ejs", { posts });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const createPost = async (req, res) => {
  try {
    const { username, content } = req.body;
    const post = await Post.create({
      username,
      content,
    });
    res.redirect("/posts");
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getPost = async (req, res) => {
  try {
    let { id } = req.params;
    let post = await Post.findById(id);
    res.render("show.ejs", { post });
  } catch {
    res.status(500).json({ success: false });
  }
};
const editPost = async (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  await Post.findByIdAndUpdate(id, { content: newContent });
  res.redirect("/posts");
};

const deletePost = async (req, res) => {
  let { id } = req.params;
  console.log(id);
  await Post.findByIdAndDelete(id);
  res.redirect("/posts");
};

module.exports = { getAllPost, createPost, getPost, editPost, deletePost };
