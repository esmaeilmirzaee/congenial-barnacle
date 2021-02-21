const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// MongoURI
const mongoURI =
  'mongodb://@localhost:27018/files?readWrites=true&w=majority&ssl=false';

// Create mongo connection
const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs;

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
  console.log(gfs);
});

// Create storage engine
var storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketname: 'uploads',
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

// @desc  Get home
// @route GET /
app.get('/', (req, res) => {
  res.render('index');
});

// @desc Post file
// @route POST /upload
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});

app.listen(4000, () => {
  console.log('Listening on 4k');
});
