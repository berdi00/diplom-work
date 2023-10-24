const multer = require('multer');


const isFile = (req, file, cb) => {
    if(file.mimetype.startsWith('image')){
        return cb(null, true)
    }else {
        return cb(new Error('Only image files allowed!'))
    }
}
  

const upload = multer({
    dest : __dirname + './../api/static/studentsImage',
    fileFilter: isFile
}).array('images')


function Upload(req, res, next) {
    upload(req, res, err => {

        if(err instanceof multer.MulterError){
            return res.status(400).send(err.message)

        }else if(err){
            return res.status(400).send(err.message)

        }
        
        next()
    })
}

module.exports = Upload