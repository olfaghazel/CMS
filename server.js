const express = require('express');
const config = require('config');
const connectDB = require('./config/db');
const cors = require('cors');
// const path = require('path');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => {
  res.send('API Runnuing');
});
PORT = process.env.PORT || 5000;

//Init middleware
app.use(cors());
app.use(express.json({ extended: false }));

//Routes middleware
app.use('/api/user', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/post', require('./routes/api/posts'));

// //Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   //Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'clien', 'build', 'index.html'));
//   });
// }

app.listen(PORT, () => {
  console.log(`Server started on port  ${PORT}`);
});
