import mongoose from "mongoose";

import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.json(postMessages);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  // console.log(post);
  try {
    const newPostMessage = new PostMessage(post);
    await newPostMessage.save();
    res.status(201).json(newPostMessage);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const body = req.body;
  const allowedUpdates = [
    "tags",
    "likecount",
    "creator",
    "title",
    "message",
    "selectedfile",
  ];
  const requestedUpdates = Object.keys(req.body);

  try {
    const allowed = allowedUpdates.every(
      (update, index) => requestedUpdates[index].toLowerCase() === update
    );
    if (!allowed) throw new Error("disallowed");

    if (!mongoose.Types.ObjectId.isValid(_id))
      throw new Error("Not a valid id");

    const post = await PostMessage.findById(_id);

    if (!post) throw new error("Post not found");

    Object.assign(post, body);
    // post = { ...post, ...body };

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(400).json({ err: err.message });
    console.log(err);
  }
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) throw new Error("Unknown id");
    const post = await PostMessage.deleteOne({ _id });
    res.json({ message: post._id });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) throw new Error("Unknown id");
    let post = await PostMessage.findById(_id);
    post = await PostMessage.findByIdAndUpdate(
      _id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );
    res.json(post);
  } catch (err) {
    res.status(500).json({ err: err.message });
    console.log(err);
  }
};
