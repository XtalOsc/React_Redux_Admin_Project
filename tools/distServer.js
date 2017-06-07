/* eslint-disable no-console*/
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3001;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});//end app.get

app.listen(port, function(err){
  if (err){
    console.log(err);
  }//end if
  else {
    open(`http://localhost:${port}`);
  }//end else
});//end app.listen
