const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const filmesRoutes = require('./routes/filmes');

app.use(bodyParser.json());
app.use(cors());

const app = express();

app.use(bodyParser.json());
app.use('/filmes', filmesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
