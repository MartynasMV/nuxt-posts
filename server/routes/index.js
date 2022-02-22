const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const filePath = "../../store/initial_data.json";
const initialData = require(filePath);
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.get("/posts", function (req, res) {
  return res.json({ posts: "Just some testing data" });
});

app.post("/posts", function (req, res) {
  const post = req.body;
  initialData.posts.push(post);
  fs.writeFile(
    path.join(__dirname, filePath),
    JSON.stringify(initialData, null, 2),
    function (err) {
      if (err) {
        return res.status(422).send(err);
      }
      console.log("sending data to client");
      return res.json({ message: "file Successfully updated" });
    }
    //null and 2 so Json would be indented 2 spaces and every new key variable would be on a new line
  );
});

app.patch("/posts/:id", function (req, res) {
  //return res.json({ posts: "Data updated" });
  const id = req.params.id;
  const post = req.body;

  const index = initialData.posts.findIndex((p) => p._id === post._id);
  if (index !== -1) {
    initialData.posts[index] = post;
    fs.writeFile(
      path.join(__dirname, filePath),
      JSON.stringify(initialData, null, 2),
      function (err) {
        if (err) {
          return res.status(422).send(err);
        }
        console.log("updating");
        return res.json({ message: "file Successfully updated" });
      }
    );
  } else {
    return res.status(422).send({ error: "Post cant be updated" });
  }
});
app.delete("/posts/:id", function (req, res) {
  const id = req.params.id;
  const index = initialData.posts.findIndex((p) => p._id === id);
  if (index !== -1) {
    initialData.posts.splice(index, 1);
    console.log("deleting post with index of :", index);
    fs.writeFile(
      path.join(__dirname, filePath),
      JSON.stringify(initialData, null, 2),
      function (err) {
        if (err) {
          return res.status(422).send(err);
        }
        console.log("updating");
        return res.json("file Successfully deleted");
      }
    );
  } else {
    return res.status(422).send({ error: "Post cant be deleted" });
  }
});

module.exports = {
  path: "/api",
  handler: app,
};
