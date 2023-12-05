const { Router } = require('express')
const router = Router()
const sharp = require('sharp')
const pool = require('../../db')
const fs = require('fs')

const Upload = require('../middlewares/uploadDiplomaFile')


router.post('/upload', Upload, async (req, res) => {
    const { files } = req;
    const id = req.body.id
    
    console.log(id);
    // console.log(files);

    try {
      // Store the image URLs in separate arrays
      const fileUrls = [];
  
      for (const file of files) {
        const fileExtension = file.originalname.split('.').pop();
        // const originalFileName = file.originalname.split('.')[0]
        const fileName = `file_${Date.now()}.${fileExtension}`;
        const filePath = __dirname + `./../api/static/diplomaFiles/${fileName}`;
        

        // Resize and compress the image
        // await sharp(file.path)
        //   .jpeg({ quality: 80 })
        //   .toFile(filePath);
  
        // Move the original image file
        fs.renameSync(file.path, filePath);
  
        // Generate the URLs for the images
        const fileUrl = `/diplomas/files/${fileName}`;
        
        fileUrls.push(fileUrl);
        
      }
  
      // Insert the arrays of image URLs into the PostgreSQL table
      const query = 'UPDATE diplomas SET file_path = $1 WHERE id =$2';
      await pool.query(query, [fileUrls, id]);
  
      res.status(200).send('Files uploaded and stored successfully');
    } catch (error) { 
      console.error('Error uploading and storing images:', error);
      res.status(500).send('Error uploading and storing images');
    }
});

module.exports = router