const express = require('express'); //requires Express and allows us
const app = express();            // to use it inside our server.js file.

const port = 8000;//declering the port number

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //will display a message on the console that the server is working as expected.

// create a GET route
app.get('/express_backend', (req, res) => {                         //It will set a GET route  
  res.send({                                                      //that we will, later on,
      express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //fetch from our client-side React App.
}); 