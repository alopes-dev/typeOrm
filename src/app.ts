// import {createConnection} from 'typeorm'
import express from 'express';

// createConnection().then(connection=>{
  const app = express();
  const port = 5252;
  app.get('/', (req, res) => {
    res.send('Mateus!');
  });
  app.listen(port, err => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
  });

// }).catch(error=>console.log(error))

