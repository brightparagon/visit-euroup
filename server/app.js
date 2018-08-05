import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';

require('dotenv').config();

const app = express();
const port = 3000;
const dbUrl = process.env.MONGODB_URI;

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to mongodb server');
});
db.on('error', console.error);
mongoose.connect(dbUrl, {
  safe: true,
});

app.use(morgan('dev'));
app.use('/', express.static(path.resolve(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendfile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`);
});
