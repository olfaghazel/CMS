const express = require('express');
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
app.use('/api/user', require('./routes/api/user'));
app.use('/api/blog', require('./routes/api/blog'));

app.listen(PORT, () => {
  console.log(`Server started on port  ${PORT}`);
});
