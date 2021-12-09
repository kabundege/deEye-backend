const multer = require('multer');
const path = require('path');
  
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads')
    },
    filename: (req, file, cb) => {
        const name = file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/')[1];
        req.body.image = name;
        cb(null, name)
    }
});
  
const upload = multer({ storage });;

module.exports = upload
