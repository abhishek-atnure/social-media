const router = require("express").Router();
const Post = require("../models/Post");

//create post
router.post("/:userId", async (req, res) => {
  const newPost = new Post({
    userId: req.params.userId,
    name: req.body.name,
    desc: req.body.desc,
  });
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//like a post

router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("the post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("the post has been disliked");
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

router.put("/:id/comment", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    await post.updateOne({
      $push: {
        comments: { content: req.body.content, name: req.body.name },
      },
    });
    res.status(200).json("comment added");
  } catch (error) {
    res.status(500).json(error);
  }
});
//get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});
//get all posts
router.get("/", async (req, res) => {
  try {
    let allPost = await Post.find();
    res.json(allPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
