const express = require('express');
const cors = require('cors');
require('dotenv').config()
const multer = require('multer');
const upload = multer({dest: 'uploads/'})
const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

// The Upload 

app.post('/api/fileanalyse', upload.single('upfile'), (req,res) => { 
  const upFile = req.file;
  res.json({name: upFile.originalname, type: upFile.mimetype, size: upFile.size})
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
