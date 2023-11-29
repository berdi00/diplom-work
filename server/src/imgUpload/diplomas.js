const { Router } = require("express");
const router = Router();
const pool = require("../../db");
const fs = require("fs");
const path = require("path");
const Upload = require("../middlewares/uploadDiplomas");

router.post("/upload/:id", Upload, async (req, res) => {
  const { files } = req;
  const id = req.params.id;
  // console.log(files, "files");
  // console.log(id);

  try {
    // Store the image URLs in separate arrays
    const imageUrls = [];
    for (const file of files) {
      console.log(file);
      const imageExtension = file.originalname.split(".").pop();
      const imageName = `${Date.now()}.${imageExtension}`;
      // const imagePath =
      //  __dirname + `./../api/static/diplomasImage/${imageName}`;
      const imagePath = path.join(
        __dirname,
        "..",
        "api",
        "static",
        "diplomasImage",
        imageName
      );
      // Move the original image file
      console.log(imagePath, __dirname);

      fs.renameSync(file.path, imagePath);

      // Generate the URLs for the images
      const imageUrl = `/diplomas/images/${imageName}`;

      imageUrls.push(imageUrl);
    }

    // Insert the arrays of image URLs into the PostgreSQL table
    const query = "UPDATE diplomas SET images = $1 WHERE id =$2";
    await pool.query(query, [imageUrls, id]);

    res.status(200).send("Images uploaded and stored successfully");
  } catch (error) {
    console.error("Error uploading and storing images:", error);
    res.status(500).send("Error uploading and storing images");
  }
});

module.exports = router;
