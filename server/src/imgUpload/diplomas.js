const { Router } = require('express')
const router = Router()
const sharp = require('sharp')
const pool = require('../../db')
const fs = require('fs')

const Upload = require('../middlewares/uploadDiplomas')


router.post('/upload', Upload, async (req, res) => {
    const { files } = req;
    const id = req.body.id
    
    console.log(id);

    try {
      // Store the image URLs in separate arrays
      const imageUrls = [];
      for (const file of files) {
        const imageExtension = file.originalname.split('.').pop();
        const imageName = `image_${Date.now()}.${imageExtension}`;
        const imagePath = __dirname + `./../api/static/diplomasImage/${imageName}`;
        
  
        // Resize and compress the image
        // await sharp(file.path)
        //   .jpeg({ quality: 80 })
        //   .toFile(imagePath);
  
        // Move the original image file
        fs.renameSync(file.path, imagePath);
  
        // Generate the URLs for the images
        const imageUrl = `/diplomas/images/${imageName}`;
        
        imageUrls.push(imageUrl);
        
      }
  
      // Insert the arrays of image URLs into the PostgreSQL table
      const query = 'UPDATE diplomas SET images = $1 WHERE id =$2';
      await pool.query(query, [imageUrls, id]);
  
      res.status(200).send('Images uploaded and stored successfully');
    } catch (error) { 
      console.error('Error uploading and storing images:', error);
      res.status(500).send('Error uploading and storing images');
    }
});

module.exports = router